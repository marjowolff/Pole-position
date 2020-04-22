import React from 'react'
import './BackButton.css'
import { Link } from 'react-router-dom';

class BackButton extends React.Component {

    handleClick = () => {

    }
    render() {

        return (
            <Link to="/">
                <button className="backButton" onClick={this.handleClick}>Modifier ma recherche</button>
            </Link>
        )
    }
}

export default BackButton