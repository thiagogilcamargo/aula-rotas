import React from "react";
import { Link } from "react-router-dom"; // Certifique-se de importar o Link se estiver usando React Router
import style from "./Rodape.module.css"; // Importe o estilo necessário

export default function Rodape() {
  return (
    <footer className={style.footerMenu}>
      <Link to="/" className={style.footerMenuLink}>
        Página Inicial
      </Link>
      <span className={style.menuSeparator}>|</span>
      <Link to="/sobre" className={style.footerMenuLink}>
        Sobre
      </Link>
      <span className={style.menuSeparator}>|</span>
      <Link to="/contato" className={style.footerMenuLink}>
        Contato
      </Link>
    </footer>
  );
}
