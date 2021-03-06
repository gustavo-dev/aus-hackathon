import React from "react";

interface VaccineCard {
    name: string;
    i: number;
}

export const VacineCard: React.FC<VaccineCard> = ({ name, i }) => {
    return (
        <div
            className={`flex justify-between items-center mb-4 p-2 ${
                i % 2 === 0 && "bg-gray-50"
            }`}
        >
            <div>
                <div>
                    <h3 className="text-md font-bold">{name}</h3>
                </div>
            </div>
            <div className="flex items-center rounded h-8 px-2">
                <p>Pedente</p>
            </div>
        </div>
    );
};
