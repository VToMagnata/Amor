import { useEffect, useState } from "react";
import { dados } from "../data/dados";

export default function Carta() {
  const [texto, setTexto] = useState("");
  const [iniciou, setIniciou] = useState(false);

  useEffect(() => {
    if (!iniciou) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTexto(dados.carta.slice(0, i));
      if (i >= dados.carta.length) clearInterval(id);
    }, 45);
    return () => clearInterval(id);
  }, [iniciou]);

  return (
    <section className="secao">
      <h2>Uma cartinha pra você 💌</h2>
      {!iniciou ? (
        <button className="btn" onClick={() => setIniciou(true)}>
          Abrir carta ✉️
        </button>
      ) : (
        <div className="carta">
          <p>{texto}<span className="cursor">|</span></p>
          <p className="assinatura">— {dados.seuNome}</p>
        </div>
      )}

      <div className="motivos">
        {dados.motivos.map((m) => (
          <div className="motivo" key={m}>💗 {m}</div>
        ))}
      </div>
    </section>
  );
}