import React, { Component } from 'react';
import { MdMyLocation } from 'react-icons/md'
import Geolocalisation from './Geolocalisation';
import './PageRecherche.css'

class VotreAdresse extends Component {
    
    state = {
        geoLocAsked:false,
        latitude: this.props.lat,
        longitude: this.props.long,
        new:false
    }
    

    handleClick = () => this.setState ({geoLocAsked:true})

    handleCoordDepart = (lng,lat) => {
        // console.log('lng est ',lng)
        this.setState({longitude: lng,latitude:lat,new:true}) 
      }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('dans le componentdidupdate')
        console.log(this.state.longitude)
        console.log(prevState.longitude)
        if (this.state.longitude !== prevState.longitude) {
            console.log('different',prevState.longitude,this.state.longitude)
            this.props.handleLiftCoordDepart(this.state.longitude,this.state.latitude)
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
                // value={this.props.userKeyWord}
                placeholder="Votre adresse"
                // onChange={this.props.handleChangeJobReve}
                />
                <div>Votre adresse actuelle {this.state.longitude} {this.state.latitude}</div>
                <button className = "GeolocButton" onClick={this.handleClick}><MdMyLocation /> Me géolocaliser</button>
                
                {this.state.geoLocAsked &&  <Geolocalisation long={this.state.longitude} lat={this.state.latitude} handleCoordDepart={this.handleCoordDepart} />}
            </div>
        );
    }
}

export default VotreAdresse;

