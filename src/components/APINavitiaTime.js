import React from "react";

class NavitiaTime extends React.Component {
  state = {
    transports: [],
    isloaded: false,
    duration: 0,
    token: "b0b9e3a3-8f64-4941-8ba7-b62b78071d18",
    longitudeDepart: this.props.longitude,
    latitudeArrivee: this.props.latitude,
    longitudeArrivee: 2.2931455,
    latitudeArrivee: 48.858823,
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
    console.log('dans le did mount')
    const url = `https://api.navitia.io/v1/coverage/fr-idf/journeys?from=${this.props.longitude};${this.props.latitude}&to=${this.state.longitudeArrivee};${this.state.latitudeArrivee}&key=${this.state.token}`;
   console.log(url)
     this.getTransportationTime();
  }

  render() {
    return (
      
      <div>
        {!this.state.isloaded ? (
          <div>Loading ...</div>
        ) : (
          <h1>
           
            <p> Votre Longitude : {this.props.longitude}</p>
            <p> Votre Latitude : {this.props.latitude}</p>
            <p>
              {" "}
              Votre Adresse géolocalisée :{" "}
              {this.state.transports.journeys[0].sections[0].from.address.label}
            </p>
            <p>
              {" "}
              Votre Adresse d'arrivée :{" "}
              {
                this.state.transports.journeys[0].sections[
                  this.state.transports.journeys[0].sections.length - 1
                ].to.address.label
              }
            </p>
            <p> Temps de transport : {this.state.duration} minutes </p>
          </h1>
        )}
      </div>
    );
  }
}

export default NavitiaTime;
