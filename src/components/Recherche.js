import React from 'react'

import RechercheJobDeReve from './RechercheJobDeReve'
import VotreAdresse from './VotreAdresse'
import VotreTempsTrajet from './VotreTempsTrajet'
import BoutonValider from './BoutonValider'
import ChoixContrat from './ChoixContrat'


class Recherche extends React.Component {
  state = {
    userKeyWord: "",
    userValid: false,
    selectCDI:false,
    selectCDD:false,
    selectINTERIM:false,
    selectApprenti:false
  }
  handleChangeJobReve = (event) => {
    const userInput = event.target.value;
    this.setState({ userKeyWord: userInput })
  }
  handleValider = () => {
    this.setState({ userValid: !this.state.userValid })
  }
  handleCDI = () => {
    this.setState({selectCDI : !this.state.selectCDI})
  }
  handleCDD = () => {
    this.setState({selectCDD : !this.state.selectCDD}) 
  }
  handleINTERIM = () => {
    this.setState({selectINTERIM: !this.state.selectINTERIM}) 
  }
  handleApprenti = () => {
    this.setState({selectApprenti: !this.state.selectApprenti}) 
  }

  render (){
    return (
      
      <div>

        <h1>Bienvenue !</h1>
        <RechercheJobDeReve userKeyWord={this.state.userKeyWord} handleChangeJobReve={this.handleChangeJobReve}/>
        <VotreAdresse />
        <VotreTempsTrajet />
        <ChoixContrat selectCDI={this.state.selectCDI} handleCDI={this.handleCDI} selectCDD={this.state.selectCDD} handleCDD={this.handleCDD} selectINTERIM={this.state.selectINTERIM} handleINTERIM={this.handleINTERIM} selectApprenti={this.state.selectApprenti} handleApprenti={this.handleApprenti}/>
        <BoutonValider userValid={this.state.userValid} userKeyWord={this.state.userKeyWord} handleValider={this.handleValider} selectCDI={this.state.selectCDI} selectCDD={this.state.selectCDD} selectINTERIM={this.state.selectINTERIM} selectApprenti={this.state.selectApprenti}/>  

      </div>
    );
  }
}
  
  export default Recherche;