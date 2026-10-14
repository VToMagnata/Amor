import { useState } from "react";

export default function Final() {
  const [sim, setSim] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const fugir = () =>
    setPos({
      x: (Math.random() - 0.5) * 240,
      y: (Math.random() - 0.5) * 160,
    });

  return (
    <section className="secao final">
      {!sim ? (
        <>
          <h2>Você me ama? 🥺</h2>
          <div className="botoes-final">
            <button className="btn" onClick={() => setSim(true)}>
              Sim! 💖
            </button>
            <button
              className="btn btn-nao"
              style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
              onMouseEnter={fugir}
              onTouchStart={fugir}
            >
              Não
            </button>
          </div>
        </>
      ) : (
        <>
          <h2>Eu sabia! 🥰</h2>
          <p className="legenda">
            Eu também te amo, muito, muito, muito! 💕💕💕
          </p>
          <div className="chuva">
            {Array.from({ length: 30 }).map((_, i) => (
              <span
                key={i}
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              >
                ❤️
              </span>
            ))}
          </div>
        </>
      )}
    </section>
  );
}