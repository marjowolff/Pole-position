import React from 'react'
import './BackButton.css'
import { Link } from 'react-router-dom';

class BackButton extends React.Component {

    handleClick = () => {

    }
    render() {

        return (
            <div class="divButton">
            <Link to="/">
                <button className="backButton" onClick={this.handleClick}>Modifier ma recherche</button>
            </Link>
            </div>
        )
    }
}

export default BackButton