// app/components/Sidebar.tsx
"use client"; // Certificando que o componente é "client-side"

import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

type SidebarLink = {
  name: string;
  route: string;
};

const links: SidebarLink[] = [
  { name: "Dashboard", route: "/" },
  { name: "Usuários", route: "/users" },
  { name: "Relatórios", route: "/reports" },
  { name: "Configurações", route: "/settings" },
];

const Sidebar = ({ children }: { children?: ReactNode }) => {
  const pathname = usePathname(); // Obtendo o caminho atual da rota
  const router = useRouter(); // Usando o hook useRouter para navegação interna

  const handleNavigation = (route: string) => {
    router.push(route); // Usando router.push para navegação adequada em Next.js
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-lg font-bold border-b border-gray-700">
          ERP Gym
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {links.map((link) => (
            <button
              key={link.route}
              onClick={() => handleNavigation(link.route)} // Navegação correta usando router.push
              className={`w-full text-left p-2 rounded transition duration-200 ease-in-out ${
                pathname === link.route
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-700"
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-700">
          <button
            onClick={() => alert("Você saiu!")}
            className="w-full p-2 bg-red-500 hover:bg-red-600 text-white rounded transition duration-200 ease-in-out"
          >
            Sair
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100">{children}</div>
    </div>
  );
};

export default Sidebar;
