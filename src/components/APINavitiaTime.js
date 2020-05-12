import React from "react";
import { FaBus } from 'react-icons/fa'
import GeoLoad from "./LoaderLogo/GeoLoad"

class NavitiaTime extends React.Component {
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
  //   console.log('dans le did mount')
  //   const url = `https://api.navitia.io/v1/coverage/fr-idf/journeys?from=${this.props.longitudeDepart};${this.props.latitudeDepart}&to=${this.props.longitudeArrivee};${this.props.latitudeArrivee}&key=${this.state.token}`;
  //  console.log(url)
     this.getTransportationTime();

      

  }
  //componentDidUpdate(){
    //if (this.state.isloaded){
      //console.log(`durée dans navitia time ${this.state.duration}`)
   //this.props.liftDuration()}
  //}

  render() {
    return (
      
      <div>
        {!this.state.isloaded ? (
          <div><GeoLoad /></div>
        ) : (
          // <h1>
           
          //   <p> Votre Longitude Départ : {this.props.longitudeDepart}</p>
          //   <p> Votre Latitude Départ : {this.props.latitudeDepart}</p>
          //   <p>
          //     {" "}
          //     Votre Adresse géolocalisée :{" "}
          //     {this.state.transports.journeys[0].sections[0].from.address.label}
          //   </p>
          //   <p> Votre Longitude Arrivée : {this.props.longitudeArrivee}</p>
          //   <p> Votre Latitude Arrivée : {this.props.latitudeArrivee}</p>
          //   <p>
          //     {" "}
          //     Votre Adresse d'arrivée :{" "}
          //     {
          //       this.state.transports.journeys[0].sections[
          //         this.state.transports.journeys[0].sections.length - 1
          //       ].to.address.label
          //     }
          //   </p>
          // </h1>
          <p id="FaBus"><FaBus /> {this.state.duration} min </p>
          
        )}
      </div>
    );
  }
}

export default NavitiaTime;
