import React, { useState } from "react";
import "../App.css";
import { useAuth } from "../context/AuthContext";

function FormsFirebase() {
  const auth = useAuth();
  const {displayName} = auth.user

  const [emailRegistro, setEmailRegistro] = useState("");
  const [contraseñaRegistro, setContraseñaRegistro] = useState("");

  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const manejarRegistro = (e) => {
    e.preventDefault();
    auth.register(emailRegistro, contraseñaRegistro);
  };
  const manejarInicioSesion = (e) => {
    e.preventDefault();
    auth.login(email, contraseña);
  };
  const manejarGoogle = (e) => {
    e.preventDefault();
    auth.loginWithGoogle();
  };
  const manejarLogout = () => {
    auth.logout();
  }
  return (
    <div className="App">
      {displayName && <h5>Bienvenido: {displayName}</h5>}
      <form className="form">
        <h3 className="title">Registro</h3>
        <input
          onChange={(e) => setEmailRegistro(e.target.value)}
          className="input"
          type="email"
        />
        <input
          onChange={(e) => setContraseñaRegistro(e.target.value)}
          className="input"
          type="password"
        />
        <button onClick={(e) => manejarRegistro(e)} className="button">
          enviar
        </button>
      </form>
      <form className="form">
        <h3 className="title">Inicio de sesión</h3>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          type="email"
        />
        <input
          onChange={(e) => setContraseña(e.target.value)}
          className="input"
          type="password"
        />
        <button onClick={(e) => manejarInicioSesion(e)} className="button">
          enviar
        </button>
        <button onClick={(e) => manejarGoogle(e)} className="button">
          Google
        </button>
      </form>

      <button onClick={()=> manejarLogout()} className="button">Cerrar sesión</button>
    </div>
  );
}

export default FormsFirebase;
