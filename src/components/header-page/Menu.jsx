import { useRef } from "react";
import menuIcon from "../../assets/icons/menu-icon.png"
import NavList from "./navList/NavList.jsx";
import { toggleShowClass } from "../../utils/headerUtils/toggleShowClass.js"

function Menu() {
  const menuRef = useRef(null); // Ref para el menú
  //const loginMenuRef = useRef(null); // Ref para el menú de ingreso



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
