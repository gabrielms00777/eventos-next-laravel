"use client";

import React, { useState } from "react";

const AddStaffPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        area: "QR Code",
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Simula validação do servidor
        if (!formData.name) setErrors((prev) => ({ ...prev, name: "Nome é obrigatório" }));
        else setErrors((prev) => ({ ...prev, name: "" }));

        // Simular sucesso
        if (formData.name) {
            alert("Funcionário adicionado com sucesso!");
        }
    };

    return (
        <div className="bg-white p-8 rounded-md shadow-md">
            <h1 className="text-2xl font-semibold mb-6">Adicionar Funcionário</h1>
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
                </div>
                <div className="mb-4">
                    <label className="block font-medium mb-1">Telefone</label>
                    <input
                        type="tel"
                        className="w-full border p-2 rounded-md"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-medium mb-1">Senha Inicial</label>
                    <input
                        type="password"
                        className="w-full border p-2 rounded-md"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                </div>
                <div className="mb-6">
                    <label className="block font-medium mb-1">Área</label>
                    <select
                        className="w-full border p-2 rounded-md"
                        value={formData.area}
                        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    >
                        <option value="QR Code">QR Code</option>
                        <option value="Registro">Registro</option>
                        <option value="Suporte">Suporte</option>
                    </select>
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                    Salvar
                </button>
            </form>
        </div>
    );
};

export default AddStaffPage;
