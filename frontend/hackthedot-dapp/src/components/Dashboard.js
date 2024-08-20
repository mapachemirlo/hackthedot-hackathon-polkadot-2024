// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import './Dashboard.css';
import { Link } from 'react-router-dom';

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
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

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
    <div className="dashboard-container">

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/dashboard"><img className="logo" src='hack-the-dot-blanco-logo.png' alt='img'></img></Link>
        </div>

        {/* Dropdown User Menu */}
        <div className="navbar-user" onClick={toggleDropdown}>
          <div className="user-info">
            <img src="polkadot-icon.png" alt="User Logo" className="user-logo" />
            <p className="user-name">polka.dot</p>
            <span className="dropdown-arrow">&#5167;</span> {/* Código del ícono de flecha hacia abajo */}
          </div>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <button onClick={handleLogout}>Log out</button>
              </li>
            </ul>
          )}
        </div>

      </nav>

      {/* Sidebar */}
      <div className="sidebar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/challenges">Challenges</a></li>
          <li><a href="/prizes">Prizes</a></li>
          <li><a href="/profile">Profile</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h3 className='title-home-page'>Home Page</h3>
        <div className="cards-container">

          <div className="card">
            <div className='challenges-title-container'>
              <h3 className='challenges-title'>Challenges</h3>
              <p className='challenges-create-link'>+ Create Challenge</p>
            </div>
            <div className='challenges-container'>
              <div>
                <p className='challenges-subtitle'>Active Challenges<span className='hidden'>:</span> <span className='number'>{challenges.length}</span> </p>              
              </div>
              <div>
                <p className='challenges-subtitle'>Closed Challenges<span className='hidden'>:</span> <span className='number'>0</span> </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className='prizes-title-container'>
                <h3 className='prizes-title'>Prizes</h3>
                <p className='prizes-create-link'>+ Create Prizes</p>
              </div>
              <div className='prizes-container'>
                <div>
                  <p className='prizes-subtitle'>Active Prizes<span className='hidden'>:</span> <span className='number'>{reward}</span> </p>              
                </div>
                <div>
                  <p className='prizes-subtitle'>Closed Prizes<span className='hidden'>:</span> <span className='number'>0</span> </p>
                </div>
              </div>
          </div>
        </div>


        <div className="card-large">
          <h3>Latest Activity</h3>
          <p>{challenges.length > 0 ? challenges.join(', ') : "There isn’t any activity yet, create a challenge to start"}</p>
          <button>Create Challenge</button>
          

          <div className='level-text'>{level}</div> 
        </div>
      </div>
    </div>
    // <div>
    //   <h2>Dashboard</h2>
    //   <p>Recompensas Disponibles: {reward} HTD</p>
    //   <p>Nivel Actual: {level}</p>
    //   <p>Desafíos Completados: {challenges.join(', ')}</p>
    //   <button onClick={handleLogout}>Cerrar Sesión</button>
    // </div>
  );
};

export default Dashboard;


