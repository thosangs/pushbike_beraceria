'use client';

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import doorprizes from '../../lib/doorprizes';

const Doorprizes = () => {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-xl font-bold mb-4 mx-auto w-full max-w-3xl">
                Pemenang Doorprizes
            </h2>
            <div className="overflow-x-auto">
                <Table aria-label="Doorprizes Winners table" className="mx-auto w-full max-w-3xl">
                    <TableHeader>
                        <TableColumn>Nama</TableColumn>
                        <TableColumn>Doorprizes</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {doorprizes.map((entry, index) => (
                            <TableRow key={index}>
                                <TableCell className="whitespace-nowrap text-black">{entry.Name.toUpperCase()}</TableCell>
                                <TableCell className="whitespace-nowrap text-black">{entry.Doorprizes}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default Doorprizes;
