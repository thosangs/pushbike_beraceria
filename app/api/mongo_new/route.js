import { NextResponse } from 'next/server';
import axios from 'axios';
import ranges from '../../../lib/ranges'; // Adjust the import path as needed
import { connectToDatabase } from '../../../lib/db';

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const API_KEY = process.env.GOOGLE_API_KEY;
const PASSKEY = process.env.PASSKEY;


async function fetchAndUpsertData(year, type, batches, db) {
    const data = {};

    for (const [batch, selectedRanges] of Object.entries(batches)) {
        console.log(year, type, batch, selectedRanges)
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${selectedRanges}?key=${API_KEY}`;
        const response = await axios.get(url);
        const sheetData = response.data.values || [];
        data[batch] = sheetData;
    }

    const collection = db.collection('livescore');
    await collection.updateOne(
        { year, type },
        { $set: { data, updatedAt: new Date() } },
        { upsert: true }
    );
}

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const secret_key = searchParams.get('key');
        const year = searchParams.get('year');
        const type = searchParams.get('type');

        if (secret_key != PASSKEY) {
            return NextResponse.json({ error: 'Whoops, wrong code' }, { status: 403 });
        }

        const { db } = await connectToDatabase();
        const batchData = ranges[year]?.[type];

        if (!batchData) {
            return NextResponse.json({ error: 'Data not found' }, { status: 404 });
        }

        await fetchAndUpsertData(year, type, batchData, db);


        // How to loop batchData ?


        // Loop through all years and types in the ranges dictionary
        // for (const [year, types] of Object.entries(ranges)) {
        //     for (const [type, batches] of Object.entries(types)) {
        //         await fetchAndUpsertData(year, type, batches, db);
        //     }
        // }

        return NextResponse.json({ message: 'Data successfully inserted/updated into MongoDB' });
    } catch (error) {
        console.error('Error accessing spreadsheet:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
