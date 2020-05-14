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
                    <h2 className="cardTitle">{title}</h2>
                    <div className="cardSeparator">
                        <div className="companyEtContrat">
                        {company ? 
                        <p className="company"><FaBuilding />{company}</p> : <p className="company"><FaBuilding />Entreprise non renseignée</p>}
                        {this.props.contractNature === "Contrat apprentissage" ?
                        <p className="contrat"><IoMdBriefcase />{contractType}/{contractNature}</p> : 
                        <p className="contrat"><IoMdBriefcase />{contractType}</p>}
                        </div>
                        <p className="city"><GoLocation /> {city}</p>
                        <p id="FaBus" className={tempsTrajet <= 30 ? "inf30" : (tempsTrajet <= 60 ? "inf60": "sup60") }><FaBus /> {tempsTrajet} min </p>
                    </div>
                    <a href={lienOffrePE} target="blanck" ><button className="cardButton">Voir l'offre</button></a>  
                </div>
            </div>
        )
    }
}

export default ShowResults