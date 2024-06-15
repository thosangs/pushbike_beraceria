// app/livescore/[year]/[type]/page.tsx
'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { Progress } from "@nextui-org/progress";

const Livescore = ({ params }: { params: { year: string, type: string } }) => {
    const { year, type } = params;
    const [data, setData] = useState<Record<string, any[]>>({});

    useEffect(() => {
        if (year && type) {
            fetchData();
        }
    }, [year, type]);

    const fetchData = async () => {
        try {
            const res = await axios.get(`/api/spreadsheets?year=${year}&type=${type}`);
            setData(res.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    if (!year || !type || Object.keys(data).length === 0) {
        return <Progress
            size="sm"
            isIndeterminate
            aria-label="Loading..."
            className="max-w-md"
        />;
    }

    return (
        <div className="container mx-auto p-4">
            {Object.entries(data).map(([batch, batchData]) => (
                <div key={batch} className="mb-8">
                    <h2 className="text-xl font-bold mb-4 mx-auto w-full max-w-3xl">{batch}</h2>
                    <div className="overflow-x-auto">
                        <Table aria-label={`${batch} data table`} className="mx-auto w-full max-w-3xl">
                            <TableHeader>
                                {batchData[0].map((column: string, index: number) => (
                                    <TableColumn key={index}>{column}</TableColumn>
                                ))}
                            </TableHeader>
                            <TableBody>
                                {batchData.slice(1).map((row: string[], rowIndex: number) => (
                                    <TableRow key={rowIndex}>
                                        {row.map((cell: string, cellIndex: number) => (
                                            <TableCell key={cellIndex} className="whitespace-nowrap">{cell}</TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Livescore;
