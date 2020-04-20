import React from 'react'
import axios from "axios"
import SearchResults from './SearchResults'

class APIPoleEmploi extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        jobOffers: [],
        token : "test",
        isToken : false,
        isLoaded: false,
        jobKeyWord:"",
        city:"",
        contractType:"",
    };
    }
    getTokenPE = () => {
                axios({
                  method: 'post',
                  url: 'https://cors-anywhere.herokuapp.com/https://entreprise.pole-emploi.fr/connexion/oauth2/access_token?realm=%2Fpartenaire&grant_type=client_credentials&client_id=PAR_offrespoleemploi_4f4ff3756bc6ad0d21553a4cbed52fe90a09736594c0f038f134c61273aed8a1&client_secret=4c10c5635c0f9b1cce87b2687958ecca2fdd04e72bfd83262297229073f092ee&scope=application_PAR_offrespoleemploi_4f4ff3756bc6ad0d21553a4cbed52fe90a09736594c0f038f134c61273aed8a1%20api_offresdemploiv2 o2dsoffre',
                  headers : {
                      'Content-Type':'application/x-www-form-urlencoded',
                         }
                       })
                .then(res => this.setState({token : res.data.access_token, isToken:true}, ()=>{this.getJobOffers()} ))
                console.log(this.state.token)
                
            };
            
    getJobOffers = () => {
            axios({
                method: 'get',
                url: 'https://api.emploi-store.fr/partenaire/offresdemploi/v2/offres/search',
                headers: {Authorization: `Bearer ${this.state.token}`},
                params: {
                    motsCles : "web",
                    commune : 75118,
                    typeContrat :"CDI"
                     }
                   })
                .then(res => this.setState({jobOffers: res.data.resultats, isLoaded :true}))
           }
            
          
        
    componentDidMount(){
      this.getTokenPE()
    
     }
    render(){
        
        return(
        <div>
            {this.state.jobOffers.map(offer => (
                <div key={offer.id}>
                    <SearchResults title={offer.intitule} city={offer.lieuTravail.libelle} company={offer.entreprise != undefined && offer.entreprise.nom} contractType={offer.typeContrat}/>
                {/* <p>{offer.intitule}</p>
                <p>{offer.entreprise != undefined && offer.entreprise.nom}</p>
                <p>{offer.description}</p>
                <p>{offer.lieuTravail.commune}</p>
                <p>{offer.lieuTravail.libelle}</p>
                <p>{offer.origineOffre.urlOrigine}</p>
                <p>{offer.typeContrat}</p>
                <p>{offer.origineOffre.partenaires.url}</p> */}
                </div>
            ))}
            
        </div>
        );
    }
}

export default APIPoleEmploi