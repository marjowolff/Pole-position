import React from 'react'
import RechercheJobDeReve from './RechercheJobDeReve'
import BoutonValider from './BoutonValider'


class Recherche extends React.Component {
  render (){
    return (
      <div>
        <h1>Hello</h1>
        <RechercheJobDeReve userKeyWord={this.props.userKeyWord} handleChangeJobReve={this.props.handleChangeJobReve}/>
        <BoutonValider userValid={this.props.userValid} handleValider={this.props.handleValider}/>  
      </div>
    );
  }
}
  
  export default Recherche;