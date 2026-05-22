export default async function ConcorsoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-6">
        Concorso: {id}
      </h1>

      <p className="text-xl text-gray-400 mb-10">
        Benvenuto nella pagina dedicata al concorso {id}.
      </p>

      <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 max-w-2xl">
        <h2 className="text-3xl font-bold mb-4">
          Simulazioni disponibili
        </h2>

        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl">
          Avvia simulazione
        </button>
      </div>
    </main>
  );
}