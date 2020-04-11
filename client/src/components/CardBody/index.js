import React from "react";
import "./style.css";


function CardBody(props) {
  // console.log(props);
  return (
    <div key={props.id}>
          <h2>{props.title}</h2>

          { props.authors ? (<h3>{props.authors}</h3>) : ""}

          { props.image ? (<div><img className="card-img" src={props.image} alt="book thumbnail" /></div>) : "" }

          { props.description ? (<p>{props.description}</p>) : ""}

          <a className="view-btn btn btn-secondary" href={props.link} target="_blank" tabIndex="0" {...props} style={{ float: "right", marginBottom: 10 }}> View
          </a>

          <button className="save-btn btn btn-success" tabIndex="0" {...props} style={{ float: "right", marginBottom: 10 }}>Save
            {props.children} 
          </button>

          <button className="delete-btn btn btn-danger" tabIndex="0" {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-danger">Delete
            {props.children}
          </button>
      </div>
  );
}

export default CardBody;
