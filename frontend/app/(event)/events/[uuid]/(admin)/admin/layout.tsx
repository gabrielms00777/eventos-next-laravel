import Link from "next/link";

const EventAdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-green-600 text-white p-6">
                <h2 className="text-2xl font-bold mb-6">Gerenciar Evento</h2>
                <nav>
                    <ul className="space-y-4">
                        <li>
                            <Link href='/events/uuid/admin' className="hover:text-green-300">
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link href='/events/uuid/admin/staff' className="hover:text-green-300">
                                Funcionários
                            </Link>
                        </li>
                        <li>
                            <Link href='/events/uuid/admin/visitors' className="hover:text-green-300">
                                Visitantes
                            </Link>
                        </li>
                        <li>
                            <Link href='/events/uuid/admin/reports' className="hover:text-green-300">
                                Relatórios
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                {children}
            </main>
        </div>
    );
};

export default EventAdminLayout;
