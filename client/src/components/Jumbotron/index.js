import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <>
    <div className="hero">
      <div className="hero-body">
        <p className= "nearMe">
        Look Up Dog Parks 
        </p>
        <p>
        Near Me
        </p>
      </div>
    </div>
    </>
  );
}

export default Jumbotron;


// <div
//   style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
//   className="jumbotron"
// >
//   {children}
// </div>