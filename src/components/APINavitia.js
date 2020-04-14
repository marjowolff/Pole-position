import React from 'react'
import axios from 'axios'

// axios.get('https://api.navitia.io/v1/coverage/sandbox/stop_areas/stop_area:RAT:SA:BASTI/lines/line:RAT:M5/departures?count=4&depth=2')
// .then(res => console.log(res))

class Navitia extends React.Component {

    state = {
        transports : []
    }

    getTransportationTime = () => {
        fetch('https://api.navitia.io/v1/coverage/fr-idf/journeys?from=2.3003136;48.7686144&to=2.2922926;48.8583736&key=b0b9e3a3-8f64-4941-8ba7-b62b78071d18')
            .then (res => res.json())
            .then (res => this.setState({transports : res}))
            .then (res => console.log(this.state.transports.links[0].href))
    }

    componentDidMount(){
        this.getTransportationTime()
        
    }

    render () {
        return <div>
            <h1>
                Test Navitia
                <p>{this.state.transports.links.map(link => <p>link.href</p> )}</p>
            </h1>
    
        </div>
    }
}

export default Navitia