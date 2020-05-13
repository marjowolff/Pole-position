import React from 'react'
import axios from "axios"
import BackButton from './BackButton'
import TempsTrajetNavitia from './TempsTrajetNavitia';
import NoOffer from "./NoOffer"
import Loader from "./LoaderLogo/Loader"



class OffresPE extends React.Component {
    state = {
        jobOffers: [],
        jobKeyWord:"",
        contractChoice:"",
        natureContratChoice:"",
        loadedUserChoices : false,
        tokenLoaded : false,
        offersloaded: false,
    };

    getTokenPE = () => {
        let tokenFromStor = sessionStorage.getItem('tokenStor')

        if( !tokenFromStor ){
            this.getTokenPEAxios()
        } else {
            this.setState({ tokenLoaded : true }, ()=>this.getJobOffersAxios())
        }
    };

    getTokenPEAxios = () => {
        axios({
            method: 'post',
            url: 'https://cors-anywhere.herokuapp.com/https://entreprise.pole-emploi.fr/connexion/oauth2/access_token?realm=%2Fpartenaire&grant_type=client_credentials&client_id=PAR_offrespoleemploi_4f4ff3756bc6ad0d21553a4cbed52fe90a09736594c0f038f134c61273aed8a1&client_secret=4c10c5635c0f9b1cce87b2687958ecca2fdd04e72bfd83262297229073f092ee&scope=application_PAR_offrespoleemploi_4f4ff3756bc6ad0d21553a4cbed52fe90a09736594c0f038f134c61273aed8a1%20api_offresdemploiv2 o2dsoffre',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
            .then(res => {
                sessionStorage.setItem('tokenStor', res.data.access_token)
                this.setState({ tokenLoaded : true }, ()=>this.getJobOffersAxios())
            })
    }

    // https://cors-anywhere.herokuapp.com/

  
    getJobOffersAxios = () => {
        let tokenFromStor = sessionStorage.getItem('tokenStor')
        axios({
            method: 'get',
            url: 'https://api.emploi-store.fr/partenaire/offresdemploi/v2/offres/search',
            headers: { Authorization: `Bearer ${tokenFromStor}` },
           // headers: { Authorization: `Bearer ${this.state.token}` },
            //headers: { Authorization: `Bearer 34d8e26b-e9b9-4397-8be3-584e9dcd7a6a` },
           
            params: {
                motsCles: this.state.jobKeyWord,
                commune: 75118,
                typeContrat: this.state.contractChoice,
                natureContrat: this.state.natureContratChoice,
                //range: "0-10"
            }
        })
            .then(res => this.setState({ jobOffers: res.data.resultats, offersloaded: true }) , () => this.errorJobOffersAxios())
    }

    errorJobOffersAxios = (error) => {
        console.log("pas de token !!!!!")
        this.getTokenPEAxios()
    }





    handleKeyWords = () => {
        if (this.props.location.data.userKeyWord !== this.state.jobKeyWord) {
            this.setState({ jobKeyWord: this.props.location.data.userKeyWord })
        }
    }
    handleContractChoice = () => {
        let contractTab = []
        if (this.props.location.data.selectCDI === true) {
            contractTab.push("CDI")
        }
        if (this.props.location.data.selectCDD === true) {
            contractTab.push("CDD")
        }
        if (this.props.location.data.selectINTERIM === true) {
            contractTab.push("MIS")
        }
        let contractList = contractTab.join(",")
        this.setState({ contractChoice: contractList })
    }
    handleNatureContrat = () => {
        if (this.props.location.data.selectApprenti === true) {
            this.setState({ natureContratChoice: "E2" })
        }
    }

    handleUserChoices = () => {
        this.handleKeyWords()
        this.handleContractChoice()
        this.handleNatureContrat()
        this.setState({ loadedUserChoices: true },()=>this.getTokenPE())
    }



      componentDidMount() {
        this.handleUserChoices()
      }
    

   /* componentDidUpdate() {
        if (this.state.loadedUserChoices && this.state.tokenLoaded){
            this.getJobOffersAxios()
            this.setState({tokenLoaded : false }) 
        }
    }*/


    render() {
          //console.log(`props temps trajet max :${this.props.location.data.tempsTrajetMax}`)
          //console.log(this.state.jobOffers)
          console.log(`le token du cache ${sessionStorage.getItem('tokenStor')}`)
          
        return (
            <div>
                <BackButton />
                <div>
                    {!this.state.offersloaded ? (<Loader />) : (
                       
                       this.state.jobOffers.length > 0 ?  (
                            <TempsTrajetNavitia jobOffers={this.state.jobOffers} longitudeDepart={this.props.location.data.longitudeDepart} latitudeDepart={this.props.location.data.latitudeDepart} tempsTrajetMax={this.props.location.data.tempsTrajetMax}/>
                                       ) : (
                                        <div>
                                            <NoOffer/>
                                        </div>
                                    )               
                     )
                    }

                </div>
            </div>                  
        )}         
           
};


export default OffresPE