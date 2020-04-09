import React from "react";
import "./style.css";

function CardBody() {
  return (
    <div>
      <h2>Title</h2>
      <h3>Author</h3>
      <div>
          <img className="card-img" src="" alt="book thumbnail" />
      </div>
      <p>Lorem ipsum</p>
    </div>
  );
}

export default CardBody;
