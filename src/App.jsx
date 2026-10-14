import { useRef, useState } from "react";
import CoracoesFlutuantes from "./components/CoracoesFlutuantes";
import Hero from "./components/Hero";
import Contador from "./components/Contador";
import Timeline from "./components/Timeline";
import Galeria from "./components/Galeria";
import Carta from "./components/Carta";
import Final from "./components/Final";
import "./App.css";

export default function App() {
  const [aberto, setAberto] = useState(false);
  const conteudo = useRef(null);

  const abrir = () => {
    setAberto(true);
    setTimeout(
      () => conteudo.current?.scrollIntoView({ behavior: "smooth" }),
      100
    );
  };

  return (
    <>
      <CoracoesFlutuantes />
      <Hero onAbrir={abrir} />
      {aberto && (
        <main ref={conteudo}>
          <Contador />
          <Timeline />
          <Galeria />
          <Carta />
          <Final />
        </main>
      )}
    </>
  );
}