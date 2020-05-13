import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import Logo from "./LoaderLogo/Logo"



const Burger = () => {
    const [status, setStatus] = useState('close');
    return (
            <div className={status}>
                <nav>
                    
                    <div className="Menu">
                        <div className="Burger" role="button" onClick={() => setStatus(status === 'open' ? 'close' : 'open')}>
                            <div className="Wrap"></div>
                        </div>
                        <Logo />
                    </div>
                    <div className="Links">
                        <ul>
                        <li><Link to="/" className="Path">Recherche</Link></li>
                        <li><Link to="/resultats" className="Path">Résultats</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>

    )
}

export default Burger

