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
        event.preventDefault();
    };

    useEffect(() => {
        const form = formRef.current;
        if (form) {
            form.addEventListener("submit", submitHandler);
            return () => {
                form.removeEventListener("submit", submitHandler);
            };
        }
    }, []); 

    useEffect(() => {
        containerRef.current.classList.add("show-sign-in");
    }, []);
    
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
    // PRUEBA 
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