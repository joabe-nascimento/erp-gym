import { FaEdit, FaTrash } from "react-icons/fa";
import Sidebar from "../sidebar/page";

export default function Users() {
  return (
    <Sidebar>
      <div className="flex flex-col mx-2 md:mx-8 lg:mx-12">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-black">Usuários</h1>
          <p className="text-gray-600">Gerencie sua academia de forma eficiente.</p>
        </header>

        {/* Barra de Pesquisa */}
        <div className="flex justify-end mb-6">
          <input
            type="text"
            placeholder="Buscar por nome..."
            className="px-4 py-2 border rounded-lg w-full md:w-1/3 lg:w-1/4 bg-white shadow-md text-gray-700"
          />
        </div>

        {/* Seção de detalhes dos usuários */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-black mb-4">Detalhes dos Usuários</h2>

          {/* Contêiner de rolagem para a tabela */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-fixed border-collapse border border-gray-200">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-black">Nome</th>
                  <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-black">Email</th>
                  <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-black">Telefone</th>
                  <th className="border border-gray-300 px-6 py-3 text-left text-sm font-semibold text-black">Endereço</th>
                  <th className="border border-gray-300 px-6 py-3 text-center text-sm font-semibold text-black">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="border border-gray-300 px-6 py-3 text-sm text-black truncate">João Silva</td>
                  <td className="border border-gray-300 px-6 py-3 text-sm text-black truncate">joao@example.com</td>
                  <td className="border border-gray-300 px-6 py-3 text-sm text-black truncate">(11) 1234-5678</td>
                  <td className="border border-gray-300 px-6 py-3 text-sm text-black truncate">Rua A, 123</td>
                  <td className="border border-gray-300 px-6 py-3 text-center">
                    <button className="text-blue-500 hover:text-blue-700 px-2 py-1 rounded">
                      <FaEdit />
                    </button>
                    <button className="text-red-500 hover:text-red-700 px-2 py-1 rounded ml-2">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
                <tr className="bg-white hover:bg-gray-100">
                  <td className="border border-gray-300 px-6 py-3 text-sm text-black truncate">Maria Oliveira</td>
                  <td className="border border-gray-300 px-6 py-3 text-sm text-black truncate">maria@example.com</td>
                  <td className="border border-gray-300 px-6 py-3 text-sm text-black truncate">(21) 8765-4321</td>
                  <td className="border border-gray-300 px-6 py-3 text-sm text-black truncate">Avenida B, 456</td>
                  <td className="border border-gray-300 px-6 py-3 text-center">
                    <button className="text-blue-500 hover:text-blue-700 px-2 py-1 rounded">
                      <FaEdit />
                    </button>
                    <button className="text-red-500 hover:text-red-700 px-2 py-1 rounded ml-2">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100">
                  <td className="border border-gray-300 px-6 py-3 text-sm text-black truncate">Carlos Pereira</td>
                  <td className="border border-gray-300 px-6 py-3 text-sm text-black truncate">carlos@example.com</td>
                  <td className="border border-gray-300 px-6 py-3 text-sm text-black truncate">(31) 1122-3344</td>
                  <td className="border border-gray-300 px-6 py-3 text-sm text-black truncate">Praça C, 789</td>
                  <td className="border border-gray-300 px-6 py-3 text-center">
                    <button className="text-blue-500 hover:text-blue-700 px-2 py-1 rounded">
                      <FaEdit />
                    </button>
                    <button className="text-red-500 hover:text-red-700 px-2 py-1 rounded ml-2">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}
