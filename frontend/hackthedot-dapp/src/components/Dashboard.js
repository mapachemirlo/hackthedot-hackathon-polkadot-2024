// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

// Direcciones de los contratos desplegados
const REWARD_MANAGER_ADDRESS = '0x8c02057a28a4ED422cDfBba180eaC6A24C1612e1';
const LEVEL_MANAGER_ADDRESS = '0xfd6F43bB3C1B0EC381b65f3ba0e33Da3e2785Ad4';
const CHALLENGE_MANAGER_ADDRESS = '0x4A4c2Def8e728A4D209bD8D3211Eb758F85105c1';

// ABI para los contratos
const REWARD_MANAGER_ABI = [
  'function rewards(address) view returns (uint256)',
  'function claimReward() external'
];
const LEVEL_MANAGER_ABI = [
  'function getCurrentLevel(address) view returns (uint256)'
];
const CHALLENGE_MANAGER_ABI = [
  'function getUserChallenges(address) view returns (uint256[])'
];

const Dashboard = () => {
  const [reward, setReward] = useState(0);
  const [level, setLevel] = useState(0);
  const [challenges, setChallenges] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Conectar a MetaMask
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();

        // Instanciar contratos
        const rewardManager = new ethers.Contract(REWARD_MANAGER_ADDRESS, REWARD_MANAGER_ABI, provider);
        const levelManager = new ethers.Contract(LEVEL_MANAGER_ADDRESS, LEVEL_MANAGER_ABI, provider);
        const challengeManager = new ethers.Contract(CHALLENGE_MANAGER_ADDRESS, CHALLENGE_MANAGER_ABI, provider);

        // Obtener recompensa
        const reward = await rewardManager.rewards(address);
        setReward(ethers.formatEther(reward));

        // Obtener nivel
        const level = await levelManager.getCurrentLevel(address);
        setLevel(level.toNumber());

        // Obtener desafíos completados
        const userChallenges = await challengeManager.getUserChallenges(address);
        setChallenges(userChallenges.map(id => id.toNumber()));
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Recompensas Disponibles: {reward} HTD</p>
      <p>Nivel Actual: {level}</p>
      <p>Desafíos Completados: {challenges.join(', ')}</p>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default Dashboard;



// simpleee
// // src/components/Dashboard.js
// import React from 'react';
// import { signOut } from 'firebase/auth';
// import { auth } from '../firebase';
// import { useNavigate } from 'react-router-dom';

// const Dashboard = () => {
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       navigate('/');
//     } catch (error) {
//       console.error('Error al cerrar sesión:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <button onClick={handleLogout}>Cerrar Sesión</button>
//     </div>
//   );
// };

// export default Dashboard;

