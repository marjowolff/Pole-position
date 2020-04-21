import React from 'react';
import './PageRecherche.css';

class RechercheJobDeReve extends React.Component {
   
   
    render(){
        return (
            <div>
                <input 
                type="text" 
                value={this.props.userKeyWord}
                placeholder="Le job de vos rêves"
                onChange={this.props.handleChangeJobReve}
                />
            </div>
        )
    }
}

export default RechercheJobDeReve;