import React, { Component } from 'react';

class VotreTempsTrajet extends Component {
    render() {
        return (
            <>
            <div>
                <label htmlFor="tempsTrajet">Choisissez un temps de trajet</label>
            </div>
            <div>
                <select name="tempsTrajet" id="tempsTrajet">
                    <option value="aucuneImportance">--aucune importance--</option>
                    <option value="20min"> &lt; 20 min</option>
                    <option value="30min"> &lt; 30 min</option>
                    <option value="45min"> &lt; 45 min</option>
                    <option value="1h"> &lt; 1h</option>
                    <option value="1h15"> &lt; 1h 15</option>
                </select>
            </div>
            </>
        );
    }
}

export default VotreTempsTrajet;