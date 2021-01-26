import React from 'react';
import './MainWhite.css';
import {Link} from 'react-router-dom';
import './MainWhite.css';

import Logo from '../assets/Logos/logo-solo.png'

function MainWhite() {
    return(
        <div className="main-branco">
            <div className="main-text">
                <Link to='/' className='logo'>
                    <img src={Logo} alt="logo"></img>
                </Link>
                <h1>Empresa que estará </h1> 
                <h2>sempre com você</h2>
                <a href="#">Ver sobre</a>
            </div>
        </div>
    )
}

export default MainWhite;
    