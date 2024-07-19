import { useRef } from "react";
import { IoMenu } from "react-icons/io5";
import NavList from "./navList/NavList.jsx";
import { toggleShowClass } from "../../utils/headerUtils/toggleShowClass.js"
import '../../styles/header.css';

function Menu() {
  const menuRef = useRef(null); // Ref para el menú
  //const loginMenuRef = useRef(null); // Ref para el menú de ingreso



  return (
    <div>
      <div className="menu-icon" onClick={() => toggleShowClass(menuRef)}>
        {/* Este ícono puede ser reutilizado aquí */}
        <IoMenu className="io-menu" />
      </div>

      {/* Renderizar el menú */}
      <nav ref={menuRef} className="nav tablet-nav">
        <NavList/>
      </nav>
    </div>
  );
}

export default Menu;
