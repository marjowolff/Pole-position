import React from 'react';
import './PageRecherche.css';

class RechercheMotsCles extends React.Component {
   
   
    render(){
        return (
            <div className="divRechercheMotsClés">
                <input 
                className="InputRechercheMotsClés"
                type="text" 
                value={this.props.userKeyWord}
                placeholder="Le job de vos rêves"
                onChange={this.props.handleChangeJobReve}
                />
            </div>
        )
    }
}

export default RechercheMotsCles;