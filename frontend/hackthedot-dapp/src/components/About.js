// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'; // Asegúrate de crear y enlazar el archivo CSS

const About = () => {
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
      <main className="home-main">
        <h2 className="home-tagline">
          About
        </h2>
       
      </main>
      <footer className="home-footer">
        <p>By <span className="polkadot">Polkadot</span></p>
      </footer>
    </div>
  );
};

export default About;