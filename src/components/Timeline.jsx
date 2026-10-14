import { useEffect, useRef, useState } from "react";
import { dados } from "../data/dados";

function Item({ item, index }) {
  const ref = useRef(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisivel(true),
      { threshold: 0.25 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`tl-item ${index % 2 ? "direita" : "esquerda"} ${
        visivel ? "aparecer" : ""
      }`}
    >
      <div className="tl-card">
        <img src={item.foto} alt={item.titulo} />
        <span className="tl-data">{item.data}</span>
        <h3>{item.titulo}</h3>
        <p>{item.texto}</p>
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section className="secao">
      <h2>Nossa história 📖</h2>
      <div className="timeline">
        {dados.timeline.map((item, i) => (
          <Item key={item.titulo} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}