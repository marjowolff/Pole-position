import React from 'react';
import './PageRecherche.css';

class BoutonValider extends React.Component {
   
   
    render(){
        return (
            <div>
               <button onClick={this.props.handleValider}>
                    Valider
               </button>
            </div>
        )
    }
}

export default BoutonValider;