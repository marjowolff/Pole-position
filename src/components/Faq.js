import React, { Component } from 'react';
import Faq from "react-faq-component";
import './Faq.css'


const data = {
  title: "FAQ (How it works)",
  rows: [
      {
          title: "Lorem ipsum dolor sit amet,",
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat, 
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus. 
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae. 
            Fusce sed commodo purus, at tempus turpis.`,
      },
      {
          title: "Nunc maximus, magna at ultricies elementum",
          content:
              "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
      },
      {
          title: "Curabitur laoreet, mauris vel blandit fringilla",
          content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem. 
          Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam. 
          Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat. 
          Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },
      {
          title: "What is the package version",
          content: "v1.0.0",
      },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "#6497b8",
  rowTitleColor: "#6497b8",
  // rowContentColor: 'grey',
  // arrowColor: "red",
  
};

class FAQ extends Component {
  render() {
    return <div>
      <h1 className="FaqTitle">F.A.Q</h1>
     
      <div className="container">
        <img src="https://zupimages.net/up/20/20/33vl.png" atl="Logo faq" className="FaqImg" />
        <div className="questions">
        <Faq data={data} styles={styles}/>
        </div>
      </div>

    </div>
  }
}






export default FAQ