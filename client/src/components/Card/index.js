import React from "react";
import "./style.css";

function Card() {
  return (
    <div>
      <h2>Title</h2>
      <h3>Author</h3>
      <div>
          <img className="card-img" src="" alt="user thumbnail" />
      </div>
      <p>Lorem ipsum</p>
    </div>
  );
}

export default Card;
