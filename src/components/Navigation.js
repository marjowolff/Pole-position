import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import Logo from "./Logo"



const Burger = () => {
    const [status, setStatus] = useState('close');
    return (

        <body>

            <div className={status}>
                <nav>
                    
                    <div className="Menu">
                        <div className="Burger" role="button" onClick={() => setStatus(status === 'open' ? 'close' : 'open')}>
                            <div className="Wrap"></div>
                        </div>
                        <Logo />
                    </div>
                    <div class="Links">
                        <ul>
                        <Link to="/" className="Path">
                                <li>Recherche</li>
                            </Link>
                            <Link to="/resultats" className="Path">
                                <li>Résultats</li>
                            </Link> 
                        </ul>
                    </div>
                </nav>
            </div>

        </body>

    )
}

export default Burger

