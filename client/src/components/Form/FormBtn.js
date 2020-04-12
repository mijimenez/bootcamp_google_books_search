import React from "react";
import "./style.css";

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn search-btn btn-success">
      {props.children}
    </button>
  );
}
