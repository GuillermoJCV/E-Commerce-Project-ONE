import React, { useRef } from 'react';
import '../styles/style.css';
import Logo from '../assets/image/logo2.png';
import menuIcon from '../assets/icons/menu-icon.png';

function Header() {
  const menuRef = useRef(); // Ref para el menú

  // Función para alternar la visibilidad del menú
  const toggleMenu = () => {
     // Obtener una referencia al elemento del menú
    const nav = menuRef.current;
    // Verificar si el menú tiene la clase 'show'
    if (nav.classList.contains('show')) {
      // Si tiene la clase 'show', removerla para ocultar el menú
      nav.classList.remove('show');
    } else {
      // Si no tiene la clase 'show', agregarla para mostrar el menú
      nav.classList.add('show');
    }
  };

  return (
    <div className="header">
      {/* Sección del logo */}
      <div className="logo">
        <img src={Logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
      </div>

      <div className="search">
        {/* Barra de búsqueda */}
        <input type="text" placeholder="Buscar productos..." id="searchInput" />
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        <img src={menuIcon} alt="" />
      </div>
      
      {/* Renderizar el menú */}
      <nav ref={menuRef} className="nav tablet-nav">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Contacto</a></li>
          <li><a href="#">Integrantes</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
