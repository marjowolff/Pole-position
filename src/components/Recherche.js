import React from 'react'

import RechercheJobDeReve from './RechercheJobDeReve'
import VotreAdresse from './VotreAdresse'
import VotreTempsTrajet from './VotreTempsTrajet'
import BoutonValider from './BoutonValider'



class Recherche extends React.Component {
  state = {
    userKeyWord: "",
    userValid: false
  }
  handleChangeJobReve = (event) => {
    const userInput = event.target.value;
    this.setState({ userKeyWord: userInput })
  }
  handleValider = () => {
    this.setState({ userValid: !this.state.userValid })
  }


  render (){
    return (
      <div>

        <h1>Bienvenue !</h1>
        <RechercheJobDeReve userKeyWord={this.state.userKeyWord} handleChangeJobReve={this.handleChangeJobReve}/>
        <VotreAdresse />
        <VotreTempsTrajet />
        <BoutonValider userValid={this.state.userValid} userKeyWord={this.state.userKeyWord} handleValider={this.handleValider}/>  

      </div>
    );
  }
}
  
  export default Recherche;