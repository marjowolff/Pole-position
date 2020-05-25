import React, { Component } from 'react';
import Faq from "react-faq-component";
import './Faq.css'


const data = {
  title: "FAQ (How it works)",
  rows: [
      {
          title: "Quelles sont les offres d'emplois recensées dans l'application ?",
          content: `Il s'agit des offres d'emplois présentées sur le site de Pôle Emploi. Nous utilisons pour cela l'API Pôle Emploi disponible sur https://www.emploi-store-dev.fr/portail-developpeur/detailapicatalogue/-offres-d-emploi-v2?id=5ba49d55243a5f9d2c5064a2`,
      },
      {
          title: "Sur quelle(s) région(s) géographiques l'application marche-t-elle ?",
          content:
              "L'application n'est aujourd'hui déployée que sur la Région d'Île-De-France, et calcule des temps de transports sur le réseau RATP SNCF. L'API intérrogée est celle de Navitia : https://www.navitia.io/",
      },
      {
          title: "Le temps de transport est-il calculé en temps réel ?",
          content: `Nous avons pris le parti de calculer des temps de transport en heure de pointe. Nous calculons donc le temps de trajet le lundi suivant à 18h. `,
      },
      {
          title: "Qui sommes-nous ?",
          content: "Nous sommes 3 étudiants de la Wild Code School et cette application a été réalisée dans le cadre d'un de nos projets pédagogiques. Nous sommes Céline Cottier (https://www.linkedin.com/in/c%C3%A9line-cottier-0847118a/), Florent Voinot (https://www.linkedin.com/in/florentvoinot/) et Marjolaine Baratte (https://www.linkedin.com/in/marjolainebaratte/)",
      },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "#6497b8",
  rowTitleColor: "#6497b8",
  // rowContentColor: 'grey',
  // arrowColor: "red",
  
};

class FAQ extends Component {
  render() {
    return <div>
      <h1 className="FaqTitle">F.A.Q</h1>
     
      <div className="container">
        <img src="https://zupimages.net/up/20/20/33vl.png" atl="Logo faq" className="FaqImg" />
        <div className="questions">
        <Faq data={data} styles={styles}/>
        </div>
      </div>

    </div>
  }
}






export default FAQ