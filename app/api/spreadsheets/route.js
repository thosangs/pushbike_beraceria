// app/api/spreadsheet/route.js
import { NextResponse } from 'next/server';
import axios from 'axios';
import ranges from '../../../lib/ranges'; // Adjust the import path as needed

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const API_KEY = process.env.GOOGLE_API_KEY;

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const year = searchParams.get('year');
        const type = searchParams.get('type');

        if (!year || !type) {
            return NextResponse.json({ error: 'Missing year or type parameter' }, { status: 400 });
        }

        const selectedRanges = ranges[year]?.[type];

        if (!selectedRanges) {
            return NextResponse.json({ error: 'Invalid year or type parameter' }, { status: 400 });
        }

        const data = {};

        // Fetch data for all ranges and organize them under their respective keys
        for (const [batch, range] of Object.entries(selectedRanges)) {
            const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${range}?key=${API_KEY}`;
            const response = await axios.get(url);
            const sheetData = response.data.values || [];
            data[batch] = sheetData;
        }

        return NextResponse.json({ data });
    } catch (error) {
        console.error('Error accessing spreadsheet:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
