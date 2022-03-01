import React from "react";
import '../style.css';

const Box = (props) => {
  return (
    <>
      <div className="card-box">
        <div className="image-section">
          <img src={props.item} alt="shoes" />
        </div>
        <div className="text-section" style={{marginLeft:"4rem"}}>
          <h1 style={{fontSize:"3rem",textTransform:"Capitalize"}}>{props.head}</h1>
          <p style={{width: '26rem',fontSize: '1.5rem',color:"grey"}}>{props.para}</p>
        </div>
      </div>
    </>
  );
};

const Primary = () => {
  return (
    <>
      <div id="primary-section">
        <div className="primary-content">
          <div className="item_card_1">
            <Box
              item="images/shoes.png"
              head="Join the Movement"
              para="Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor"
            />
            <Box
              item="images/stopwatch.png"
              head="Transform Lives"
              para="Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor"
            />
            <Box
              item="images/trainers.png"
              head="Train For A Race"
              para="Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor"
            />
          </div>
          <div className="item_card_2" style={{marginLeft:"12rem"}}>
            <img className="girl" src="images/4.png" alt="running girl" />
          </div>
          .
        </div>
      </div>
    </>
  );
};

export default Primary;
