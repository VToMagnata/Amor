const coracoes = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 10,
  duracao: 8 + Math.random() * 8,
  tamanho: 14 + Math.random() * 22,
  emoji: ["💖", "💕", "💗", "🌸", "✨"][i % 5],
}));

export default function CoracoesFlutuantes() {
  return (
    <div className="coracoes">
      {coracoes.map((c) => (
        <span
          key={c.id}
          style={{
            left: `${c.left}%`,
            animationDelay: `${c.delay}s`,
            animationDuration: `${c.duracao}s`,
            fontSize: `${c.tamanho}px`,
          }}
        >
          {c.emoji}
        </span>
      ))}
    </div>
  );
}