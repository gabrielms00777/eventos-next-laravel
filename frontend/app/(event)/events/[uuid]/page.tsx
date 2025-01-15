import Link from "next/link";

export default async function Page({
    params,
}: {
    params: Promise<{ uuid: string }>
}) {
    const uuid = (await params).uuid
    const event = {
        id: uuid,
        name: "Conferência de Tecnologia 2025",
        description: "Explore as tendências tecnológicas do futuro.",
        date: "2025-02-15 10:00",
        location: "Centro de Convenções São Paulo",
        details:
            "Participe da maior conferência de tecnologia do país, com palestras de especialistas renomados, workshops interativos e oportunidades de networking.",
    };
    if (!uuid) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="bg-gray-50 min-h-screen p-8">
            <div className="bg-white p-6 rounded-md shadow-md max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">{event.name}</h1>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <p className="text-gray-500 mb-2">
                    <strong>Data:</strong> {event.date}
                </p>
                <p className="text-gray-500 mb-2">
                    <strong>Local:</strong> {event.location}
                </p>
                <p className="text-gray-700 mb-6">{event.details}</p>
                <Link
                    href='/'
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    Voltar
                </Link>
            </div>
        </div>
    );
}