import Sidebar from "./pages/page";

export default function Home() {
  return (
    <Sidebar>
      <div>
        <h1 className="text-2xl font-bold">Bem-vindo ao Dashboard!</h1>
        <p>Este é o conteúdo principal da página.</p>
      </div>
    </Sidebar>
  );
}
