"use client";

import React from "react";
import Link from "next/link";

const staffList = [
    {
        id: 1,
        name: "Maria Silva",
        email: "maria.silva@exemplo.com",
        phone: "(11) 91234-5678",
        area: "QR Code",
    },
    {
        id: 2,
        name: "João Souza",
        email: "joao.souza@exemplo.com",
        phone: "(21) 99876-5432",
        area: "Registro",
    },
];

const StaffListPage: React.FC = () => {

    return (
        <div className="bg-white p-8 rounded-md shadow-md">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">Funcionários do Evento</h1>
                <Link href={`/events/uuid/admin/staff/create`} passHref>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                        Adicionar Funcionário
                    </button>
                </Link>
            </div>
            <table className="w-full border-collapse border border-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border border-gray-200 p-2">Nome</th>
                        <th className="border border-gray-200 p-2">Email</th>
                        <th className="border border-gray-200 p-2">Telefone</th>
                        <th className="border border-gray-200 p-2">Área</th>
                    </tr>
                </thead>
                <tbody>
                    {staffList.map((staff) => (
                        <tr key={staff.id}>
                            <td className="border border-gray-200 p-2">{staff.name}</td>
                            <td className="border border-gray-200 p-2">{staff.email}</td>
                            <td className="border border-gray-200 p-2">{staff.phone}</td>
                            <td className="border border-gray-200 p-2">{staff.area}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StaffListPage;
