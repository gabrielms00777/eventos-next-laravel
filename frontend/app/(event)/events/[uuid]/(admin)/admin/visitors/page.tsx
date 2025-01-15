"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const visitorList = [
    {
        id: 1,
        name: "Carlos Almeida",
        email: "carlos.almeida@exemplo.com",
        phone: "(11) 98765-4321",
    },
    {
        id: 2,
        name: "Fernanda Costa",
        email: "fernanda.costa@exemplo.com",
        phone: "(21) 99887-6543",
    },
];

const VisitorsListPage: React.FC = () => {
    const uuid = 'uuid'

    if (!uuid) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="bg-white p-8 rounded-md shadow-md">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">Visitantes do Evento</h1>
                <Link href={`/events/${uuid}/admin/visitors/add`} passHref>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                        Adicionar Visitante
                    </button>
                </Link>
            </div>
            <table className="w-full border-collapse border border-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border border-gray-200 p-2">Nome</th>
                        <th className="border border-gray-200 p-2">Email</th>
                        <th className="border border-gray-200 p-2">Telefone</th>
                    </tr>
                </thead>
                <tbody>
                    {visitorList.map((visitor) => (
                        <tr key={visitor.id}>
                            <td className="border border-gray-200 p-2">{visitor.name}</td>
                            <td className="border border-gray-200 p-2">{visitor.email}</td>
                            <td className="border border-gray-200 p-2">{visitor.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VisitorsListPage;
