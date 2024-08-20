// src/components/Login.js
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div className='login-container'>
          <header className="login-header">
            <Link to="/"><img className="logo" src='hack-the-dot-blanco-logo.png' alt='img'></img></Link>
              <nav className="login-nav">
                <Link to="/about">About</Link>
                <Link to="/help">Help</Link>
                <Link to="/ranking">Ranking</Link>
              </nav>
          </header>

          <p className='back-text'><Link to="/" className='back-link'>&#60; Back</Link></p>
          
          <div className="login-title-form-container"> 
            <div className="login-title-container"> 
              <h2>Login</h2>
            </div>

            <div className="login-form-container">

              <div className='login-form-input-container'>
                <label className='login-form-label'>Email <span className='obligatorio'>*</span></label>
                <input className="login-form-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className='login-form-input-container'>
                <label className='login-form-label'>Password <span className='obligatorio'>*</span></label>
                <input className="login-form-input"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className='login-form-input-container'>
                <button className="login-button" onClick={handleLogin}>Login</button>
              </div>
            </div>
      </div>

      <footer className="login-footer">
        <p className='login-footer-text'>By <Link to="https://polkadot.com/" className='login-footer-link-polkadot'><img className="polkadot-logo-small" src='polkadot-logo-small.png' alt='img'></img></Link></p>
      </footer>
    </div>
  );
};

export default Login;


// // src/components/Login.js
// import React, { useState } from 'react';
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from '../firebase';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate('/dashboard');
//     } catch (error) {
//       console.error('Error al iniciar sesión:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Iniciar Sesión</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Contraseña"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Iniciar Sesión</button>
//     </div>
//   );
// };

// export default Login;
