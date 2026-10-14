import { useState } from "react";
import { dados } from "../data/dados";

export default function Galeria() {
  const [aberta, setAberta] = useState(null);

  return (
    <section className="secao">
      <h2>Nossos momentos 📸</h2>
      <div className="galeria">
        {dados.galeria.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Momento ${i + 1}`}
            onClick={() => setAberta(src)}
          />
        ))}
      </div>

      {aberta && (
        <div className="modal" onClick={() => setAberta(null)}>
          <img src={aberta} alt="Foto ampliada" />
        </div>
      )}
    </section>
  );
}