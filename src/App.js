import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import APIPoleEmploi from './components/APIPoleEmploi';
import Geolocalisation from './components/Geolocalisation';
import MeLocaliser from './components/MeLocaliser'
import Aide from './components/Aide';
import Contact from './components/Contact';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router forceRefresh={true}>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Accueil} />
          <Route path="/geolocalisation" component={Geolocalisation} />
          <Route path="/apiPoleEmploi" component={APIPoleEmploi} />
          <Route path="/meLocaliser" component={MeLocaliser} />
          <Route path="/aide" component={Aide} />
          <Route path="/contact" component={Contact} />
      </Switch>
      </div>
    </Router>
  );
}

const Accueil = () => (
  <div>
    <h1>Home Page</h1>
    <Link to="/geolocalisation" className="Path">
      <li>Page Geolocalisation</li>
    </Link>
    <Link to="/apiPoleEmploi" className="Path">
      <li>Page API Pole Emploi</li>
    </Link>
  </div>
)
export default App;
