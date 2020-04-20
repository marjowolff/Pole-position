import React from 'react';
import './App.css';
import BurgerMenu from './components/BurgerMenu' 
import APIPoleEmploi from './components/APIPoleEmploi';
import Geolocalisation from './components/Geolocalisation';
import SearchResults from './components/SearchResults'

function App() {
  return (
    <div>
      <BurgerMenu />
      <Geolocalisation />
      <SearchResults />
      <APIPoleEmploi />
      
    </div>
  );
}

export default App;
