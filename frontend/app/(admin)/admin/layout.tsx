import Link from "next/link";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-blue-600 text-white p-6">
                <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
                <nav>
                    <ul className="space-y-4">
                        <li>
                            <Link href="/admin" className="hover:text-blue-300">
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin/events" className="hover:text-blue-300">
                                Eventos
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin/reports" className="hover:text-blue-300">
                                Relatórios
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* <Header /> */}

            {/* Main Content */}
            <main className="flex-1 p-8">
                {children}
            </main>
        </div>
    );
};

export default AdminLayout;
