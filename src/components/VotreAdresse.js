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
        addressNavitia: '',
        autocompleteEnabled:true
    }
    

    handleClick = () => this.setState ({geoLocAsked:true})

    handleCoordDepart = (lng,lat) => {
       
        this.setState({longitude: lng,latitude:lat,new:true}) 
      }
    
    handleChangeAddress = (e) => {
        this.setState({ address: e.target.value,autocompleteEnabled:true })
       
    }

    liftGPSCoordinates = () => {
        
        if (this.state.addressNavitia.places[0].embedded_type==='stop_area') {var lat = this.state.addressNavitia.places[0].stop_area.coord.lat;
            var lng = this.state.addressNavitia.places[0].stop_area.coord.lon;
            } else if (this.state.addressNavitia.places[0].embedded_type==='address') {lat = this.state.addressNavitia.places[0].address.coord.lat;
                lng = this.state.addressNavitia.places[0].address.coord.lon;
                }
        
        this.setState({ longitude: lng, latitude: lat });
        this.props.handleLiftCoordDepart(lng,lat)
    }

    getGPSCoordinates = () => {
        const url = `https://api.navitia.io/v1/coverage/fr-idf/places?q=${this.state.address}&key=${this.state.token}`;
        fetch(url)
          .then((res) => res.json())
          .then((res) => this.setState({ addressNavitia: res, isloadedGPS: true }))
          .then((res) => this.liftGPSCoordinates())
        
      };

    suggestionSelected (value) {
        this.setState({address:value,autocompleteEnabled:false})
    }
    

    componentDidUpdate(prevProps, prevState, snapshot) {
         
        if (this.state.longitude !== prevState.longitude) {
            
            this.props.handleLiftCoordDepart(this.state.longitude,this.state.latitude)
        }
        if (this.state.address !== '' && this.state.address !== prevState.address) {
            
            this.getGPSCoordinates ()
        }
    }
    render() {
        
        return (
            
            <div className="divAddressInput">
                
                <input className="addressInput"
                    type="text" 
                    value={this.state.address}
                    placeholder="Votre adresse"
                    onChange={this.handleChangeAddress}
                />
                <ul>
                </ul>
                {this.state.isloadedGPS && this.state.autocompleteEnabled ? 
                    <div>
                        <ul>
                            {this.state.addressNavitia.places.slice(0,4).map(place => <li onClick={()=> this.suggestionSelected(place.name)}> {place.name}</li>)}
                        </ul>
                    </div> : <div> </div>}
              
                <button className = "GeolocButton" onClick={this.handleClick}><MdMyLocation /> Me géolocaliser</button>
                
                {this.state.geoLocAsked &&  <Geolocalisation long={this.state.longitude} lat={this.state.latitude} handleCoordDepart={this.handleCoordDepart} />}
            </div>
        );
    }
}

export default VotreAdresse;

