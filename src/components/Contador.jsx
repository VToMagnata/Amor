import { useEffect, useState } from "react";
import { dados } from "../data/dados";

function calcular() {
  const diff = Date.now() - new Date(dados.inicioNamoro).getTime();
  const seg = Math.floor(diff / 1000);
  return {
    dias: Math.floor(seg / 86400),
    horas: Math.floor((seg % 86400) / 3600),
    minutos: Math.floor((seg % 3600) / 60),
    segundos: seg % 60,
  };
}

export default function Contador() {
  const [t, setT] = useState(calcular());

  useEffect(() => {
    const id = setInterval(() => setT(calcular()), 1000);
    return () => clearInterval(id);
  }, []);

  const itens = [
    ["Dias", t.dias],
    ["Horas", t.horas],
    ["Minutos", t.minutos],
    ["Segundos", t.segundos],
  ];

  return (
    <section className="secao">
      <h2>Estamos juntos há... ⏳</h2>
      <div className="contador">
        {itens.map(([label, valor]) => (
          <div className="contador-item" key={label}>
            <strong>{String(valor).padStart(2, "0")}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <p className="legenda">e cada segundo valeu muito a pena 🥰</p>
    </section>
  );
}