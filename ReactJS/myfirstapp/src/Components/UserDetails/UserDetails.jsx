import React from "react";
import "./UserDetails.css";
const UserDetails = ({ name, age, gender, id, image }) => {
  return (
    <div>
      <img src={image} alt="noimage" srcSet="" width={100} height={100} />
      <div className="user-details">
        <p>
          <span className="heading">id:</span>
          <span className="value">{id}</span>
        </p>
        <p>
          <span className="heading">name:</span>
          <span className="value">{name}</span>
        </p>
        <p>
          <span className="heading">age:</span>
          <span className="value">{age}</span>
        </p>
        <p>
          <span className="heading">gender:</span>
          <span className="value">{gender}</span>
        </p>
      </div>
    </div>
  );
};

export default UserDetails;
