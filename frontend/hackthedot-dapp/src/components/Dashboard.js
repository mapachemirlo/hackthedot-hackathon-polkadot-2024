// src/components/Dashboard.js
import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

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
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default Dashboard;

