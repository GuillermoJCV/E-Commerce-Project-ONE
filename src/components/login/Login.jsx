import { useRef, useEffect } from "react";
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
    const formRef = useRef(null);

    const submitHandler = (event) => {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente
        
    };

    useEffect(() => {
        const form = formRef.current;
        if (form) {
            form.addEventListener("submit", submitHandler);
            return () => {
                form.removeEventListener("submit", submitHandler);
            };
        }
    }, []); // Deja las dependencias vacías para ejecutar una sola vez al montar el componente

    const handleRegisterClick = () => {
        containerRef.current.classList.add("active");
        containerRef.current.classList.remove("show-sign-in");
        const registerMessage = containerRef.current.querySelector('p');
        if (registerMessage) {
            registerMessage.style.display = 'block';
        }
    };

    const handleLoginClick = () => {
        containerRef.current.classList.remove("active");
        containerRef.current.classList.add("show-sign-in");
    };

    return (
        <main className="main" ref={containerRef} >
            <section className="form-container sign-in">
                <form ref={formRef}>
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
                    <input type="email" placeholder="Ingresar el correo" required />
                    <input type="password" placeholder="Ingresar la contraseña" required />
                    <a className="a" href="#">
                        ¿Olvidaste tu contraseña?
                    </a>
                    <button id="bt-sign-in" type="submit">Iniciar Sesión</button>
                </form>
            </section>
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
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Registrarse</button>
                </form>
            </section>

            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Bienvenido de nuevo</h1>
                        <p> Ingrese sus datos personales para utilizar todas las funciones del sitio</p>
                        <button className="hidden" onClick={handleLoginClick}>
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


/*import React, { useRef } from "react";
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
        containerRef.current.classList.remove("show-sign-in");
    
        // Obtener el mensaje de error si existe
        const errorMessage = containerRef.current.querySelector('p');
        
        // Si hay un mensaje de error, eliminarlo
        if (errorMessage) {
            errorMessage.remove();
        }
    };

    const handleLoginClick = () => {
        containerRef.current.classList.remove("active");
        containerRef.current.classList.add("show-sign-in");
    };

    const validateLogin = () => {
        const emailInput = containerRef.current.querySelector('input[type="email"]');
        const passwordInput = containerRef.current.querySelector('input[type="password"]');

        if (!emailInput.value || !passwordInput.value) {
            const errorMessage = document.createElement('p');
            errorMessage.textContent = "Por favor complete todos los campos.";
            errorMessage.style.color = "red";

            // Insertar el mensaje de error antes del botón de inicio de sesión
            loginBtnRef.current.parentNode.insertBefore(errorMessage, loginBtnRef.current.nextSibling);
        } else {
            // Continuar con el proceso de inicio de sesión
            // Puedes agregar tu lógica de inicio de sesión aquí
            console.log("Inicio de sesión exitoso");
        }
    };

    // Llamar a mountListeners una vez al montar el componente
    React.useLayoutEffect(() => {
        const mountListeners = () => {
            if (registerBtnRef.current) {
                registerBtnRef.current.addEventListener("click", validateLogin);
            }
        };

        const unmountListeners = () => {
            if (registerBtnRef.current) {
                registerBtnRef.current.removeEventListener("click", validateLogin);
            }
        };

        mountListeners();

        return () => {
            unmountListeners();
        };
    }, [registerBtnRef, loginBtnRef]); // Dependencias relevantes que pueden cambiar


    return (
        <main ref={containerRef} className="main">
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
                    <input type="text" placeholder="Name" required="true" />
                    <input type="email" placeholder="Email" required="true" />
                    <input type="password" placeholder="Password" required="true" />
                    <button type="button" ref={registerBtnRef}>
                        Registrarse
                    </button>
                </form>
            </section>

            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Bienvenido de nuevo</h1>
                        <p>Ingrese sus datos personales para utilizar todas las funciones del sitio</p>
                        <button className="hidden" onClick={handleLoginClick}>
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
*/


/*import React, { useRef } from "react";
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
        containerRef.current.classList.remove("show-sign-in");
    };
    
    const handleLoginClick = () => {
        containerRef.current.classList.remove("active");
        containerRef.current.classList.add("show-sign-in");
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
        <main ref={containerRef} className="main">
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

export default Login;*/