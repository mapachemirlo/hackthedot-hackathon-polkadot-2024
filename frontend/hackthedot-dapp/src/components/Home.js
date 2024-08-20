// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Asegúrate de crear y enlazar el archivo CSS

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">        
        <Link to="/"><img className="logo" src='hack-the-dot-blanco-logo.png' alt='img'></img></Link>
        <nav className="home-nav">
          <Link to="/about">About</Link>
          <Link to="/help">Help</Link>
          <Link to="/ranking">Ranking</Link>
        </nav>
      </header>
      <main className="home-main-container">
        <div className="home-main-subcontainer">
          <h2 className="home-tagline">
            Learn about security, overcome challenges and earn rewards
          </h2>
          <div className="home-buttons">
            <Link to="/register" className='home-buttons-link home-buttons-link--register'>
              <button className="home-register-button">Register</button>
            </Link>
            <Link to="/login" className='home-buttons-link'>
              <button className="home-login-button">Login</button>
            </Link>
          </div>
        </div>
        
      </main>
      <footer className="home-footer">
        <p className='home-footer-text'>By <Link to="https://polkadot.com/" className='home-footer-link-polkadot'><img className="polkadot-logo-small" src='polkadot-logo-small.png' alt='img'></img></Link></p>
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
