import Sidebar from "../sidebar/page";

export default function Configuracoes() {
  return (
    <Sidebar>
      <div className="flex flex-col bg-gray-100 mx-2 md:mx-8 lg:mx-12">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Configurações do Sistema ERP
          </h1>
          <p className="text-gray-600">
            Personalize as configurações do sistema de acordo com as
            necessidades da sua academia.
          </p>
        </header>

        {/* Seção de preferências gerais */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Preferências Gerais
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Idioma do Sistema
              </h3>
              <select className="mt-2 bg-gray-100 border border-gray-300 text-gray-800 py-2 px-4 rounded-md">
                <option>Português</option>
                <option>Inglês</option>
                <option>Espanhol</option>
              </select>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Fuso Horário
              </h3>
              <select className="mt-2 bg-gray-100 border border-gray-300 text-gray-800 py-2 px-4 rounded-md">
                <option>GMT -03:00 (Brasília)</option>
                <option>GMT -04:00</option>
                <option>GMT -02:00</option>
              </select>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Tema do Sistema
              </h3>
              <select className="mt-2 bg-gray-100 border border-gray-300 text-gray-800 py-2 px-4 rounded-md">
                <option>Claro</option>
                <option>Escuro</option>
              </select>
            </div>
          </div>
        </div>

        {/* Seção de integrações de sistema */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Integrações do Sistema
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Integração com Pagamentos
              </h3>
              <p className="text-gray-600">
                Conecte seu sistema de pagamento para gerenciar receitas e
                cobranças.
              </p>
              <button className="mt-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-4 rounded-md transition-all duration-300 hover:from-blue-700 hover:to-indigo-800">
                Configurar Pagamentos
              </button>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Integração com WhatsApp
              </h3>
              <p className="text-gray-600">
                Ative o envio de mensagens automatizadas via WhatsApp para os
                membros.
              </p>
              <button className="mt-2 bg-gradient-to-r from-green-500 to-teal-600 text-white py-2 px-4 rounded-md transition-all duration-300 hover:from-green-700 hover:to-teal-800">
                Configurar WhatsApp
              </button>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Integração com Google Agenda
              </h3>
              <p className="text-gray-600">
                Sincronize as aulas agendadas com o Google Agenda para facilitar
                o gerenciamento.
              </p>
              <button className="mt-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-2 px-4 rounded-md transition-all duration-300 hover:from-yellow-700 hover:to-orange-800">
                Conectar ao Google Agenda
              </button>
            </div>
          </div>
        </div>

        {/* Seção de segurança e permissões */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Segurança e Permissões
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Alterar Senha do Administrador
              </h3>
              <input
                type="password"
                placeholder="Nova Senha"
                className="mt-2 w-full bg-gray-100 border border-gray-300 text-gray-800 py-2 px-4 rounded-md"
              />
              <button className="mt-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-4 rounded-md transition-all duration-300 hover:from-blue-700 hover:to-indigo-800">
                Atualizar Senha
              </button>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Controle de Acessos
              </h3>
              <p className="text-gray-600">
                Gerencie os acessos dos usuários ao sistema, criando permissões
                personalizadas.
              </p>
              <button className="mt-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-4 rounded-md transition-all duration-300 hover:from-blue-700 hover:to-indigo-800">
                Gerenciar Acessos
              </button>
            </div>
          </div>
        </div>

        {/* Seção de backup e recuperação */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Backup e Recuperação
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Backup Automático
              </h3>
              <p className="text-gray-600">
                Habilite backups automáticos para garantir que seus dados
                estejam seguros.
              </p>
              <div className="flex items-center space-x-4">
                <button className="bg-gradient-to-r from-green-500 to-teal-600 text-white py-2 px-4 rounded-md transition-all duration-300 hover:from-green-700 hover:to-teal-800">
                  Habilitar Backup
                </button>
                <p className="text-gray-600">Último backup: 12/12/2024</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Recuperação de Dados
              </h3>
              <p className="text-gray-600">
                Recupere os dados do sistema em caso de falhas ou perdas
                acidentais.
              </p>
              <button className="mt-2 bg-gradient-to-r from-red-500 to-pink-600 text-white py-2 px-4 rounded-md transition-all duration-300 hover:from-red-700 hover:to-pink-800">
                Recuperar Dados
              </button>
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}
