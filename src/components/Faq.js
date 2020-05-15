import React, { Component } from 'react'
import './Faq.css'
import faqImg from './Images/faqImg'

class Faq extends Component {
  render() {
    return <div className='ImgQuest'>
      <header>
        <h1 className="FaqTitle">F.A.Q</h1>
      </header>
<div> 
  <img src={faqImg} atl="Logo faq" className="FaqImg"/>
</div>

    </div>
  }
}






export default Faq