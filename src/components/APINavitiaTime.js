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
    let currentDate = new Date()
    let days = currentDate.getDay() - 1 + 7 
    currentDate.setDate(currentDate.getDate() + days)
    currentDate.setHours(08)
    currentDate.toISOString
    const url = `https://api.navitia.io/v1/coverage/fr-idf/journeys?from=${this.props.longitudeDepart};${this.props.latitudeDepart}&to=${this.props.longitudeArrivee};${this.props.latitudeArrivee}&datetime=${currentDate}&key=${this.state.token}`;
    console.log(currentDate,url)
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


  render() {
    return (
      
      <div>
        {!this.state.isloaded ? (
          <div><GeoLoad /></div>
        ) : (
          <p id="FaBus"><FaBus /> {this.state.duration} min </p>
        )}
      </div>
    );
  }
}

export default NavitiaTime;
