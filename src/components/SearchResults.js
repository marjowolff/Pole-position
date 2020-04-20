import React from 'react'
import { FaBuilding } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import { IoMdBriefcase } from 'react-icons/io'
import './SearchResults.css';


class SearchResults extends React.Component {
    state = {
        title:'Développeur Web (h/f)',
        city:'Paris 13',
        company:'Google',
        contractType:'CDI',
        link:'http://www.google.fr'
    }

    render () {
        return (
            <div>
                <div className="card">
                    <h2>{this.state.title}</h2>
                    <div className="cardSeparator">
                        <p><FaBuilding />{this.state.company}</p>
                        <p><GoLocation /> {this.state.city}</p>
                        <p><IoMdBriefcase />{this.state.contractType}</p>
                    </div>
                    <button className="cardButton">Voir l'offre</button>
                    
                </div>
            </div>
        )
    }
}

export default SearchResults