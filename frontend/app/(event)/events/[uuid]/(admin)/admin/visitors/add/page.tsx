"use client";

import React, { useState } from "react";
import { useRouter } from "next/router";

const AddVisitorPage: React.FC = () => {
    const uuid = 'uuid'

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Simula validação do servidor
        if (!formData.name) setErrors((prev) => ({ ...prev, name: "Nome é obrigatório" }));
        else setErrors((prev) => ({ ...prev, name: "" }));

        if (!formData.email) setErrors((prev) => ({ ...prev, email: "Email é obrigatório" }));
        else setErrors((prev) => ({ ...prev, email: "" }));

        if (!formData.phone) setErrors((prev) => ({ ...prev, phone: "Telefone é obrigatório" }));
        else setErrors((prev) => ({ ...prev, phone: "" }));

        // Simular sucesso
        if (formData.name && formData.email && formData.phone) {
            alert("Visitante adicionado com sucesso!");
        }
    };

    return (
        <div className="bg-white p-8 rounded-md shadow-md">
            <h1 className="text-2xl font-semibold mb-6">Adicionar Visitante</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block font-medium mb-1">Nome</label>
                    <input
                        type="text"
                        className="w-full border p-2 rounded-md"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div className="mb-4">
                    <label className="block font-medium mb-1">Email</label>
                    <input
                        type="email"
                        className="w-full border p-2 rounded-md"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div className="mb-6">
                    <label className="block font-medium mb-1">Telefone</label>
                    <input
                        type="tel"
                        className="w-full border p-2 rounded-md"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                    Salvar
                </button>
            </form>
        </div>
    );
};

export default AddVisitorPage;
