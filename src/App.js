import React from 'react';
import './App.css';
import BurgerMenu from './components/BurgerMenu' 
import APIPoleEmploi from './components/APIPoleEmploi';
import Geolocalisation from './components/Geolocalisation';
import RechercheJobDeReve from './components/RechercheJobDeReve';
import BoutonValider from './components/BoutonValider';


class App extends React.Component {
  state = {
    userKeyWord : "",
    userValid : false
  }
  handleChangeJobReve = (event) => {
    const userInput = event.target.value;
    this.setState({userKeyWord : userInput})
  }
  handleValider = () =>{
    this.setState({userValid : !this.state.userValid})
  }
  render(){
    return (
      <div>
        <BurgerMenu/>
        <Geolocalisation/>
        <RechercheJobDeReve userKeyWord={this.state.userKeyWord} handleChangeJobReve={this.handleChangeJobReve}/>
        <BoutonValider userValid={this.state.userValid} handleValider={this.handleValider}/>
        <APIPoleEmploi userKeyWord={this.state.userKeyWord} userValid={this.state.userValid}/>
      </div>
    );
  }
}

export default App;
