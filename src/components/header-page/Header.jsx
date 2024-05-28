import { useRef } from "react";
import '../../styles/header.css';
import Logo from '../../assets/image/logo2.png';
import { FcSearch } from "react-icons/fc";
import NavList from "./navList/NavList.jsx";
import { toggleShowClass } from "../../utils/headerUtils/toggleShowClass.js"

function Header() {
  const menuRef = useRef(null); // Ref para el menú
  //const loginMenuRef = useRef(null); // Ref para el menú de ingreso

  return (
    <header className="header">

      {/* Sección del logo */}
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      {/* Barra de búsqueda */}
      <div className="search">
        <input type="text" placeholder="Buscar productos..." id="searchInput" />
        <div className="search-icon-container">
          <FcSearch className="search-icon" />
        </div>
      </div>

      {/* Renderizar el menú */}
      <div>
        <div className="menu-icon" onClick={() => toggleShowClass(menuRef)}></div>
        <nav ref={menuRef} className="nav tablet-nav">
          <NavList />
        </nav>
      </div>
      
    </header>
  );
}

export default Header;
