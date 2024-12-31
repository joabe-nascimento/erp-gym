"use client"; // Adiciona a diretiva de cliente

import { useState } from "react"; // useState pode ser usado em componentes de cliente
import { useRouter } from "next/navigation"; // Use next/navigation ao invés de next/router

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de registro

    // Supondo registro bem-sucedido, redireciona
    router.push("/login"); // Redireciona para a página de login após registro
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-500 to-blue-600">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Cadastro
        </h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nome
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Senha
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Cadastrar
        </button>
        <p className="mt-4 text-center text-gray-600">
          Já tem uma conta?{" "}
          <a href="/login" className="text-green-500 hover:underline">
            Entrar
          </a>
        </p>
      </form>
    </div>
  );
}
