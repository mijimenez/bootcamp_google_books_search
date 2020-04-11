import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <button className="delete-btn btn btn-danger" tabIndex="0" {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-danger">Delete
      {props.children}
    </button>
  );
}

export default DeleteBtn;
