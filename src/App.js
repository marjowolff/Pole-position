import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import Resultats from './components/Resultats';
import Geolocalisation from './components/Geolocalisation';
import RechercheJobDeReve from './components/RechercheJobDeReve';
import BoutonValider from './components/BoutonValider';
import BackButton from './components/BackButton'
import Recherche from './components/Recherche'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  state = {
    userKeyWord: "Développeur",
    userValid: true
  }
  handleChangeJobReve = (event) => {
    const userInput = event.target.value;
    this.setState({ userKeyWord: userInput })
  }
  handleValider = () => {
    this.setState({ userValid: !this.state.userValid })
  }
  render() {
    return (
      <Router forceRefresh={true}>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Recherche} />
            <Route path="/resultats"><Resultats userKeyWord={this.state.userKeyWord} userValid={this.state.userValid} /></Route>
          </Switch>
          {/* <RechercheJobDeReve userKeyWord={this.state.userKeyWord} handleChangeJobReve={this.handleChangeJobReve} /> */}
          {/* <BoutonValider userValid={this.state.userValid} handleValider={this.handleValider} /> */}
          {/*  */}
        </div>
      </Router>
    );

  }
}


export default App;
