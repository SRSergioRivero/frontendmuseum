import React from 'react';
import "./NavBar.css";
import Logotype from '../images/logotype.png';
import { Link } from 'react-router-dom';

import Login from '../images/login.svg';
import Stamped from '../images/stamped.svg';

const NavBar = () => {
    return (
        <div>
            <img src={Logotype} className="logotype" alt="Logotipo del museo MUAC" />
            <nav id="navBar" className="navbar navbar-expand-lg navbar-light ">
                <ul className="navbar-nav">
                    {/* <li className="nav-item">
                        <Link className="nav-link" to='/'>Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to='/links/Gallery'>Galería</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to='/links/ScheduleAndPrice'>Horarios y tarifas</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to='/links/Legal'>Aviso Legal</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/links/Cookies'>Cookies</Link>
                    </li> */}

                    <img
                        src={Stamped}
                        className="iconUser iconUserSpace iconicon"
                        alt="Primera imagen del carrousel"
                    />


                    <img
                        src={Login}
                        className="iconUser iconUserSpace"
                        alt="Primera imagen del carrousel"
                    />


                </ul>
            </nav>
        </div>
    )
}

export default NavBar;