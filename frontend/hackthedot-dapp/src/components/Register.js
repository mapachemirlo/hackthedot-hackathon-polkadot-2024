// src/components/Register.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';

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
    <div>
      <h2>Registrarse</h2>
      <input
        type="text"
        placeholder="Nombre de Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {!walletAddress ? (
        <button onClick={connectWallet}>Conectar MetaMask</button>
      ) : (
        <button onClick={handleRegister}>Registrarse</button>
      )}
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
