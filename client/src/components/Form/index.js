import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group columns is-mobile">
      <input className="form-control column" {...props} />
      <input className="input column" type="text" placeholder="Choose Your Location"></input>
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      {/* <textarea className="form-control" rows="20" {...props} /> */}
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
