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
                {console.log(this.props.userKeyWord)}
            </div>
        )
    }
}

export default RechercheJobDeReve;