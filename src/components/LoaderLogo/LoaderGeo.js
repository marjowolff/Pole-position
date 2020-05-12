import React from 'react';
import loaderGeo from '../Images/LoaderGeo.png'
import "./LoaderGeo.css"

function LoaderGeo() {
    return (
        <div className="LoaderGeo">
            <img src={loaderGeo} alt="LoaderGeo" />
        </div>

    )
}

export default LoaderGeo;