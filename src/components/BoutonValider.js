import React from 'react';
import './PageRecherche.css';
import { Link } from 'react-router-dom';


class BoutonValider extends React.Component {



    render() {
        return (
            <div>
                <Link to={{
                    pathname: "/resultats",
                    data:{
                        userKeyWord : this.props.userKeyWord,
                        userValid: this.props.userValid
                    }}}
                
                    className="Path">
                <button onClick={this.props.handleValider}>
                    Valider
                </button>
                </Link>
                
                
                
                
                
            </div>
            //{console.log(this.props)}
        )
    }
}
   
export default BoutonValider;