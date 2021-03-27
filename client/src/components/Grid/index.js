import React from "react";

// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a Bulma container without worrying about class names
export function Container({ fluid, children }) {
  return <div className={`container${fluid ? " is-fluid": ""}`}>{children}</div>;
}

// This Column component lets us use a Bulma Column Container without having to think about class names
export function Columns({ fluid, children }) {
  return <div className={`columns${fluid ? " is-fluid": ""}`}>{children}</div>;
}

// This Col component lets us size bulma columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(" ")
        .map(size => "column " + size)
        .join(" ")}
    >
      {children}
    </div>
  );
}
