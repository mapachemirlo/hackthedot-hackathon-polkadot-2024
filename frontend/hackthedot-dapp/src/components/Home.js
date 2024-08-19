// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Asegúrate de crear y enlazar el archivo CSS

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">Hack the dot</h1>
        <nav className="home-nav">
          <Link to="/about">About</Link>
          <Link to="/help">Help</Link>
          <Link to="/ranking">Ranking</Link>
        </nav>
      </header>
      <main className="home-main">
        <h2 className="home-tagline">
          Learn about security, overcome challenges and earn rewards
        </h2>
        <div className="home-buttons">
          <Link to="/register">
            <button className="register-button">Register</button>
          </Link>
          <Link to="/login">
            <button className="login-button">Login</button>
          </Link>
        </div>
      </main>
      <footer className="home-footer">
        <p>By <span className="polkadot">Polkadot</span></p>
      </footer>
    </div>
  );
};

export default Home;

// // src/components/Home.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div>
//       <h1>Bienvenido a Hack the Dot</h1>
//       <p>¡El desafío está a punto de comenzar!</p>
//       <Link to="/register">
//         <button>Registrarse</button>
//       </Link>
//       <Link to="/login">
//         <button>Iniciar Sesión</button>
//       </Link>
//     </div>
//   );
// };

// export default Home;
