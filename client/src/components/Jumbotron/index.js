import React from "react";

function Jumbotron({ children }) {
  return (
    // <div
    //   style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
    //   className="jumbotron"
    // >
    //   {children}
    // </div>
    <div className="hero-body">
    <p className="title">
      {children}
    </p>
    <p className="subtitle">
      Primary subtitle
    </p>
  </div>
  );
}

export default Jumbotron;
