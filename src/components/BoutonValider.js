import React from 'react';
import './PageRecherche.css';
class BoutonValider extends React.Component {


    render() {
        return (
            <div>
                <button onClick={this.props.handleValider}>
                    Valider
                 
               </button>
            </div>
        )
    }
}
   /*Donc Céline tu peux mettre <Resultats userKeyWord={this.state.userKeyWord} userValid={this.state.userValid} /> sur ton bouton Validez*/
export default BoutonValider;