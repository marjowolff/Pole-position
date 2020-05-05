import React from 'react';
import './PageRecherche.css';
import { Link } from 'react-router-dom';


class BoutonValider extends React.Component {



    render() {
        return (
            <div className ="divButtonValider">
                <Link to={{
                    pathname: "/resultats",
                    data:{
                        userKeyWord : this.props.userKeyWord,
                        selectCDI: this.props.selectCDI,
                        selectCDD :this.props.selectCDD,
                        selectINTERIM :this.props.selectINTERIM,
                        selectApprenti :this.props.selectApprenti,
                        longitudeDepart :this.props.longitudeDepart,
                        latitudeDepart :this.props.latitudeDepart,
                    }}}
                
                    className="Path">
                <button className="ButtonValider">
                    Valider
                </button>
                </Link>  
            </div>
            
        )
    }
}
   
export default BoutonValider;