import React from 'react'
import axios from "axios"
import SearchResults from './SearchResults'
import BackButton from './BackButton'
import NavitiaTime from "./APINavitiaTime.js";

class Resultats extends React.Component {
    state = {
        jobOffers: [],
        token : "no token",
        jobKeyWord:"",
        contractChoice:"",
        natureContratChoice:"",
        longitudeDepart:2.3003136,
        latitudeDepart:48.7686144
    };
    
    getTokenPE = () => {
                axios({
                  method: 'post',
                  url: 'https://cors-anywhere.herokuapp.com/https://entreprise.pole-emploi.fr/connexion/oauth2/access_token?realm=%2Fpartenaire&grant_type=client_credentials&client_id=PAR_offrespoleemploi_4f4ff3756bc6ad0d21553a4cbed52fe90a09736594c0f038f134c61273aed8a1&client_secret=4c10c5635c0f9b1cce87b2687958ecca2fdd04e72bfd83262297229073f092ee&scope=application_PAR_offrespoleemploi_4f4ff3756bc6ad0d21553a4cbed52fe90a09736594c0f038f134c61273aed8a1%20api_offresdemploiv2 o2dsoffre',
                  headers : {
                      'Content-Type':'application/x-www-form-urlencoded',
                         }
                       })
                .then(res => this.setState({token : res.data.access_token}, ()=>{this.getJobOffers()} ))
                
            };
            
    getJobOffers = () => {
            axios({
                method: 'get',
                url: 'https://api.emploi-store.fr/partenaire/offresdemploi/v2/offres/search',
                headers: {Authorization: `Bearer ${this.state.token}`},
                params: {
                    motsCles : this.state.jobKeyWord,
                    commune : 75118,
                    typeContrat :this.state.contractChoice,
                    natureContrat : this.state.natureContratChoice,
                    range : "0-10"
                     }
                   })
                .then(res => this.setState({jobOffers: res.data.resultats}))
           }
            
    handleKeyWords=()=>{
        if (this.props.location.data.userKeyWord !== this.state.jobKeyWord){
            this.setState({jobKeyWord:this.props.location.data.userKeyWord})
        }
    }
    handleContractChoice = () =>{
        let contractTab=[]
        if (this.props.location.data.selectCDI === true){
            contractTab.push("CDI")
        } 
        if (this.props.location.data.selectCDD === true){
            contractTab.push("CDD")
        }
        if (this.props.location.data.selectINTERIM === true){
            contractTab.push("MIS")
        }
        let contractList=contractTab.join(",")
        this.setState({contractChoice : contractList})
        }
    handleNatureContrat =() =>{
        if (this.props.location.data.selectApprenti === true){
            this.setState({natureContratChoice : "E2"})
        } 
    }
    
           

    componentDidMount() {
        this.handleKeyWords()
        this.handleContractChoice()
        this.handleNatureContrat() 
        this.getTokenPE()  
      }

    render(){
        return(
        <div>
            <BackButton />
            <NavitiaTime longitude={this.state.longitudeDepart} latitude={this.state.latitudeDepart}/>
            {this.state.jobOffers.map(offer => (
                <div key={offer.id}>
                    <SearchResults title={offer.intitule} city={offer.lieuTravail.libelle} company={offer.entreprise !== undefined && offer.entreprise.nom} contractType={offer.typeContrat}/>
                    <p>{offer.lieuTravail.codePostal}</p>
                    <p>{offer.lieuTravail.latitude}</p>
                    <p>{offer.lieuTravail.longitude}</p>
                </div>
            ))}
        </div>
        );
    }
}

export default Resultats