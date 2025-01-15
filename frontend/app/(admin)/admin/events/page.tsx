// app/(admin)/events/page.tsx
"use client";

import Link from "next/link";
import React, { useState } from "react";

const EventsListPage: React.FC = () => {
    const [events, setEvents] = useState([
        {
            id: 1,
            name: "Evento de Tecnologia",
            description: "Um evento sobre inovação e tecnologia.",
            location: "São Paulo",
            maxParticipants: 200,
            startDate: "2025-01-20 09:00",
            endDate: "2025-01-20 18:00",
        },
        {
            id: 2,
            name: "Congresso de Saúde",
            description: "Discussões sobre avanços médicos.",
            location: "Rio de Janeiro",
            maxParticipants: 300,
            startDate: "2025-02-15 10:00",
            endDate: "2025-02-15 17:00",
        },
        // Adicione mais eventos conforme necessário
    ]);

    const handleDelete = (id: number) => {
        if (confirm("Tem certeza de que deseja excluir este evento?")) {
            setEvents(events.filter((event) => event.id !== id));
        }
    };

    return (
        <div className="bg-white p-8 rounded-md shadow-md">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">Lista de Eventos</h1>
                <Link
                    href={'/admin/events/create'}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    Criar Novo Evento
                </Link>
            </div>

            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Nome</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Descrição</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Localização</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Participantes</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Início</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Fim</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {events.length > 0 ? (
                        events.map((event) => (
                            <tr key={event.id}>
                                <td className="border border-gray-300 px-4 py-2">{event.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{event.description}</td>
                                <td className="border border-gray-300 px-4 py-2">{event.location}</td>
                                <td className="border border-gray-300 px-4 py-2">{event.maxParticipants}</td>
                                <td className="border border-gray-300 px-4 py-2">{event.startDate}</td>
                                <td className="border border-gray-300 px-4 py-2">{event.endDate}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    <button
                                        onClick={() => alert(`Redirecionar para edição do evento ${event.id}`)}
                                        className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 mr-2"
                                    >
                                        Editar
                                    </button>
                                    <button
                                        onClick={() => handleDelete(event.id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                                    >
                                        Excluir
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7} className="text-center py-4 text-gray-500">
                                Nenhum evento encontrado.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default EventsListPage;
