export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between px-8 py-6 border-b border-zinc-800">
        <h1 className="text-2xl font-bold">QUIZPA</h1>

        <div className="flex gap-6 text-gray-300">
          <span>Concorsi</span>
          <span>Quiz</span>
          <span>Dashboard</span>
          <span>Login</span>
        </div>
      </nav>

      <section className="max-w-5xl mx-auto text-center px-8 py-24">
        <h2 className="text-6xl font-bold mb-6">
          Preparati ai concorsi pubblici
        </h2>

        <p className="text-2xl text-gray-300 mb-10">
          Allenati con quiz, simulazioni e statistiche personalizzate.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-xl">
          Inizia subito
        </button>
      </section>

      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-8 pb-20">
        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <h3 className="text-2xl font-bold mb-3">Concorsi</h3>
          <p className="text-gray-400">
            Scegli il concorso e accedi alla banca dati dedicata.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <h3 className="text-2xl font-bold mb-3">Simulatore</h3>
          <p className="text-gray-400">
            Esercitati con test realistici a tempo e risposte multiple.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
          <h3 className="text-2xl font-bold mb-3">Statistiche</h3>
          <p className="text-gray-400">
            Monitora errori, progressi, punteggi e materie deboli.
          </p>
        </div>
      </section>
    </main>
  );
}