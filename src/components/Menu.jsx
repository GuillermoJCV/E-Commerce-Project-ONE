import React, { useRef } from "react";
import { NavLink } from 'react-router-dom';
import "../styles/header.css";
import menuIcon from "../assets/icons/menu-icon.png";

function Menu({ toggleMenu, handleLoginClick, menuRef, loginMenuRef }) {
  return (
    <div>
      <div className="menu-icon" onClick={toggleMenu}>
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
              className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }>
              Productos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }>
              Contacto
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }>
              Sobre nosotros
            </NavLink>
          </li>

          {/* Usar la referencia para mostrar el menú de ingreso */}
          <li className="login-ingresar" onClick={handleLoginClick}>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }>
              Ingresar
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Renderizar el menú de ingreso */}
      <nav ref={loginMenuRef} className="loginMenu login-menu">
        <ul>
          <li>
            <NavLink
              to="/signin"
              className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }>
              Iniciar sesión
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }>
              Registrarse
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
