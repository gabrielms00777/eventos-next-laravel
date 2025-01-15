export default function Page() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Detalhes do Evento</h1>
            <p>Nome: Evento A</p>
            <p>Data: 2025-01-20</p>
            <p>Status: Ativo</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Enviar Link ao Responsável
            </button>
        </div>
    );
}
