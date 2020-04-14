import React from 'react'
import axios from "axios"

class APIPoleEmploi extends React.Component {
    state = {
        jobOffers: [],
        isloaded: false
    }
    getTokenPE = () => {
        return axios({
            method: 'post',
            url: 'https://cors-anywhere.herokuapp.com/https://entreprise.pole-emploi.fr/connexion/oauth2/access_token?realm=%2Fpartenaire&grant_type=client_credentials&client_id=PAR_offrespoleemploi_4f4ff3756bc6ad0d21553a4cbed52fe90a09736594c0f038f134c61273aed8a1&client_secret=4c10c5635c0f9b1cce87b2687958ecca2fdd04e72bfd83262297229073f092ee&scope=application_PAR_offrespoleemploi_4f4ff3756bc6ad0d21553a4cbed52fe90a09736594c0f038f134c61273aed8a1%20api_offresdemploiv2 o2dsoffre',
            headers : {
              'Content-Type':'application/x-www-form-urlencoded',
                }
            });
    }
    getJobOffers = ()=> {
        //axios.get("https://melroune.github.io/starwars-api/api/all.json")
        //.then(res => console.log(res.data))
        //.then(res => this.setState({jobOffers: res.data, isloaded :true}))
       // fetch ("https://melroune.github.io/starwars-api/api/all.json")
       // .then(res => res.json())
       // .then(res => this.setState({jobOffers : res}))
    }
    componentDidMount(){
        this.getTokenPE()
        //this.getJobOffers()
        console.log(this.getTokenPE())
    }
    render(){
        return(
            <div>
                
            </div>
        )
    }
}

export default APIPoleEmploi