import React from 'react';
import './PageRecherche.css';

class ChoixContrat extends React.Component {
   
   
    render(){
        return (
            <div className="divContractButtons">
                <div className="divContractButtons1">
                <button onClick={this.props.handleCDI} className={this.props.selectCDI ? 'ON' : 'OFF'}>
                    CDI
                </button>
                <button onClick={this.props.handleCDD} className={this.props.selectCDD ? 'ON' : 'OFF'}>
                    CDD
                </button>
                </div>
                <div className="divContractButtons2">
                <button onClick={this.props.handleINTERIM} className={this.props.selectINTERIM ? 'ON' : 'OFF'}>
                    INTERIM
                </button>
                <button onClick={this.props.handleApprenti} className={this.props.selectApprenti ? 'ON' : 'OFF'}>
                    Apprentissage
                </button>
                </div>
            </div>
        )
    }
}

export default ChoixContrat;