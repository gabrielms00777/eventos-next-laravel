"use client";

import React, { useState } from "react";

export default function Page() {
    const [eventData, setEventData] = useState({
        name: "",
        description: "",
        location: "",
        maxParticipants: 0,
        startDate: "",
        endDate: "",
        adminName: "",
        adminEmail: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEventData({ ...eventData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Event Data:", eventData);
        // Aqui você pode enviar os dados para a API
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
            <h1 className="text-2xl font-bold mb-6">Criar Novo Evento</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Informações do Evento */}
                <section>
                    <h2 className="text-xl font-semibold mb-4">Informações do Evento</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Nome do Evento
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={eventData.name}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                                Localização
                            </label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                value={eventData.location}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                Descrição
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                value={eventData.description}
                                onChange={handleChange}
                                rows={4}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="maxParticipants" className="block text-sm font-medium text-gray-700">
                                Máximo de Participantes
                            </label>
                            <input
                                type="number"
                                id="maxParticipants"
                                name="maxParticipants"
                                value={eventData.maxParticipants}
                                onChange={handleChange}
                                required
                                min={1}
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                                Data e Hora de Início
                            </label>
                            <input
                                type="datetime-local"
                                id="startDate"
                                name="startDate"
                                value={eventData.startDate}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                                Data e Hora de Término
                            </label>
                            <input
                                type="datetime-local"
                                id="endDate"
                                name="endDate"
                                value={eventData.endDate}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                    </div>
                </section>

                {/* Responsável pelo Evento */}
                <section>
                    <h2 className="text-xl font-semibold mb-4">Responsável pelo Evento</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="adminName" className="block text-sm font-medium text-gray-700">
                                Nome do Responsável
                            </label>
                            <input
                                type="text"
                                id="adminName"
                                name="adminName"
                                value={eventData.adminName}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                        <div>
                            <label htmlFor="adminEmail" className="block text-sm font-medium text-gray-700">
                                Email do Responsável
                            </label>
                            <input
                                type="email"
                                id="adminEmail"
                                name="adminEmail"
                                value={eventData.adminEmail}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            />
                        </div>
                    </div>
                </section>

                {/* Botão de Submissão */}
                <div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
                    >
                        Criar Evento
                    </button>
                </div>
            </form>
        </div>
    );
};

