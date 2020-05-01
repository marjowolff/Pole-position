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
                <select name="tempsTrajet" id="tempsTrajet" onChange={this.props.handleTempsTrajetMax}>
                    <option value="aucuneImportance">--aucune importance--</option>
                    <option value="20min"> &lt; 20 min</option>
                    <option value="30min"> &lt; 30 min</option>
                    <option value="45min"> &lt; 45 min</option>
                    <option value="1h"> &lt; 1h</option>
                    <option value="1h15"> &lt; 1h 15</option>
                </select>
            </div>
            </div>
        );
    }
}

export default VotreTempsTrajet;