// Navbar.js

import {  NavLink } from 'react-router-dom';
import './NavBar.css';

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/about" activeClassName="active">About </NavLink>
                </li>
                <li>
                    <NavLink to="/services" activeClassName="active">Services</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
