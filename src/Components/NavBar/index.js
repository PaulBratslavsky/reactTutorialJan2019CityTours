import React from 'react';
import './NavBar.scss';
import logo from '../../logo.png';

const NavBar = () => {
    return(
        <nav className="navbar">
            <img src={logo} alt="My Logo Image" />
            <ul className="nav-links">
                <li><a href="#" className="nav-link-item">Home</a></li>
                <li><a href="#" className="nav-link-item">About</a></li>
                <li><a href="#" className="nav-link-item active">Tours</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;