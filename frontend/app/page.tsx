'use client'

import { api } from "@/libs/axios";
import Link from "next/link";

export default async function Page() {

  const res = await api.get('/sanctum/csrf-cookie')
  console.log(res)


  const events = [
    {
      id: 1,
      name: "Conferência de Tecnologia 2025",
      description: "Explore as tendências tecnológicas do futuro.",
      date: "2025-02-15 10:00",
      location: "Centro de Convenções São Paulo",
    },
    {
      id: 2,
      name: "Festival de Música Alternativa",
      description: "Descubra bandas incríveis em um evento único.",
      date: "2025-03-20 18:00",
      location: "Parque do Ibirapuera",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Bem-vindo ao Sistema de Eventos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{event.name}</h2>
            <p className="text-gray-700 mb-2">{event.description}</p>
            <p className="text-gray-500 mb-1">
              <strong>Data:</strong> {event.date}
            </p>
            <p className="text-gray-500 mb-4">
              <strong>Local:</strong> {event.location}
            </p>
            <Link href={`/events/${event.id}`} passHref>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                Ver Detalhes
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
} 