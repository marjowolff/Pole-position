import React from 'react';
import loader from '../Images/Loader.png'
import "./Loader.css"

function Loader() {
    return (
        <div className="Loader">
            <img src={loader} alt="Loader" />
        </div>

    )
}

export default Loader;