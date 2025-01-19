'use client'
import { api } from "@/libs/axios";
import { FormEvent, useState } from "react";

export function LoginForm() {
    const [email, setEmail] = useState('admin@admin');
    const [password, setPassword] = useState('admin');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        api.get('/sanctum/csrf-cookie').then(() => {
            api.post('/login', {
                email,
                password
            }).then(response => {
                console.log(response.data);
            }).catch(error => {
                setErrors(error.response.data.errors);
                console.log(error);
            })
        })
    };

    return (
        <div className="flex items-center flex-col justify-center min-h-screen bg-gray-100">
            {Object.keys(errors).length > 0 && (
                <div className="bg-red-500 text-white py-2 px-4 mb-4 rounded">
                    <ul>
                        {Object.entries(errors).map(([field, message]) => (
                            <li key={field}>{message}</li>
                        ))}
                    </ul>
                </div>
            )}
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    />
                </div>
                <button type="submit" className="w-full py-2 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">
                    Entrar
                </button>
            </form>
        </div>
    );
}