import React from "react";


const buttons = [
  { text: "Smile", className: "smile" },
  { text: "Urban", className: "urban" },
  { text: "natural", className: "natural" },
  { text: "WAVE", className: "wave" },
  { text: "HAPPY", className: "happy" },
  { text: "Alisa", className: "alisa" },
];

const Buttons = () => {
  return (
    <>
    <div className="buttons-big">
      <div className="container">
        <h1>Companies we Worked <br /> With in SInce 2015</h1>
        <div className="button-container">

          <div className="buttons">
            {buttons.map((btn, index) => (
              <button key={index} className={`btn ${btn.className}`}>{btn.text}</button>
            ))}
          </div>

        </div>
      </div>
      <div className="our" >
        <div className="bg">
        <div className="our-left">
          <p>Love our Our Tool?</p>
          <h1>Fell Free to Join our <br /> 15 Days Free Trial</h1>
          <button>Download Template</button>
        </div>
        <div className="our-right">
          <img src="./public/Frame.png" alt="" />
        </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Buttons;
