export default function Page() {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Check-in Manual</h1>
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Buscar por nome, email ou telefone"
                    className="w-full p-3 border rounded-lg"
                />
            </div>
            <div className="bg-white shadow rounded-lg p-6 mb-6">
                <h2 className="text-lg font-semibold mb-4">Registrar Novo Visitante</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Nome</label>
                        <input
                            type="text"
                            className="w-full p-3 border rounded-lg"
                            placeholder="Nome do Visitante"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            className="w-full p-3 border rounded-lg"
                            placeholder="Email do Visitante"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Telefone</label>
                        <input
                            type="text"
                            className="w-full p-3 border rounded-lg"
                            placeholder="Telefone do Visitante"
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg">
                        Registrar e Marcar Presença
                    </button>
                </form>
            </div>
        </div>
    );
}