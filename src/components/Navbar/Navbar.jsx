import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
       <div className="container">
              <div className="navwrapper">
              <div className="navbar-logo">
        <a href="#">Brand</a>
      </div>
      <ul className="navbar-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
              </div>
       </div>
    </nav>
  );
};

export default Navbar;
