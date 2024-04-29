import React from 'react';
import './NavBar.css';

function Navbar() {
  return (
      <nav id='navbar' className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand nav-hover ms-3 text-color" href="">Gastón Techera</a>
        <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-3">
              <a className="nav-link nav-hover active" href="#about">About</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link nav-hover active" href="#projects">Projects</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link nav-hover active" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>


  );
}

export default Navbar;
