import React from 'react'
import { FaBuilding } from 'react-icons/fa'
import { FaBus } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import { IoMdBriefcase } from 'react-icons/io'
import './SearchResults.css';



class SearchResults extends React.Component {
    

    render () {
        return (
            <div>
                <div className="card">
                    <h2>{this.props.title}</h2>
                    <div className="cardSeparator">
                        <p><FaBuilding />{this.props.company}</p>
                        <p><GoLocation /> {this.props.city}</p>
                        <p><IoMdBriefcase />{this.props.contractType}</p>
                    </div>
                    <p id="FaBus"><FaBus /> 20 min</p>
                    <button className="cardButton">Voir l'offre</button>
                    
                </div>
            </div>
        )
    }
}

export default SearchResults