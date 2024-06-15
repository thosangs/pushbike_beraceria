// app/home/page.tsx
'use client';

import { Card, Link, CardHeader, Divider, CardBody, Button } from "@nextui-org/react";
import ranges from '../../lib/ranges';

export default function Home() {
    return (
        <div className="container mx-auto flex justify-center items-center">
            <div className="overflow-x-auto w-full px-4">
                <div className="flex flex-col gap-8 items-center w-full">
                    {Object.entries(ranges).map(([year, types]) => (
                        <Card key={year} className="w-full max-w-[600px] mx-4">
                            <CardHeader className="flex gap-3">
                                <div
                                    className="w-16 h-16 rounded-lg bg-blue-500 flex justify-center items-center text-lg text-white"
                                >
                                    {year.slice(-2)}
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className="text-lg">Tahun {year}</p>
                                </div>
                            </CardHeader>
                            <Divider />
                            <CardBody className="flex flex-col gap-4">
                                {Object.entries(types).map(([type]) => (
                                    <Button
                                        key={type}
                                        href={`/livescore/${year}/${type}`}
                                        as={Link}
                                        color={type === 'girl' ? 'danger' : 'primary'}
                                        showAnchorIcon
                                        variant="solid"
                                        style={{ width: "100%", height: "70px" }}
                                    >
                                        {type.toUpperCase()}
                                    </Button>
                                ))}
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
