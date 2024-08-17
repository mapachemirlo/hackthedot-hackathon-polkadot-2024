// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Bienvenido a Hack the Dot</h1>
      <p>¡El desafío está a punto de comenzar!</p>
      <Link to="/register">
        <button>Registrarse</button>
      </Link>
      <Link to="/login">
        <button>Iniciar Sesión</button>
      </Link>
    </div>
  );
};

export default Home;
