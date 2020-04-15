import React from 'react'
import Navitia from './APINavitia.js'



const erreur = ( error ) => {
    switch( error.code ) {
        case error.PERMISSION_DENIED:
            console.log( 'L\'utilisateur a refusé la demande' );
            break;     
        case error.POSITION_UNAVAILABLE:
            console.log( 'Position indéterminée' );
            break;
        case error.TIMEOUT:
            console.log( 'Réponse trop lente' );
            break;
    }
    // // Function alternative
    // alternative();
};

class Geolocalisation extends React.Component {
    state = {
        longitude:2.3334722,
        latitude:48.8106958,
        longitudeArrivee:2.2922926,
        latitudeArrivee:48.8583736
    }


    getGeolocalisation = () => {
        function callback( position ) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            console.log( lat, lng );
            // Do stuff
        }
        if ( navigator.geolocation ) {
            // On demande d'envoyer la position courante à la fonction callback
            navigator.geolocation.getCurrentPosition( callback, erreur );
        } 
    }

    componentDidMount(){
        
        this.getGeolocalisation()
    }

    render () {
        return (<div>
            <Navitia longitude = {this.state.longitude} latitude = {this.state.latitude}/>
            Geolocalisation OK</div>)
    }
}

export default Geolocalisation