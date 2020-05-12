import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/Logo.png'
import "./Logo.css"

function Logo() {
    return (
        <div className="Logo">
            <Link to="/">
            
                <img src={logo} alt="Logo" />
            </Link>    
            </div>
        
    )
}

export default Logo;