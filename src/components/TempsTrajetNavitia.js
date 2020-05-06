import React from 'react'
import ShowResults from './ShowResults'



class TempsTrajetNavitia extends React.Component {

    state = {
       // transports: [],
        //isloaded: false,
       // duration: 0,
        token: "b0b9e3a3-8f64-4941-8ba7-b62b78071d18",
        longitudeDepart: this.props.longitudeDepart,
        latitudeDepart: this.props.latitudeDepart,
        longitudeArrivee: this.props.longitudeArrivee,
        latitudeArrivee: this.props.latitudeArrivee,
        navResult:{},
        //tabDuration:[],
        tabOffersWithDuration:[],
        tempsTrajetMax: this.props.tempsTrajetMax,
      };
    

      getTabDuration = () => {
        const tabOffers = this.props.jobOffers
        //console.log(tabOffers)

        for (let i =0; i < tabOffers.length ; i++){
              //console.log(tabOffers[i].lieuTravail.longitude)
              //console.log(tabOffers[i].lieuTravail.latitude)


            const url = `https://api.navitia.io/v1/coverage/fr-idf/journeys?from=${this.props.longitudeDepart};${this.props.latitudeDepart}&to=${tabOffers[i].lieuTravail.longitude};${tabOffers[i].lieuTravail.latitude}&key=${this.state.token}`;
            ( fetch(url)
            .then((res) => res.json())
            .then((res) => this.setState({ navResult : Math.round( res.journeys[0].duration / 60)}) )
            //.then((res) => console.log(this.state.navResult))
            .then((res) =>  {
              tabOffers[i].tempsTrajet = this.state.navResult  
            })
            .then((res)=> this.setState({ tabOffersWithDuration : tabOffers }))
            )
            //console.log("test fin boucle")
        }
       // this.setState({ tabOffersWithDuration : tabOffers })
      }

 
      componentDidMount() {
              this.getTabDuration();
              
       }
      
   

    render (){
            //console.log(this.props)
            //console.log(this.props.jobOffers)
           // console.log(this.state.tabOffersWithDuration)
           //console.log(this.state.tempsTrajetMax)
        return (
             <div>
                 {this.state.tabOffersWithDuration.filter(offer => (offer.tempsTrajet < this.state.tempsTrajetMax )).map(offer => (
                 <div key={offer.id}>                                                                      
                    <ShowResults title={offer.intitule} city={offer.lieuTravail.libelle} company={offer.entreprise !== undefined && offer.entreprise.nom} contractType={offer.typeContrat} contractNature={offer.natureContrat} tempsTrajet={offer.tempsTrajet}/>
                </div>
             ))
               
             }
             </div>
    
             )
    }

}


export default TempsTrajetNavitia