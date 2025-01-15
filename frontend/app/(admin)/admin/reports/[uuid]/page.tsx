export default async function Page() {
    const eventDetails = {
        name: "Evento A",
        description: "Descrição completa do evento.",
        location: "Auditório XYZ",
        maxParticipants: 200,
        startDate: "10/01/2025 09:00",
        endDate: "12/01/2025 18:00",
        participants: 150,
        checkIns: 120,
        staff: [
            { name: "João Silva", email: "joao@email.com", role: "Coordenador" },
            { name: "Maria Santos", email: "maria@email.com", role: "Suporte" },
        ],
        visitors: [
            { name: "Ana Paula", email: "ana@email.com", checkIn: true },
            { name: "Carlos Souza", email: "carlos@email.com", checkIn: false },
        ],
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">Detalhes do Relatório: {eventDetails.name}</h1>

            {/* Seção de Informações Gerais */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Informações Gerais</h2>
                <div className="bg-white shadow rounded-lg p-6">
                    <p><strong>Nome:</strong> {eventDetails.name}</p>
                    <p><strong>Descrição:</strong> {eventDetails.description}</p>
                    <p><strong>Localização:</strong> {eventDetails.location}</p>
                    <p><strong>Data de Início:</strong> {eventDetails.startDate}</p>
                    <p><strong>Data de Fim:</strong> {eventDetails.endDate}</p>
                    <p><strong>Máximo de Participantes:</strong> {eventDetails.maxParticipants}</p>
                </div>
            </section>

            {/* Seção de Estatísticas */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Estatísticas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white shadow rounded-lg p-6">
                        <p><strong>Participantes Totais:</strong> {eventDetails.participants}</p>
                    </div>
                    <div className="bg-white shadow rounded-lg p-6">
                        <p><strong>Check-ins Realizados:</strong> {eventDetails.checkIns}</p>
                    </div>
                </div>
            </section>

            {/* Seção de Staff */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Equipe Staff</h2>
                <table className="w-full bg-white shadow rounded-lg">
                    <thead>
                        <tr className="border-b">
                            <th className="p-4 text-left">Nome</th>
                            <th className="p-4 text-left">Email</th>
                            <th className="p-4 text-left">Função</th>
                        </tr>
                    </thead>
                    <tbody>
                        {eventDetails.staff.map((staff, index) => (
                            <tr key={index} className="border-b">
                                <td className="p-4">{staff.name}</td>
                                <td className="p-4">{staff.email}</td>
                                <td className="p-4">{staff.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            {/* Seção de Visitantes */}
            <section>
                <h2 className="text-xl font-semibold mb-4">Visitantes</h2>
                <table className="w-full bg-white shadow rounded-lg">
                    <thead>
                        <tr className="border-b">
                            <th className="p-4 text-left">Nome</th>
                            <th className="p-4 text-left">Email</th>
                            <th className="p-4 text-left">Check-in</th>
                        </tr>
                    </thead>
                    <tbody>
                        {eventDetails.visitors.map((visitor, index) => (
                            <tr key={index} className="border-b">
                                <td className="p-4">{visitor.name}</td>
                                <td className="p-4">{visitor.email}</td>
                                <td className="p-4">
                                    {visitor.checkIn ? (
                                        <span className="text-green-600 font-semibold">Realizado</span>
                                    ) : (
                                        <span className="text-red-600 font-semibold">Pendente</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

