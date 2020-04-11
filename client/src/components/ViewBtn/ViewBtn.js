import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ViewBtn(props) {
  return (
    <a className="view-btn btn btn-secondary" href={props.link} target="_blank" tabIndex="0" {...props} style={{ float: "right", marginBottom: 10 }}> View
    </a>
  );
}

export default ViewBtn;
