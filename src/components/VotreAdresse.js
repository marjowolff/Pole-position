import React, { Component } from 'react';
import { MdMyLocation } from 'react-icons/md'
import Geolocalisation from './Geolocalisation';

class VotreAdresse extends Component {
    
    state = {
        geoLocAsked:false
    }
    

    handleClick = () => this.setState ({geoLocAsked:true})

    render() {
        console.log(this.state)
        return (
            
            <div>
                 <input className="adressInput"
                type="text" 
                // value={this.props.userKeyWord}
                placeholder="Votre adresse"
                // onChange={this.props.handleChangeJobReve}
                />
                <button className = "GeolocButton" onClick={this.handleClick}><MdMyLocation /> Me géolocaliser</button>
                
                {this.state.geoLocAsked &&  <Geolocalisation />}
            </div>
        );
    }
}

export default VotreAdresse;

