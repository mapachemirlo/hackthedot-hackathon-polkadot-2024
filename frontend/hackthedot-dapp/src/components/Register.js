// src/components/Register.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const navigate = useNavigate();

  // Function to connect with MetaMask
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      alert('MetaMask is not installed');
    }
  };

  const handleRegister = async () => {
    if (!walletAddress) {
      alert('Please connect MetaMask to register.');
      return;
    }

    try {
      // Register the user with email and password
      await createUserWithEmailAndPassword(auth, email, password);

      // Save user data to Firestore
      const userDoc = doc(db, 'users', email); // Use email as document ID
      await setDoc(userDoc, { username, email, walletAddress });

      alert('Registro exitoso');
      navigate('/login');
    } catch (error) {
      console.error('Error al registrar:', error);
    }
  };

  return (
    <div className='register-container'>
      <header className="register-header">
        <Link to="/"><img className="logo" src='hack-the-dot-blanco-logo.png' alt='img'></img></Link>
          <nav className="register-nav">
            <Link to="/about">About</Link>
            <Link to="/help">Help</Link>
            <Link to="/ranking">Ranking</Link>
          </nav>
      </header>

      <p className='back-text'><Link to="/" className='back-link'>&#60; Back</Link></p>
      
      <div className="register-title-form-container"> 
        <div className="register-title-container"> 
          <h2>Register</h2>    
        </div>

        <div className="register-form-container">

          <div className='register-form-input-container'>
            <label className='register-form-label'>Email <span className='obligatorio'>*</span></label>
            <input className="register-form-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className='register-form-input-container'>
            <label className='register-form-label'>Username <span className='obligatorio'>*</span></label>
            <input className="register-form-input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          
          <div className='register-form-input-container'>
          <label className='register-form-label'>Password <span className='obligatorio'>*</span></label>
            <input className="register-form-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='register-form-input-container'>
            {!walletAddress ? (
              <button className="register-button" onClick={connectWallet}>Connect Wallet</button>
            ) : (
              <button className="register-button" onClick={handleRegister}>Registrarse</button>
            )}
          </div>
          
        </div>
      </div>

      <footer className="register-footer">
        <p className='register-footer-text'>By <Link to="https://polkadot.com/" className='register-footer-link-polkadot'><img className="polkadot-logo-small" src='polkadot-logo-small.png' alt='img'></img></Link></p>
      </footer>
      
    </div>
  );
};

export default Register;


// // src/components/Register.js
// import React, { useState } from 'react';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth, db } from '../firebase';
// import { useNavigate } from 'react-router-dom';
// import { doc, setDoc } from 'firebase/firestore';

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [username, setUsername] = useState('');
//   const [walletAddress, setWalletAddress] = useState('');
//   const navigate = useNavigate();

//   // Function to connect with MetaMask
//   const connectWallet = async () => {
//     if (window.ethereum) {
//       try {
//         const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//         setWalletAddress(accounts[0]);
//       } catch (error) {
//         console.error('Error connecting to MetaMask:', error);
//       }
//     } else {
//       alert('MetaMask is not installed');
//     }
//   };

//   const handleRegister = async () => {
//     if (!walletAddress) {
//       alert('Please connect MetaMask to register.');
//       return;
//     }

//     try {
//       // Register the user with email and password
//       await createUserWithEmailAndPassword(auth, email, password);

//       // Save user data to Firestore
//       const userDoc = doc(db, 'users', email); // Use email as document ID
//       await setDoc(userDoc, { username, email, walletAddress });

//       alert('Registro exitoso');
//       navigate('/login');
//     } catch (error) {
//       console.error('Error al registrar:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Registrarse</h2>
//       <input
//         type="text"
//         placeholder="Nombre de Usuario"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
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
//       <button onClick={connectWallet}>Conectar MetaMask</button>
//       <button onClick={handleRegister}>Registrarse</button>
//     </div>
//   );
// };

// export default Register;




// // src/Register.js
// import React, { useState } from 'react';
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from '../firebase';

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleRegister = async () => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       console.log('Usuario registrado:', userCredential.user);
//       alert("Usuario registrado")
//     } catch (error) {
//       console.error('Error al registrar:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Registro</h2>
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
//       <button onClick={handleRegister}>Registrarse</button>
//     </div>
//   );
// };

// export default Register;
