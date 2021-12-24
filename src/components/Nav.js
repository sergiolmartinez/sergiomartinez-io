import React from 'react';
import logo from '../assets/logo-30.png';
import { Link } from 'react-router-dom'



function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
         <Link className="navbar-brand" to="/">
            <img  src={logo} alt="logo" className="d-inline-block align-text-top logo" ></img>
            sergiomartinez.io
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav my-pages">
                <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Projects
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/Projects/Crypto-Markets">Crypto Markets</Link></li>
                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                <Link className="nav-link disabled" to="#">Contact</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
  );
}

export default Nav;
