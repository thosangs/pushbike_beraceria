// app/schedule/page.tsx
'use client';

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import schedule from '../../lib/schedules';

const Schedule = () => {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-xl font-bold mb-4 mx-auto w-full max-w-3xl">
                Jadwal Kegiatan
            </h2>
            <div className="overflow-x-auto">
                <Table aria-label="Jadwal Kegiatan table" className="mx-auto w-full max-w-3xl">
                    <TableHeader>
                        <TableColumn>Waktu</TableColumn>
                        <TableColumn>Acara</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {schedule.map(([time, event], index) => (
                            <TableRow key={index}>
                                <TableCell className="whitespace-nowrap text-black">{time}</TableCell>
                                <TableCell className="whitespace-nowrap text-black">{event}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="overflow-x-auto my-4">
                <Card className="w-full max-w-3xl mx-auto">
                    <CardHeader className="flex gap-3">
                        <div
                            className="w-8 h-8 rounded-lg bg-yellow-500 flex justify-center items-center text-lg text-white"
                        >
                            I
                        </div>
                        <div className="flex flex-col">
                            <b className="text-l">Informasi Penting!</b>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p>Peserta Wajib Hadir 90 menit Sebelum Jadwal Race</p>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default Schedule;
