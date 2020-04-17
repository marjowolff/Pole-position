import React from 'react';
import './App.css';
import BurgerMenu from './components/BurgerMenu' 
import APIPoleEmploi from './components/APIPoleEmploi';
import Geolocalisation from './components/Geolocalisation';

function App() {
  return (
    <div>
      <BurgerMenu />
      <Geolocalisation />
      <APIPoleEmploi/>
    </div>
  );
}

export default App;
