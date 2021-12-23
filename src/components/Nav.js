import React from 'react';
import logo from '../assets/logo-30.png';


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
         <a className="navbar-brand" href="/">
            <img  src={logo} alt="logo" className="d-inline-block align-text-top logo" ></img>
            sergiomartinez.io
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav my-pages">
                <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link disabled" href="#">Projects</a>
                </li>
                <li className="nav-item">
                <a className="nav-link disabled">Contact</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
  );
}

export default Nav;
