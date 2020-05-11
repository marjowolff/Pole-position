import React from 'react'
import { FaBuilding } from 'react-icons/fa'
import { FaBus } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import { IoMdBriefcase } from 'react-icons/io'
import './SearchResults.css';


class ShowResults extends React.Component {
    render () {
        const {title, company, city, contractNature, contractType, tempsTrajet, lienOffrePE} = this.props
        return (
            <div>
                <div className="card">
                    <h2>{title}</h2>
                    <div className="cardSeparator">
                        {company ? 
                        <p><FaBuilding />{company}</p> : <p><FaBuilding />Entreprise non renseignée</p>}
                        <p><GoLocation /> {city}</p>
                        {this.props.contractNature === "Contrat apprentissage" ?
                        <p><IoMdBriefcase />{contractNature}</p> : <p><IoMdBriefcase />{contractType}</p>}
                        <p id="FaBus" className={tempsTrajet < 20 ? "inf20" : (tempsTrajet < 30 ? "inf30" : (tempsTrajet < 45 ? "inf45": (tempsTrajet < 60 ? "inf60": (tempsTrajet <75 ? "inf75" : "sup75")))) }><FaBus /> {tempsTrajet} min </p>
                    </div>
                    <a href={lienOffrePE} target="blanck" ><button className="cardButton">Voir l'offre</button></a>  
                </div>
            </div>
        )
    }
}

export default ShowResults