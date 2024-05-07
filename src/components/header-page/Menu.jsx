import { useRef } from "react";
import menuIcon from "../../assets/icons/menu-icon.png"
import NavList from "./navList/NavList.jsx";

function Menu({ toggleShowClass, loginMenuRef }) {
  const menuRef = useRef(); // Ref para el menú

  return (
    <div>
      <div className="menu-icon" onClick={() => toggleShowClass(menuRef)}>
        {/* Este ícono puede ser reutilizado aquí */}
        <img
          src={menuIcon}
          alt="Menu"
        />
      </div>

      {/* Renderizar el menú */}
      <nav ref={menuRef} className="nav tablet-nav">
        <NavList/>
      </nav>
    </div>
  );
}

export default Menu;
