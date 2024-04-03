import React, { useState, useEffect } from 'react';
import '../styles/style.css';
import Logo from '../assets/image/logo2.png';
import menuIcon from '../assets/icons/menu-icon.png';

function Header() {
  const [showMenu, setShowMenu] = useState(true); // Mostrar el menú inicialmente en pantallas grandes

  // Función para alternar la visibilidad del menú
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Ocultar el menú cuando el tamaño de la pantalla es pequeño
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };

    window.addEventListener('resize', handleResize);

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
