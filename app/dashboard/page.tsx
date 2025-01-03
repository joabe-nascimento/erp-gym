import Sidebar from "../sidebar/page";

export default function Home() {
  return (
    <Sidebar>
      <div className="flex flex-col bg-gray-100 mx-2 md:mx-8 lg:mx-12">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Dashboard da Academia
          </h1>
          <p className="text-gray-600">
            Gerencie sua academia de forma eficiente.
          </p>
        </header>

        {/* Resumo de métricas com gradiente */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold text-white">
              Total de Membros
            </h2>
            <p className="text-3xl font-bold text-white">150</p>
          </div>
          <div className="bg-gradient-to-r from-green-400 to-green-600 shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold text-white">
              Receitas do Mês
            </h2>
            <p className="text-3xl font-bold text-white">R$ 25.000</p>
          </div>
          <div className="bg-gradient-to-r from-orange-400 to-orange-600 shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold text-white">
              Aulas Agendadas
            </h2>
            <p className="text-3xl font-bold text-white">42</p>
          </div>
          <div className="bg-gradient-to-r from-purple-400 to-purple-600 shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold text-white">Planos Ativos</h2>
            <p className="text-3xl font-bold text-white">98</p>
          </div>
        </div>

        {/* Seção de gráficos */}
        <div className="bg-white shadow-lg rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Gráfico de Receita
          </h2>
          <div className="h-64">
            {/* Aqui você pode integrar um gráfico usando bibliotecas como react-chartjs-2 ou recharts */}
            <p className="text-gray-600">[Gráfico Placeholder]</p>
          </div>
        </div>

        {/* Seção de tabelas */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Membros Recentes
          </h2>
          <table className="w-full border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Nome
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Plano
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">João Silva</td>
                <td className="border border-gray-300 px-4 py-2">Mensal</td>
                <td className="border border-gray-300 px-4 py-2 text-green-500">
                  Ativo
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Maria Oliveira
                </td>
                <td className="border border-gray-300 px-4 py-2">Trimestral</td>
                <td className="border border-gray-300 px-4 py-2 text-green-500">
                  Ativo
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Carlos Pereira
                </td>
                <td className="border border-gray-300 px-4 py-2">Anual</td>
                <td className="border border-gray-300 px-4 py-2 text-red-500">
                  Inativo
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Sidebar>
  );
}
