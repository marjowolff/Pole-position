import React from 'react'
import './BackButton.css'

class BackButton extends React.Component {
    
    handleClick = () => {
    
    }
    render(){

        return (
            <button class="backButton" onClick={this.handleClick}>Modifier ma recherche</button>
        )
    }
}

export default BackButton