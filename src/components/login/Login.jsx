import React, { useRef } from "react";
import {
    FaGooglePlus,
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";
import '../../styles/login.css';

const Login = () => {
    const containerRef = useRef(null);
    const registerBtnRef = useRef(null);
    const loginBtnRef = useRef(null);

    const handleRegisterClick = () => {
        containerRef.current.classList.add("active");
    };

    const handleLoginClick = () => {
        containerRef.current.classList.remove("active");
    };

    // Llamar a mountListeners una vez al montar el componente
    React.useLayoutEffect(() => {
        const mountListeners = () => {
            if (registerBtnRef.current) {
                registerBtnRef.current.addEventListener("click", handleRegisterClick);
            }
            if (loginBtnRef.current) {
                loginBtnRef.current.addEventListener("click", handleLoginClick);
            }
        };
    
        const unmountListeners = () => {
    if (registerBtnRef.current) {
        registerBtnRef.current.removeEventListener("click", handleRegisterClick);
    }
    if (loginBtnRef.current) {
        loginBtnRef.current.removeEventListener("click", handleLoginClick);
    }
};
    
        mountListeners();
    
        return () => {
            unmountListeners();
        };
    }, [registerBtnRef, loginBtnRef]); // Dependencias relevantes que pueden cambiar
    

    return (
        <main ref={containerRef}>
            <section className="form-container sign-up">
                <form>
                    <h1>Crear cuenta</h1>
                    <div className="social-icons">
                        <a href="#" className="icon">
                            <FaGooglePlus />
                        </a>
                        <a href="#" className="icon">
                            <FaFacebook />
                        </a>
                        <a href="#" className="icon">
                            <FaTwitter />
                        </a>
                        <a href="#" className="icon">
                            <FaLinkedin />
                        </a>
                        <a href="#" className="icon">
                            <FaGithub />
                        </a>
                    </div>
                    <span>Puede usar su correo electrónico</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="button" ref={registerBtnRef}>
                        Registrarse
                    </button>
                </form>
            </section>
            <section className="form-container sign-in">
                <form>
                    <h1>Iniciar Sesión</h1>
                    <div className="social-icons">
                        <a href="#" className="icon">
                            <FaGooglePlus />
                        </a>
                        <a href="#" className="icon">
                            <FaFacebook />
                        </a>
                        <a href="#" className="icon">
                            <FaTwitter />
                        </a>
                        <a href="#" className="icon">
                            <FaLinkedin />
                        </a>
                        <a href="#" className="icon">
                            <FaGithub />
                        </a>
                    </div>
                    <span>Puede usar su correo electrónico</span>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a className="a" href="#">
                        ¿Olvidaste tu contraseña?
                    </a>
                    <button type="button" ref={loginBtnRef}>
                        Iniciar Sesión
                    </button>
                </form>
            </section>
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Bienvenido de nuevo</h1>
                        <p>Ingrese sus datos personales para utilizar todas las funciones del sitio</p>
                        <button type="button" ref={loginBtnRef}>
                            Iniciar Sesión
                        </button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Bienvenido</h1>
                        <p>Registre sus datos personales para utilizar todas las funciones del sitio</p>
                        <button className="hidden" onClick={handleRegisterClick}>
                            Registrarse
                        </button>
                    </div>
                </div>
            </div>

        </main>
    );
};

export default Login;