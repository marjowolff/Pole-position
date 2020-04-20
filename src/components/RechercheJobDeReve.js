import React from 'react';
import './PageRecherche.css';

class RechercheJobDeReve extends React.Component {
   
   
    render(){
        return (
            <div>
                <input 
                type="text" 
                value={this.props.userKeyWord}
                onChange={this.props.handleChangeJobReve}
                />
            </div>
        )
    }
}

export default RechercheJobDeReve;