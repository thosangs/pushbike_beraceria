// app/schedule/page.tsx
'use client';

import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import rules from '../../lib/rules';

const Regulasi = () => {
    // Ensure TypeScript knows the structure of the rules object
    const rulesEntries = Object.entries(rules) as [string, string[]][];

    return (
        <div className="container mx-auto p-4">
            <div className="overflow-x-auto my-4">
                {rulesEntries.map(([title, content], index) => (
                    <Card key={index} className="w-full max-w-3xl mx-auto my-4">
                        <CardHeader className="flex gap-3">
                            <div
                                className="w-8 h-8 rounded-lg bg-yellow-500 flex justify-center items-center text-lg text-white"
                            >
                                {index + 1}
                            </div>
                            <div className="flex flex-col">
                                <b className="text-l">{title}</b>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <ol className="list-decimal pl-8">
                                {content.map((rule, ruleIndex) => (
                                    <li key={ruleIndex} className="mb-2">{rule}</li>
                                ))}
                            </ol>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Regulasi;
