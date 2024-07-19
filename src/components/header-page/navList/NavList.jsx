import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { toggleTheme, getTheme } from "../../../utils/toggleTheme.js"
import { toggleShowClass } from "../../../utils/headerUtils/toggleShowClass.js"
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import '../../../styles/header.css';

// eslint-disable-next-line react/prop-types
export default function NavList({ loginMenuRef }) {
  const [isDarkMode, setIsDarkMode] = useState(getTheme() === 'dark');

  useEffect(() => {
    const currentTheme = getTheme();
    document.documentElement.classList.add(currentTheme);
  }, []);

  const handleThemeToggle = () => {
    setIsDarkMode(prevMode => !prevMode);
    toggleTheme();
  };

  return (
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
      <li className="theme" onClick={handleThemeToggle}>
        {isDarkMode
          ? <BsFillSunFill className="icon-large icon-sun" />
          : <BsFillMoonStarsFill className="icon-large icon-moon" />}
      </li>
    </ul>
  )
}