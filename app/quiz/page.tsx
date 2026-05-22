"use client";

import { useState } from "react";

const domande = [
  {
    domanda: "Qual è la capitale d’Italia?",
    opzioni: ["Milano", "Roma", "Napoli", "Torino"],
    corretta: "Roma",
  },
  {
    domanda: "Quanti articoli ha la Costituzione italiana?",
    opzioni: ["100", "139", "150", "200"],
    corretta: "139",
  },
  {
    domanda: "Quale organo esercita il potere legislativo?",
    opzioni: ["Governo", "Parlamento", "Presidente", "Comune"],
    corretta: "Parlamento",
  },
];

export default function QuizPage() {
  const [indice, setIndice] = useState(0);
  const [punteggio, setPunteggio] = useState(0);
  const [rispostaSelezionata, setRispostaSelezionata] = useState("");
  const [finito, setFinito] = useState(false);

  const domandaAttuale = domande[indice];

  function selezionaRisposta(opzione: string) {
    if (rispostaSelezionata) return;

    setRispostaSelezionata(opzione);

    if (opzione === domandaAttuale.corretta) {
      setPunteggio(punteggio + 1);
    }
  }

  function prossimaDomanda() {
    const prossima = indice + 1;

    if (prossima < domande.length) {
      setIndice(prossima);
      setRispostaSelezionata("");
    } else {
      setFinito(true);
    }
  }

  if (finito) {
    return (
      <main className="min-h-screen bg-black text-white p-10 flex items-center justify-center">
        <div className="bg-zinc-900 p-8 rounded-2xl max-w-xl text-center border border-zinc-800">
          <h1 className="text-4xl font-bold mb-6">Quiz completato</h1>

          <p className="text-2xl mb-6">
            Hai totalizzato {punteggio} punti su {domande.length}
          </p>

          <button
            onClick={() => {
              setIndice(0);
              setPunteggio(0);
              setRispostaSelezionata("");
              setFinito(false);
            }}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl"
          >
            Rifai il quiz
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-4">Simulatore Quiz</h1>

      <p className="text-gray-400 mb-10">
        Domanda {indice + 1} di {domande.length}
      </p>

      <div className="bg-zinc-900 p-8 rounded-2xl max-w-2xl border border-zinc-800">
        <h2 className="text-2xl mb-6">{domandaAttuale.domanda}</h2>

        <div className="flex flex-col gap-4">
          {domandaAttuale.opzioni.map((opzione) => {
            const corretta = opzione === domandaAttuale.corretta;
            const selezionata = opzione === rispostaSelezionata;

            let stile = "bg-zinc-800 hover:bg-zinc-700";

            if (rispostaSelezionata && corretta) {
              stile = "bg-green-700";
            }

            if (rispostaSelezionata && selezionata && !corretta) {
              stile = "bg-red-700";
            }

            return (
              <button
                key={opzione}
                onClick={() => selezionaRisposta(opzione)}
                className={`${stile} p-4 rounded-xl text-left`}
              >
                {opzione}
              </button>
            );
          })}
        </div>

        {rispostaSelezionata && (
          <button
            onClick={prossimaDomanda}
            className="mt-8 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl"
          >
            Prossima domanda
          </button>
        )}
      </div>
    </main>
  );
}