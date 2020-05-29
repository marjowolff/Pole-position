import React from "react";
import Loader from "./LoaderLogo/Loader"
import NoOffer from "./NoOffer";
import ShowResults from "./ShowResults";

let currentDate = new Date()
let days = 7 - currentDate.getDay() +1 

currentDate.setDate(currentDate.getDate() + days)
currentDate.setHours(18)
let date = currentDate.toISOString()


class TempsTrajetNavitia extends React.Component {
  state = {
    token: "b0b9e3a3-8f64-4941-8ba7-b62b78071d18",
    navResult: {},
    tabOffersWithDuration: [],
    tempsTrajetMax: this.props.tempsTrajetMax,
    loaded : false,
    loadNoOffer : false,
    
  };

  getTabDuration = () => { 
   
    const tabOffers = this.props.jobOffers;
    let longDepart = this.props.longitudeDepart;
    let latDepart = this.props.latitudeDepart;

    for (let i = 0; i < tabOffers.length; i++) {
      const longArrivee = tabOffers[i].lieuTravail.longitude;
      const latArrivee = tabOffers[i].lieuTravail.latitude ;
   
      if (
        longArrivee !== undefined &&
        latArrivee !== undefined
      ) {
         if(longDepart === 2.0 || latDepart === 48.0 ){
          longDepart = 2.34; 
          latDepart = 48.85;
          } 
      
      const url = `https://api.navitia.io/v1/coverage/fr-idf/journeys?from=${longDepart};${latDepart}&to=${longArrivee};${latArrivee}&datetime=${date}&key=${this.state.token}`;
      
       
        fetch(url)
          .then((res) => res.json())
          .then((res) => 
               { if (res.journeys !== undefined){
                  this.setState({
                    navResult: Math.round(res.journeys[0].duration / 60),
                  })
                } else {
                  this.setState({
                    navResult: "Calcul temps trajet impossible",
                  })
                }
              }
          )
          .then((res) => {
            tabOffers[i].tempsTrajet = this.state.navResult;
          })
          .then((res) => this.setState({ tabOffersWithDuration: tabOffers, loaded: true}, ));
        
      }
    }
  };

 

 loadNoOffer =() =>{
  setTimeout(()=>{this.setState({loadNoOffer : true})}, 2000)
 }
  
  componentDidMount() {
    this.getTabDuration();
  }
  componentDidUpdate(){
    this.loadNoOffer();
  }
 



  render() {
    const OffersWithDuration = this.state.tabOffersWithDuration.filter((offer) => offer.tempsTrajet < this.state.tempsTrajetMax).sort((a, b) => a.tempsTrajet - b.tempsTrajet)
    return (
      <div className="results">
        { !this.state.loaded ? <Loader/> : 
          OffersWithDuration.length > 0 ? (
             OffersWithDuration
            .map((offer) => (
            <div key={offer.id}>
              <ShowResults
                title={offer.intitule}
                city={offer.lieuTravail.libelle}
                company={offer.entreprise !== undefined && offer.entreprise.nom}
                contractType={offer.typeContrat}
                contractNature={offer.natureContrat}
                tempsTrajet={offer.tempsTrajet}
                lienOffrePE={offer.origineOffre.urlOrigine}
              />
            </div> )
          )) :( this.state.loadNoOffer ?
            <div> <NoOffer/> </div> : <div> </div>
          )
        }
      </div>
    );
  }
}

export default TempsTrajetNavitia;
