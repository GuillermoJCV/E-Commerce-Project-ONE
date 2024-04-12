// Header.jsx

import React, { useRef } from "react";
import "../styles/header.css";
import Logo from "../assets/image/logo2.png";
import searchIcon from "../assets/icons/search-icon.png"; // Importa el ícono de búsqueda
import Menu from "./Menu"; // Importa el nuevo componente Menu

function Header() {
  const menuRef = useRef(); // Ref para el menú
  const loginMenuRef = useRef(); // Ref para el menú de ingreso

  // Función para alternar la visibilidad del menú
  const toggleMenu = () => {
    // Obtener una referencia al elemento del menú
    const nav = menuRef.current;
    // Verificar si el menú tiene la clase 'show'
    if (nav.classList.contains("show")) {
      // Si tiene la clase 'show', removerla para ocultar el menú
      nav.classList.remove("show");
    } else {
      // Si no tiene la clase 'show', agregarla para mostrar el menú
      nav.classList.add("show");
    }
  };

  // Función para manejar el clic en el enlace "Ingresar"
  const handleLoginClick = () => {
    const loginMenu = loginMenuRef.current;
    loginMenu.classList.toggle("show");
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

      {/* Integrar el componente Menu aquí */}
      <Menu
        toggleMenu={toggleMenu}
        handleLoginClick={handleLoginClick}
        menuRef={menuRef}
        loginMenuRef={loginMenuRef}
      />
    </header>
  );
}

export default Header;
