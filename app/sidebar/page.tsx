"use client"; // Certificando que o componente é "client-side"

import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import {
  FaBars,
  FaTachometerAlt,
  FaUsers,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa"; // Importando ícones

type SidebarLink = {
  name: string;
  route: string;
  icon: ReactNode; // Adicionando ícone
};

const links: SidebarLink[] = [
  { name: "Dashboard", route: "/dashboard", icon: <FaTachometerAlt /> },
  { name: "Usuários", route: "/users", icon: <FaUsers /> },
  { name: "Relatórios", route: "/reports", icon: <FaChartBar /> },
  { name: "Configurações", route: "/settings", icon: <FaCog /> },
];

const Sidebar = ({ children }: { children?: ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleNavigation = (route: string) => {
    router.push(route); // Navega para a rota desejada
    setIsSidebarOpen(false); // Fecha a sidebar
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Alterna o estado da sidebar
  };

  const handleLogout = () => {
    // Aqui você pode adicionar lógica de logout, como limpar tokens, etc.
    router.push("/login"); // Redireciona para a tela de login
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white flex flex-col fixed top-0 left-0 h-full transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:w-64 w-64`}
      >
        <div className="p-4 text-lg font-bold border-b border-gray-700">
          ERP Academia
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {links.map((link) => (
            <button
              key={link.route}
              onClick={() => handleNavigation(link.route)} // Navega para a rota
              className={`w-full text-left p-2 rounded transition duration-200 ease-in-out flex items-center space-x-2 ${
                pathname === link.route
                  ? "bg-blue-500 text-white" // Destaca o link ativo
                  : "hover:bg-gray-700"
              }`}
            >
              <span>{link.icon}</span> {/* Exibindo o ícone */}
              <span>{link.name}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-700">
          <button
            onClick={handleLogout} // Redireciona para a tela de login
            className="w-full p-2 bg-red-500 hover:bg-red-600 text-white rounded transition duration-200 ease-in-out flex items-center space-x-2"
          >
            <FaSignOutAlt /> {/* Ícone de sair */}
            <span>Sair</span>
          </button>
        </div>
      </div>

      {/* Menu de Hambúrguer para telas pequenas */}
      <button
        onClick={toggleSidebar}
        className="md:hidden p-4 fixed top-4 right-4 text-gray-800 bg-white rounded-full shadow-lg"
      >
        <FaBars size={24} />
      </button>

      {/* Conteúdo Principal */}
      <div className="flex-1 ml-0 overflow-auto p-8 bg-gray-100">
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
