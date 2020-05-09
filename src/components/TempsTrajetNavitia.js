import React from "react";
import ShowResults from "./ShowResults";

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
          console.log("test")
          longDepart = 2.34; // si pas de géoloc ou d'adresse fournie, lat et long par défaut de paris centre
          latDepart = 48.85;
          } 
        console.log(`long depart : ${longDepart}, lat depart :${latDepart}, long arrivée :${longArrivee},lat arrivée : ${latArrivee}`)
        const url = `https://api.navitia.io/v1/coverage/fr-idf/journeys?from=${longDepart};${latDepart}&to=${longArrivee};${latArrivee}&key=${this.state.token}`;
        fetch(url)
          .then((res) => res.json())
          .then((res) =>
            this.setState({
              navResult: Math.round(res.journeys[0].duration / 60),
            })
          )
          //.then((res) => console.log(this.state.navResult))
          .then((res) => {
            tabOffers[i].tempsTrajet = this.state.navResult;
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
    // console.log(this.state.tabOffersWithDuration)
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
