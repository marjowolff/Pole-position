import React from 'react'
import axios from "axios"

class APIPoleEmploi extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        jobOffers: {},
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
           // .then(res => console.log(res.data.access_token))
           .then(res => this.setState({token : res.data.access_token, isToken:true}))
           console.log(this.state.token)
        }
    getJobOffers = ()=> {
        axios({
            method: 'get',
            url: 'https://api.emploi-store.fr/partenaire/offresdemploi/v2/offres/search',
            headers: {Authorization: `Bearer ${this.state.token}`},
            params: {
                motsCles : "web",
                commune : 75118,
                typeContrat :"CDI"
              }
            //headers: {Authorization: `Bearer bddd8bb9-24c4-428d-91b0-280bc22695c4`}
          })
          .then(res => this.setState({jobOffers: res.data.resultats, isLoaded :true}))
           
        }
        //console.log(this.state.jobOffers)
         //.then (res => console.log(res.data.resultats)) 

          

         //axios.get("https://melroune.github.io/starwars-api/api/all.json")
        //.then(res => console.log(res.data))
        //.then(res => this.setState({jobOffers: res.data, isloaded :true}))
     
    
    componentDidMount(){
      this.getTokenPE()
      
     //this.getJobOffers()
        
    }
    render(){
        
        return(
            // {console.log(this.state.token)}
            <div>
            {this.state.isToken ? (
           
           <button onClick={this.getJobOffers()}> Voir les offres d'emploi </button>
        
            ) : (
                 <p>la page est en train de charger</p>
             )}
            {console.log(this.state.jobOffers)}

            {this.state.JobOffers ?

            this.state.JobOffers.map(offer => (
            <p>offre numéro 1</p>))

            : <p> Chargement des offres </p>

                }    
             </div>
        )
    }
}

export default APIPoleEmploi