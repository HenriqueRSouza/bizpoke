import React from 'react'
import'./Main.css';

import { Link } from 'react-router-dom';

import Logo from '../logo-solo.png';

function Movi(){
    return(
        <div className="main" href="main">
            <div className="todo">
                <div className="movi-present">
                    <Link to='/' className='logo'>
                        <img src={Logo} alt="logo"></img>
                    </Link>
                    <h1>Empresa que estará </h1> 
                    <h1>sempre com você</h1>
                    <a href="#">Ver sobre</a>
                </div>
            </div>

            <div className="movi">
                <div className="movi-text">
                    <h1>Movilizer</h1>
                    <h8>O que sua empresa merece</h8>
                    <p>A plataforma para operações de campo que impulsiona a lucratividade das empresas de manufatura e serviços, propiciando a implantação de estratégias ágeis e dinâmicas em campo. </p>
                    
                    <a href="#">Movilizer</a>
                </div>
            </div> 

        </div>
    )
}

export default Movi;