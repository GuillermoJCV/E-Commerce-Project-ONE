import React, { useRef } from 'react';
import '../../styles/signIn.css';

export default function SignIn() {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        // Aquí puedes implementar la lógica de autenticación, por ejemplo enviar los datos a un servidor
        console.log('Username:', username);
        console.log('Password:', password);

        // Resetea los campos después del envío del formulario (opcional)
        usernameRef.current.value = '';
        passwordRef.current.value = '';
    };

    return (
        <div className="signInContainer">
            <div className="signIn">
                <h2 className="signIn__title">Inicio de Sesión</h2>
                <form onSubmit={handleSubmit} className="signIn__form">
                    <label className="signIn__label" htmlFor="username">Usuario:</label>
                    <input type="text" id="username" ref={usernameRef} className="signIn__input" placeholder='Ingrese su usuario' />

                    <label className="signIn__label" htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" ref={passwordRef} className="signIn__input" placeholder="Ingrese su contraseña" required  />

                    <button type="submit" className="signIn__button">Iniciar Sesión</button>
                </form>
            </div>
        </div>
    );
};
