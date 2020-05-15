import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import OffresPE from './components/OffresPE';
import Faq from './components/Faq'

import Recherche from './components/Recherche'
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
          <div className="background">
          <Navigation />
          <Switch>
            <Route exact path="/" component={Recherche}/>
            <Route path="/resultats" component={OffresPE}/>
            <Route path="/faq" component={Faq}/>
          </Switch>
          </div>
      
    );

  }
}


export default App;
