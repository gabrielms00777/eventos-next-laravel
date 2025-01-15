"use client";

import React from "react";
import Link from "next/link";

const EventAdminPage: React.FC = () => {

    const eventDetails = {
        name: "Evento de Tecnologia",
        description: "Um evento sobre inovação e tecnologia.",
        location: "São Paulo",
        startDate: "2025-01-20 09:00",
        endDate: "2025-01-20 18:00",
        maxParticipants: 200,
        responsible: {
            name: "João Silva",
            email: "joao@exemplo.com",
        },
    };

    return (
        <div className="bg-white p-8 rounded-md shadow-md">
            <h1 className="text-2xl font-semibold mb-6">Administração do Evento: {eventDetails.name}</h1>

            <div className="mb-6">
                <h2 className="text-lg font-medium">Informações Gerais</h2>
                <p><strong>Descrição:</strong> {eventDetails.description}</p>
                <p><strong>Localização:</strong> {eventDetails.location}</p>
                <p><strong>Data de Início:</strong> {eventDetails.startDate}</p>
                <p><strong>Data de Fim:</strong> {eventDetails.endDate}</p>
                <p><strong>Participantes Máximos:</strong> {eventDetails.maxParticipants}</p>
                <p><strong>Responsável:</strong> {eventDetails.responsible.name} ({eventDetails.responsible.email})</p>
            </div>

            <div className="flex space-x-4">
                <Link href={`/events/uuid/admin/staff`} passHref>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                        Gerenciar Funcionários
                    </button>
                </Link>

                <Link href={`/events/uuid/admin/visitors`} passHref>
                    <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
                        Gerenciar Visitantes
                    </button>
                </Link>

                <Link href={`/events/uuid/admin/reports`} passHref>
                    <button className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600">
                        Relatórios
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default EventAdminPage;
