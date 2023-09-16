import React from "react";
import { Link } from "react-router-dom";
import style from "./Menu.module.css";

export default function Menu() {
  return (
    <nav className={style.menu}>
      <Link to="/" className={style.menuLink}>
        Home
      </Link>
      <span className={style.menuSeparator}> | </span>
      <Link to="/produtos" className={style.menuLink}>
        Produtos
      </Link>
    </nav>
  );
}
