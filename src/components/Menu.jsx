// Menu.jsx

import React, { useRef } from "react";
import "../styles/header.css";
import menuIcon from "../assets/icons/menu-icon.png";

function Menu({ toggleMenu, handleLoginClick, menuRef, loginMenuRef }) {
  return (
    <div>
      <div className="menu-icon" onClick={toggleMenu}>
        {/* Este ícono puede ser reutilizado aquí */}
        <img
          src={/* Importa el ícono de menú aquí */ menuIcon}
          alt="Menu"
        />
      </div>

      {/* Renderizar el menú */}
      <nav ref={menuRef} className="nav tablet-nav">
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Productos</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
          <li>
            <a href="#">Sobre nosotros</a>
          </li>

          {/* Usar la referencia para mostrar el menú de ingreso */}
          <li className="login-ingresar" onClick={handleLoginClick}>
            <a href="#">Ingresar</a>
          </li>
        </ul>
      </nav>

      {/* Renderizar el menú de ingreso */}
      <nav ref={loginMenuRef} className="loginMenu login-menu">
        <ul>
          <li>
            <a href="#">Iniciar Sesión</a>
          </li>
          <li>
            <a href="#">Registrarse</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
