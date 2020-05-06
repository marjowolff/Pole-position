import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import OffresPE from './components/OffresPE';

import Recherche from './components/Recherche'
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
          <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Recherche}/>
            <Route path="/resultats" component={OffresPE}/>
          </Switch>
          </div>
      
    );

  }
}


export default App;
