import React from 'react';
import '../styles/style.css';
import Logo from '../assets/image/logo2.png';

function Header() {
  return (
    <div className="header">
      <div className="logo">
      <img src={Logo} alt="Logo" style={{ width: '100px', height: 'auto' }} /> {/* Cambiar el tamaño de la imagen*/}
      </div>
      <div className="search">
        {/* Aquí puedes colocar tu barra de búsqueda si es necesario */}
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Contacto</a></li>
          <li><a href="#">Integrantes</a></li>
          {/* Puedes añadir más elementos de menú aquí si es necesario */}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
