import React from "react";
import { Link } from "react-router-dom";

const Card = ({ _id, name, email, phone_number, onDelete }) => {

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{phone_number}</p>
      <div>
        <Link to={`/update/${name}/${email}/${phone_number}/${_id}`}>Update</Link>
        <button onClick={() => onDelete(_id)}>Delete</button>
      </div>
    </div>
  );
};

export default Card;
