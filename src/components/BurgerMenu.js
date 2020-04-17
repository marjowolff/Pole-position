import React, { useState } from 'react';
import './BurgerMenu.css';



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
                    </div>
                    <div class="Link">
                        <ul>
                            <li><a href="#">ACCUEIL</a></li>
                            <li><a href="#">ME LOCALISER</a></li>
                            <li><a href="#">AIDE</a></li>
                            <li><a href="#">CONTACT</a></li>
                            <li><a href="#">MENTIONS LEGALES</a></li>
                        </ul>
                    </div>
                </nav>
            </div>

        </body>

    )
}

export default Burger

