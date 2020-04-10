import React from "react";
import "./style.css";

function CardBody(props) {
  // console.log(props);
  return (
    <div key={props.id}>
          <h2>{props.title}</h2>

          { props.authors ? (<h3>{props.authors}</h3>) : ""}

          { props.image ? (<div><img className="card-img" src={props.image} alt="book thumbnail" /></div>) : "" }

          <a href={props.link} target="_blank">View On Google Books</a>

          { props.description ? (<p>{props.description}</p>) : ""}
      </div>
  );
}

export default CardBody;
