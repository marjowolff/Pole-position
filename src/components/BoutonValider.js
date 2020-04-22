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
                        userValid: this.props.userValid,
                        selectCDI: this.props.selectCDI,
                        selectCDD :this.props.selectCDD,
                        selectINTERIM :this.props.selectINTERIM,
                        selectApprenti :this.props.selectApprenti
                    }}}
                
                    className="Path">
                <button onClick={this.props.handleValider}>
                    Valider
                </button>
                </Link>  
            </div>
            
        )
    }
}
   
export default BoutonValider;