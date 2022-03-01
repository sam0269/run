import React from 'react';
import '../style.css';


const Card = (props) =>{
    return(
        <>
            <div className="box" style={{backgroundColor:props.color}}>
                <div className="item">
                    <p>{props.para}</p>
                    <h3>{props.head}</h3>
                    <a href="#">MORE</a>
                </div>
            </div>
        </>
    )
}


const Banner = () => {
  return (
      <>
        <div className="banner-article">
          <div id="banner-section">
            <div className="banner-content">
                <Card para = "OUR MISSION" head = "Our Club Promote and Friendship through Running" 
                    color = "#7E543A"
                />
                <Card para = "TRAINING" head = "Our Trainer will Keep You Challenged And Engaged" 
                    color = "#52AABC"
                />
                <Card para = "MEMBERSHIP" head = "$200/year (includes weekly workout and training shirt)" 
                    color = "#AB8745"
                />
            </div>
          </div>
        </div>
      </>
  )
}

export default Banner 