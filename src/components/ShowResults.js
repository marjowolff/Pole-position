import React from 'react'
import SearchResults from './SearchResults'



class ShowResults extends React.Component {



    state = {
        transports: [],
        isloaded: false,
        duration: 0,
        token: "b0b9e3a3-8f64-4941-8ba7-b62b78071d18",
        longitudeDepart: this.props.longitudeDepart,
        latitudeDepart: this.props.latitudeDepart,
        longitudeArrivee: this.props.longitudeArrivee,
        latitudeArrivee: this.props.latitudeArrivee,
      };
    
      getTransportationTime = () => {
        const url = `https://api.navitia.io/v1/coverage/fr-idf/journeys?from=${this.props.longitudeDepart};${this.props.latitudeDepart}&to=${this.props.longitudeArrivee};${this.props.latitudeArrivee}&key=${this.state.token}`;
        fetch(url)
          .then((res) => res.json())
          .then((res) => this.setState({ transports: res, isloaded: true }))
          .then((res) => console.log(this.state.transports))
          .then((res) => {
            this.setState({
              duration: Math.round(this.state.transports.journeys[0].duration / 60),
            });
          });
      };

      componentDidMount() {
      
           this.getTransportationTime();
      
        }

    render (){

        return (
             <div>
                 {this.state.jobOffers.map(offer => (
                 <div key={offer.id}>                                                                      
                    <SearchResults title={offer.intitule} city={offer.lieuTravail.libelle} company={offer.entreprise !== undefined && offer.entreprise.nom} contractType={offer.typeContrat} contractNature={offer.natureContrat} longitudeDepart={this.state.longitudeDepart} latitudeDepart={this.state.latitudeDepart} longitudeArrivee={offer.lieuTravail.longitude} latitudeArrivee={offer.lieuTravail.latitude} liftDuration={this.liftDuration}/>
                    
                <p>{offer.lieuTravail.codePostal}</p>
                <p id="FaBus"><FaBus /> {this.state.duration} min </p>
                </div>
             ))
               
             }
             </div>
    
             )
    }

}


export default ShowResults