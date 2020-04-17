import React from 'react';
import './App.css';
import APIPoleEmploi from './components/APIPoleEmploi';
import Geolocalisation from './components/Geolocalisation';

function App() {
  return (
    <div>
      <Geolocalisation />
      <APIPoleEmploi/>
    </div>
  );
}

export default App;
