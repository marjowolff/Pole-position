import React from 'react'
import SearchResults from './SearchResults'
import { FaBus } from 'react-icons/fa'


class ShowResults extends React.Component {

    state = {
        transports: [],
        isloaded: false,
        duration: 0,
        token: "b0b9e3a3-8f64-4941-8ba7-b62b78071d18",
        longitudeDepart: this.props.longitudeDepart,
        latitudeDepart: this.props.latitudeDepart,
        longitudeArrivee: this.props.longitudeArrivee,
        latitudeArrivee: this.props.latitudeArrivee,
        navResult:{},
        tabDuration:[],
        tabOffersWithDuration:[]
      };
    
      getTransportationTime = () => {
        const url = `https://api.navitia.io/v1/coverage/fr-idf/journeys?from=${this.props.longitudeDepart};${this.props.latitudeDepart}&to=${this.props.jobOffers[0].lieuTravail.longitude};${this.props.jobOffers[0].lieuTravail.latitude}&key=${this.state.token}`;
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

      getTabDuration = () => {
        const tabOffers = this.props.jobOffers
        //console.log(tabOffers)

        let tabDur = []

        for (let i =0; i < tabOffers.length ; i++){
              console.log(tabOffers[i].lieuTravail.longitude)
              console.log(tabOffers[i].lieuTravail.latitude)


            const url = `https://api.navitia.io/v1/coverage/fr-idf/journeys?from=${this.props.longitudeDepart};${this.props.latitudeDepart}&to=${tabOffers[i].lieuTravail.longitude};${tabOffers[i].lieuTravail.latitude}&key=${this.state.token}`;
            ( fetch(url)
            .then((res) => res.json())
            .then((res) => this.setState({ navResult : Math.round( res.journeys[0].duration / 60)}) )
            //.then((res) => console.log(this.state.navResult))
            .then((res) =>  {
              tabOffers[i].tempsTrajet = this.state.navResult
              //tabDur.push(this.state.navResult)
              //console.log(`tabDur : ${tabDur}`)
            })
            //.then((res) => {
              //tabOffers[i].tempsTrajet = tabDur[i]
             // console.log(tabOffers)
           // })
            )
            console.log("test fin boucle")
        }
       // console.log(`tabDur final !!!!! : ${tabDur}`)
        this.setState({ tabOffersWithDuration : tabOffers })
      }

 

      componentDidMount() {
              this.getTabDuration();
              
           //this.getTransportationTime();
       }
      
   

    render (){
            //console.log(this.props)
            //console.log("test Show Results")
            console.log(this.props.jobOffers)
           // console.log(this.state.tabOffersWithDuration)
        return (
             <div>
                 {this.state.tabOffersWithDuration.map(offer => (
                 <div key={offer.id}>                                                                      
                    <SearchResults title={offer.intitule} city={offer.lieuTravail.libelle} company={offer.entreprise !== undefined && offer.entreprise.nom} contractType={offer.typeContrat} contractNature={offer.natureContrat} longitudeDepart={this.state.longitudeDepart} latitudeDepart={this.state.latitudeDepart} longitudeArrivee={offer.lieuTravail.longitude} latitudeArrivee={offer.lieuTravail.latitude} liftDuration={this.liftDuration}/>
                    
                <p>{offer.lieuTravail.codePostal}</p>
                <p id="FaBus"><FaBus /> {offer.tempsTrajet} min </p>
                </div>
             ))
               
             }
             </div>
    
             )
    }

}


export default ShowResults