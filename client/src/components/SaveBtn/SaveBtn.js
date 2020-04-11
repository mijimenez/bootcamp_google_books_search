import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
// function SaveBtn(props) {
//   return (
//       <button className="save-btn btn btn-success" tabIndex="0" {...props} style={{ float: "right", marginBottom: 10 }}>Save
//         {props.children} 
//       </button>
//   );
// }

function SaveBtn(props) {
  // console.log(props);
  return (
      <button className="save-btn btn btn-success" tabIndex="0" onClick={() => props.handleSaveSubmit(props.bookData)} style={{ float: "right", marginBottom: 10 }}>
        {props.children} 
      </button>
  );
}

export default SaveBtn;
