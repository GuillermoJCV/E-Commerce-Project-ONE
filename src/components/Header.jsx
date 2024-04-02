import React, { useState } from 'react';
import useWindowWidth from '../hooks/useWindowWidth'; // Importa el hook personalizado
import '../styles/style.css';
import Logo from '../assets/image/logo2.png';
import menuIcon from '../assets/icons/menu-icon.png';

function Header() {
  const windowWidth = useWindowWidth(); // Usa el hook personalizado
  const [showMenu, setShowMenu] = useState(windowWidth > 768);

  // Función para alternar la visibilidad del menú
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="header">
      {/* Sección del logo */}
      <div className="logo">
        <img src={Logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
      </div>

      <div className="search">
        {/* Barra de búsqueda */}
        <input type="text" placeholder="Buscar productos..." />
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        <img src={menuIcon} alt="" />
      </div>
      
      {/* Renderizar el menú si showMenu es true */}
      {showMenu && (
         <nav className="nav tablet-nav"> {/* Añadir una clase específica para el menú en tablets */}
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Integrantes</a></li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Header;
