import '../../styles/header.css';
import Logo from '../../assets/image/logo2.png';
import { IoSearch } from "react-icons/io5";
import Menu from "./Menu.jsx";

function Header() {

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
          <IoSearch className="search-icon" />
        </div>
      </div>

      {/* Renderizar el menú */}
      <div>
        <Menu/>
      </div>
      
    </header>
  );
}

export default Header;
