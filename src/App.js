import React from 'react';
import './App.css';
import BurgerMenu from './components/BurgerMenu' 
import APIPoleEmploi from './components/APIPoleEmploi';
import Geolocalisation from './components/Geolocalisation';
import RechercheJobDeReve from './components/RechercheJobDeReve';


class App extends React.Component {
  state = {
    userKeyWord : "Le Job de vos rêves"
  }
  handleChangeJobReve = (event) => {
    const userInput = event.target.value;
    this.setState({userKeyWord : userInput})
  }
  render(){
    return (
      <div>
        <BurgerMenu/>
        <Geolocalisation/>
        <RechercheJobDeReve userKeyWord={this.state.userKeyWord} handleChangeJobReve={this.handleChangeJobReve}/>
        <APIPoleEmploi/>
      </div>
    );
  }
}

export default App;
