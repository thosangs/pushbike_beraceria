// app/livescore/[year]/[type]/page.tsx
'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { Progress } from "@nextui-org/progress";
import ranges from '../../../../lib/ranges';

const Livescore = ({ params }: { params: { year: string, type: string } }) => {
    const { year, type } = params;
    const [data, setData] = useState<Record<string, any[]>>({});
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (year && type) {
            if (ranges[year] && ranges[year][type]) {
                fetchData();
                setError(null); // Clear any previous error messages
            } else {
                setError("invalid");
                console.error('Invalid Year or Type');
            }
        }
    }, [year, type]);

    const fetchData = async () => {
        try {
            const res = await axios.get(`/api/spreadsheets?year=${year}&type=${type}`);
            setData(res.data.data);
        } catch (error) {
            setError("fetchError");
            console.error('Error fetching data:', error);
        }
    };

    if ((!year || !type || Object.keys(data).length === 0) && error === null) {
        return <Progress
            size="sm"
            isIndeterminate
            aria-label="Loading..."
            className="max-w h-screen"
        />;
    }

    if (error === "invalid" || error === "fetchError") {
        return <div className="container mx-auto p-4 h-screen">
            <div className="overflow-x-auto my-4">
                <Card className="w-full max-w-3xl mx-auto">
                    <CardHeader className="flex gap-3">
                        <div
                            className="w-8 h-8 rounded-lg bg-red-500 flex justify-center items-center text-lg text-white"
                        >
                            E
                        </div>
                        <div className="flex flex-col">
                            <b className="text-l">Informasi Tidak Ditemukan!</b>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p>Tidak Ditemukan Data Tahun <kbd>{year}</kbd> dan Kelas <kbd>{type}</kbd></p>
                    </CardBody>
                </Card>
            </div>
        </div>
    }

    return (
        <div className="container mx-auto p-4">
            {Object.entries(data).map(([batch, batchData]) => (
                <div key={batch} className="mb-8">
                    <h2 className="text-xl font-bold mb-4 mx-auto w-full max-w-3xl">
                        {batch.toLocaleUpperCase()} {type.toUpperCase()} {year.toUpperCase()}
                    </h2>
                    <div className="overflow-x-auto">
                        <Table aria-label={`${batch} data table`} className="mx-auto w-full max-w-3xl">
                            <TableHeader>
                                {batchData[0].map((column: string, index: number) => (
                                    <TableColumn key={index} className="dark">{column}</TableColumn>
                                ))}
                            </TableHeader>
                            <TableBody>
                                {batchData.slice(1).map((row: string[], rowIndex: number) => (
                                    <TableRow key={rowIndex}>
                                        {row.map((cell: string, cellIndex: number) => (
                                            <TableCell key={cellIndex} className="whitespace-nowrap text-black">{cell}</TableCell>
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
