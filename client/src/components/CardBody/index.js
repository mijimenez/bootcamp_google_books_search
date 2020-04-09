import React from "react";
import "./style.css";

function CardBody(props) {
  // console.log(props);
  return (
    <div key={props.id}>
          <h2>{props.title}</h2>
          <h2>{props.author}</h2>
            { props.image ? (<div><img className="card-img" src={props.image} alt="book thumbnail" /></div>) : "" }
          <a>{props.link}</a>
      </div>
  );
}

export default CardBody;
