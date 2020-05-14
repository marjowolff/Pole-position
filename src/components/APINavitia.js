import React from "react";
import GeoLoad from "./LoaderLogo/GeoLoad"

class NavitiaAdresse extends React.Component {
  state = {
    transports: [],
    isloaded: false,
    duration: 0,
    token: "b0b9e3a3-8f64-4941-8ba7-b62b78071d18",
    longitude: this.props.longitude,
    latitude: this.props.latitude,
    longitudeArrivee: 2.2922926,
    latitudeArrivee: 48.8583736,
  };

  getTransportationTime = () => {
    const url = `https://api.navitia.io/v1/coverage/fr-idf/journeys?from=${this.props.longitude};${this.props.latitude}&to=${this.state.longitudeArrivee};${this.state.latitudeArrivee}&key=${this.state.token}`;
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
         
            <p className="AdressText">
              {" "}
              Votre Adresse géolocalisée :{" "}
              {this.state.transports.journeys[0].sections[0].from.address.label}
            </p>
            
        )}
      </div>
    );
  }
}

export default NavitiaAdresse;
