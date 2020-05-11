import React, { Component } from 'react';
import { MdMyLocation } from 'react-icons/md'
import Geolocalisation from './Geolocalisation';
import './PageRecherche.css'

class VotreAdresse extends Component {
    
    state = {
        geoLocAsked:false,
        latitude: this.props.lat,
        longitude: this.props.long,
        new:false,
        address:'',
        isloadedGPS:false,
        token: "b0b9e3a3-8f64-4941-8ba7-b62b78071d18",
        addressNavitia: ''
    }
    

    handleClick = () => this.setState ({geoLocAsked:true})

    handleCoordDepart = (lng,lat) => {
        // console.log('lng est ',lng)
        this.setState({longitude: lng,latitude:lat,new:true}) 
      }
    
    handleChangeAddress = (e) => {
        this.setState({ address: e.target.value })
    }

    liftGPSCoordinates = () => {
        console.log('Lift',this.state.addressNavitia.places)
        if (this.state.addressNavitia.places[0].embedded_type==='stop_area') {var lat = this.state.addressNavitia.places[0].stop_area.coord.lat;
            var lng = this.state.addressNavitia.places[0].stop_area.coord.lon;
            } else if (this.state.addressNavitia.places[0].embedded_type==='address') {var lat = this.state.addressNavitia.places[0].address.coord.lat;
                var lng = this.state.addressNavitia.places[0].address.coord.lon;
                }
        console.log(lat, lng);
        this.setState({ longitude: lng, latitude: lat });
        this.props.handleLiftCoordDepart(lng,lat)
    }

    getGPSCoordinates = () => {
        //https://api.navitia.io/v1/coverage/fr-idf/places?q=deffand&key=b0b9e3a3-8f64-4941-8ba7-b62b78071d18
        const url = `https://api.navitia.io/v1/coverage/fr-idf/places?q=${this.state.address}&key=${this.state.token}`;
        fetch(url)
          .then((res) => res.json())
          .then((res) => this.setState({ addressNavitia: res, isloadedGPS: true }))
          .then((res) => console.log('getGPSCoordintaes',this.state.addressNavitia))
          .then((res) => this.liftGPSCoordinates())
        
        //   .then((res) => {
        //     this.setState({
        //       duration: Math.round(this.state.transports.journeys[0].duration / 60),
        //     });
        //   });
      };

    

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('dans le componentdidupdate')
        console.log(this.state.longitude)
        console.log(prevState.longitude)
        if (this.state.longitude !== prevState.longitude) {
            console.log('different',prevState.longitude,this.state.longitude)
            this.props.handleLiftCoordDepart(this.state.longitude,this.state.latitude)
        }
        if (this.state.address !== '' && this.state.address !== prevState.address) {
            console.log('adresse saisie')
            this.getGPSCoordinates ()
        }
        // if (this.state.longitude !== prevState.latitude) {
        //     console.log('dans le componentdidupdate state changed')
        //     ;
        //   }
        //this.props.handleLiftCoordDepart(this.state.longitude,this.state.latitude)
    
    }
    render() {
        console.log(this.state)
        return (
            
            <div className="divAddressInput">
                
                <input className="addressInput"
                    type="text" 
                    value={this.state.address}
                    placeholder="Votre adresse"
                    onChange={this.handleChangeAddress}
                />
                {this.state.isloadedGPS && this.state.addressNavitia.places[0].embedded_type=='stop_area' ? 
                    <div>
                        <p>Votre adresse actuelle {this.state.addressNavitia.places[0].name}</p>
                        <p>Vos coordonnées GPS Latitude : {this.state.addressNavitia.places[0].stop_area.coord.lat} Longitude : {this.state.addressNavitia.places[0].stop_area.coord.lon}</p>
                    </div> : <div>En attente chargement adresse</div>}
                {this.state.isloadedGPS && this.state.addressNavitia.places[0].embedded_type=='address' ? 
                    <div>
                        <p>Votre adresse actuelle {this.state.addressNavitia.places[0].name}</p>
                        <p>Vos coordonnées GPS Latitude : {this.state.addressNavitia.places[0].address.coord.lat} Longitude : {this.state.addressNavitia.places[0].address.coord.lon} </p>
                    </div> : <div>En attente chargement adresse</div>}
                <button className = "GeolocButton" onClick={this.handleClick}><MdMyLocation /> Me géolocaliser</button>
                
                {this.state.geoLocAsked &&  <Geolocalisation long={this.state.longitude} lat={this.state.latitude} handleCoordDepart={this.handleCoordDepart} />}
            </div>
        );
    }
}

export default VotreAdresse;

