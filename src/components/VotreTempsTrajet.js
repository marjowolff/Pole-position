import React, { Component } from 'react';
import './PageRecherche.css'

class VotreTempsTrajet extends Component {
    render() {
        return (
            <div className="tempsTrajet">
            <div className="tempsTrajetLabel">
                <label htmlFor="tempsTrajet">Choisissez un temps de trajet</label>
            </div>
            <div className="tempsTrajetSelect">
                <select className="Selecteur" name="tempsTrajet" id="tempsTrajet" onChange={this.props.handleTempsTrajetMax}>
                    <option value="1000000000000">--aucune importance--</option>
                    <option value="20"> &lt; 20 min</option>
                    <option value="30"> &lt; 30 min</option>
                    <option value="45"> &lt; 45 min</option>
                    <option value="60"> &lt; 1h</option>
                    <option value="75"> &lt; 1h 15</option>
                </select>
            </div>
            </div>
        );
    }
}

export default VotreTempsTrajet;