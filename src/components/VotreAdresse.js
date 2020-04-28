import React, { Component } from 'react';
import { MdMyLocation } from 'react-icons/md'
import Geolocalisation from './Geolocalisation';
import './PageRecherche.css'

class VotreAdresse extends Component {
    
    state = {
        geoLocAsked:false
    }
    

    handleClick = () => this.setState ({geoLocAsked:true})

    render() {
        console.log(this.state)
        return (
            
            <div className="divAddressInput">
                 <input className="addressInput"
                type="text" 
                // value={this.props.userKeyWord}
                placeholder="Votre adresse"
                // onChange={this.props.handleChangeJobReve}
                />
                <button className = "GeolocButton" onClick={this.handleClick}><MdMyLocation /> Me géolocaliser</button>
                <p>Récup coord GPS {this.props.long} {this.props.lat}</p>
                
                {this.state.geoLocAsked &&  <Geolocalisation />}
            </div>
        );
    }
}

export default VotreAdresse;

