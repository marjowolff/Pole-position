import React from "react";
import Navitia from "./APINavitia.js";


const erreur = (error) => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      console.log("L'utilisateur a refusé la demande");
      break;
    case error.POSITION_UNAVAILABLE:
      console.log("Position indéterminée");
      break;
    case error.TIMEOUT:
      console.log("Réponse trop lente");
      break;
  }
};

class Geolocalisation extends React.Component {
  state = {
    longitudeDepart: 2.0,
    latitude: 48.8106958,
    longitude: 2.2922926,
    latitudeArrivee: 48.8583736,
    loaded: false,
  };

  getGeolocalisation = () => {
    const callback = (position) => {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      console.log(lat, lng);
      this.setState({ longitude: lng, latitude: lat, loaded: true });
      this.props.handleCoordDepart(lng,lat);
      
      
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(callback, erreur);
    }
  };

  componentDidMount() {
    this.getGeolocalisation();
    
    // handleCoordDepart()
  }

  render() {
    return (
      <div>
        {!this.state.loaded ? (
          <div>Loading ...</div>
        ) : (
          <div>
            <Navitia
              longitude={this.state.longitude}
              latitude={this.state.latitude}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Geolocalisation;
