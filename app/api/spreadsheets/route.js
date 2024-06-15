import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/db';

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const year = searchParams.get('year');
        const type = searchParams.get('type');

        if (!year || !type) {
            return NextResponse.json({ error: 'Missing year or type parameter' }, { status: 400 });
        }

        const { db } = await connectToDatabase();
        const collection = db.collection('livescore');

        // Query the database for the data with the specified year and type
        const document = await collection.findOne({ year, type });

        if (!document) {
            return NextResponse.json({ error: 'Data not found for the specified year and type' }, { status: 404 });
        }

        return NextResponse.json({ data: document.data });
    } catch (error) {
        console.error('Error accessing MongoDB:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
