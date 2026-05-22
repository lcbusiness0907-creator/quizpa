import Link from "next/link";

export default function ConcorsiPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        Concorsi Disponibili
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <h2 className="text-2xl font-bold mb-3">Polizia di Stato</h2>
          <p className="text-gray-400 mb-4">
            Quiz e simulazioni per il concorso Polizia.
          </p>
          <Link href="/concorsi/polizia" className="inline-block bg-blue-600 px-4 py-2 rounded-xl">
            Entra
          </Link>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <h2 className="text-2xl font-bold mb-3">Carabinieri</h2>
          <p className="text-gray-400 mb-4">
            Preparazione completa ai quiz Carabinieri.
          </p>
          <Link href="/concorsi/carabinieri" className="inline-block bg-blue-600 px-4 py-2 rounded-xl">
            Entra
          </Link>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <h2 className="text-2xl font-bold mb-3">Agenzia Entrate</h2>
          <p className="text-gray-400 mb-4">
            Allenati sui quiz tributari e amministrativi.
          </p>
          <Link href="/concorsi/agenzia-entrate" className="inline-block bg-blue-600 px-4 py-2 rounded-xl">
            Entra
          </Link>
        </div>
      </div>
    </main>
  );
}