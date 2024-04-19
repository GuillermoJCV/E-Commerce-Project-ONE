import { useRef } from "react";
import { NavLink } from 'react-router-dom';
import menuIcon from "../../assets/icons/menu-icon.png"; // Ruta relativa a la carpeta 'assets'
import moonIcon from "../../assets/icons/moon-icon.png"; // Ruta relativa al icono de luna

function Menu({ toggleShowClass, loginMenuRef }) {
  const menuRef = useRef(); // Ref para el menú

  // Función para cambiar entre modos de color
  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode"); // Alternar clase dark-mode en el body
  };

  return (
    <div>
      <div className="menu-icon" onClick={() => toggleShowClass(menuRef)}>
        {/* Este ícono puede ser reutilizado aquí */}
        <img
          src={/* Importa el ícono de menú aquí */ menuIcon}
          alt="Menu"
        />
      </div>

      {/* Renderizar el menú */}
      <nav ref={menuRef} className="nav tablet-nav">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
              Productos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
              Contacto
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
              Sobre nosotros
            </NavLink>
          </li>

          {/* Usar la referencia para mostrar el menú de ingreso */}
          <li className="login-ingresar" onClick={() => toggleShowClass(loginMenuRef)}>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
              Ingresar
            </NavLink>
          </li>

          {/* Ingresar icono para cambiar de tema de claro a oscuro */}
          <li className="theme" onClick={toggleDarkMode}>
            <img src={moonIcon} alt="Icono" />
          </li>
        </ul>
      </nav>

      {/* Renderizar el menú de ingreso */}
      <nav ref={loginMenuRef} className="loginMenu login-menu">
        <ul>
          <li>
            <NavLink
              to="/signin"
              className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
              Iniciar sesión
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
              Registrarse
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
