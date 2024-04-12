// Header.jsx

import React, { useRef } from "react";
import "../styles/header.css";
import Logo from "../assets/image/logo2.png";
import searchIcon from "../assets/icons/search-icon.png"; // Importa el ícono de búsqueda
import Menu from "./Menu"; // Importa el nuevo componente Menu

function Header() {
  const loginMenuRef = useRef(); // Ref para el menú de ingreso

  // Función para alternar la visibilidad de los elementos
  const toggleShowClass = (ref) => {
    ref.current.classList.toggle("show")
  };

  return (
    <header className="header">
      {/* Sección del logo */}
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      <div className="search">
        {/* Barra de búsqueda */}
        <input type="text" placeholder="Buscar productos..." id="searchInput" />
        {/* Contenedor del icono de búsqueda */}
        <div className="search-icon-container">
          {/* Icono de búsqueda */}
          <img src={searchIcon} alt="Search" className="search-icon" />
        </div>
      </div>

      <Menu
        toggleShowClass={toggleShowClass}
        loginMenuRef={loginMenuRef}
      />
    </header>
  );
}

export default Header;
