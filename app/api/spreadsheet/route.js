// app/api/spreadsheet/route.js
import { NextResponse } from 'next/server';
import axios from 'axios';

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const API_KEY = process.env.GOOGLE_API_KEY;

export async function GET() {
    try {
        const range = '2021 (Simulasi)!R27:T33'; // Adjust the range based on your spreadsheet
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${range}?key=${API_KEY}`;

        const response = await axios.get(url);
        const data = response.data.values || [];

        return NextResponse.json({ data });
    } catch (error) {
        console.error('Error accessing spreadsheet:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
