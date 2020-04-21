import React from 'react'
import './BackButton.css'

class BackButton extends React.Component {

    handleClick = () => {

    }
    render() {

        return (
            <Link to="/">
                <button class="backButton" onClick={this.handleClick}>Modifier ma recherche</button>
            </Link>
        )
    }
}

export default BackButton