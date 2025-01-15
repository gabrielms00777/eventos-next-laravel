export default async function Page() {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Relatórios Gerais</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-lg font-semibold">Total de Eventos</h2>
                    <p className="text-3xl font-bold">45</p>
                </div>
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-lg font-semibold">Total de Participantes</h2>
                    <p className="text-3xl font-bold">1,245</p>
                </div>
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-lg font-semibold">Eventos Concluídos</h2>
                    <p className="text-3xl font-bold">30</p>
                </div>
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-bold mb-4">Eventos</h2>
                <table className="w-full bg-white shadow rounded-lg">
                    <thead>
                        <tr className="border-b">
                            <th className="p-4 text-left">Nome do Evento</th>
                            <th className="p-4 text-left">Data</th>
                            <th className="p-4 text-left">Status</th>
                            <th className="p-4 text-left">Participantes</th>
                            <th className="p-4 text-left">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Aqui você pode mapear os eventos */}
                        <tr className="border-b">
                            <td className="p-4">Evento A</td>
                            <td className="p-4">10/01/2025 - 12/01/2025</td>
                            <td className="p-4">Ativo</td>
                            <td className="p-4">150</td>
                            <td className="p-4">
                                <button className="text-blue-600">Detalhes</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

