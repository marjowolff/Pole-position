import React from "react";
import ShowResults from "./ShowResults";

let currentDate = new Date()
console.log(currentDate,currentDate.getDay())
let days = 7 - currentDate.getDay() +1 // Calcul du prochain lundi

currentDate.setDate(currentDate.getDate() + days)
currentDate.setHours(18)
let date = currentDate.toISOString()


class TempsTrajetNavitia extends React.Component {
  state = {
    token: "b0b9e3a3-8f64-4941-8ba7-b62b78071d18",
    longitudeDepart: this.props.longitudeDepart,
    latitudeDepart: this.props.latitudeDepart,
    longitudeArrivee: this.props.longitudeArrivee,
    latitudeArrivee: this.props.latitudeArrivee,
    navResult: {},
    tabOffersWithDuration: [],
    tempsTrajetMax: this.props.tempsTrajetMax,
  };

  getTabDuration = () => {
    const tabOffers = this.props.jobOffers;
    let longDepart = this.props.longitudeDepart;
    let latDepart = this.props.latitudeDepart;
    //console.log(tabOffers)

    for (let i = 0; i < tabOffers.length; i++) {
      const longArrivee = tabOffers[i].lieuTravail.longitude;
      const latArrivee = tabOffers[i].lieuTravail.latitude ;
      //console.log(tabOffers[i].lieuTravail.longitude)
      //console.log(tabOffers[i].lieuTravail.latitude)
      if (
        longArrivee !== undefined &&
        latArrivee !== undefined
      ) {
         if(longDepart == "2.0" || latDepart == "48.0" ){
          console.log("pas de géoloc")
          longDepart = 2.34; // si pas de géoloc ou d'adresse fournie pour le point de départ, lat et long par défaut de paris centre
          latDepart = 48.85;
          } 
       // console.log(`long depart : ${longDepart}, lat depart :${latDepart}, long arrivée :${longArrivee},lat arrivée : ${latArrivee}`)
      //  let currentDate = new Date()
      // let days = currentDate.getDay() - 1 + 7 // Calcul du prochain lundi
      // currentDate.setDate(currentDate.getDate() + days)
      // currentDate.setHours('08')
      // currentDate.toISOString
      // // const url = `https://api.navitia.io/v1/coverage/fr-idf/journeys?from=${this.props.longitudeDepart};${this.props.latitudeDepart}&to=${this.props.longitudeArrivee};${this.props.latitudeArrivee}&datetime=${currentDate}&key=${this.state.token}`;
      // const url = `https://api.navitia.io/v1/coverage/fr-idf/journeys?from=${longDepart};${latDepart}&to=${longArrivee};${latArrivee}&datetime=${currentDate}&key=${this.state.token}`;
      // console.log(currentDate,url)
      
      const url = `https://api.navitia.io/v1/coverage/fr-idf/journeys?from=${longDepart};${latDepart}&to=${longArrivee};${latArrivee}&datetime=${date}&key=${this.state.token}`;
      console.log(currentDate,url)
      //const url = `https://api.navitia.io/v1/coverage/fr-idf/journeys?from=${longDepart};${latDepart}&to=${longArrivee};${latArrivee}&key=${this.state.token}`;
        
        fetch(url)
          .then((res) => res.json())
          .then((res) => //console.log(res.journeys)
               { if (res.journeys !== undefined){
                  this.setState({
                    navResult: Math.round(res.journeys[0].duration / 60),
                  })
                } else {
                  this.setState({
                    navResult: "Calcul temps trajet impossible",
                  })
                }
                console.log(this.state.navResult)
              }
          )
          //.then((res) => console.log(this.state.navResult))
          .then((res) => {
            tabOffers[i].tempsTrajet = this.state.navResult;
            console.log(`pour tabOffer num ${i} temps trajet ${tabOffers[i].tempsTrajet}`)
          })
          .then((res) => this.setState({ tabOffersWithDuration: tabOffers }));
        
      }
      //console.log("test fin boucle")
    }
    // this.setState({ tabOffersWithDuration : tabOffers })
  };

  componentDidMount() {
    this.getTabDuration();
  }

  render() {
    // console.log(this.state.tabOffersWithDuration)
    //console.log(this.props.jobOffers)
    //console.log(this.state.tempsTrajetMax)
    return (
      <div>
        {this.state.tabOffersWithDuration
          .filter((offer) => offer.tempsTrajet < this.state.tempsTrajetMax)
          .sort((a, b) => a.tempsTrajet - b.tempsTrajet)
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
            </div>
          ))}
      </div>
    );
  }
}

export default TempsTrajetNavitia;
