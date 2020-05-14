import React from 'react'

import './SearchResults.css';


class NoOffer extends React.Component {
    render () {
        return (
            <div>
                <p>Aucune offre ne correspond à ces critères de recherche</p>
                <p>Vous pouvez essayer de changer les mots clés, le type de contrat ou le temps de trajet maximum</p>
            </div>
        )
    }
}

export default NoOffer