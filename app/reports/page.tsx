import Sidebar from "../sidebar/page";

export default function Users() {
  return (
    <Sidebar>
      <div className="flex flex-col bg-gray-100 mx-2 md:mx-8 lg:mx-12  ">
        <header className="mb-8  ">
          <h1 className="text-3xl  font-bold text-gray-800">Relatórios</h1>
          <p className="text-gray-600">
            Gerencie sua academia de forma eficiente.
          </p>
        </header>
      </div>
    </Sidebar>
  );
}
