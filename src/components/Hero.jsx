import { dados } from "../data/dados";

export default function Hero({ onAbrir }) {
  return (
    <section className="hero">
      <p className="hero-mini">Feito com carinho para</p>
      <h1>{dados.nomeDela} 💌</h1>
      <p className="hero-frase">{dados.frasePrincipal}</p>
      <button className="btn" onClick={onAbrir}>
        Abrir meu presente 🎁
      </button>
    </section>
  );
}