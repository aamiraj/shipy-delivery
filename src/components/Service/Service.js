import React from "react";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { _id, name, img, description } = props.service;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl image-full h-full">
        <figure>
          <img className="object-cover" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{`${description.substr(0, 100)} ...`}</p>
          <div className="card-actions justify-end">
            <Link to={`/services/${_id}`} className="btn bg-my-primary-outline">
              Go Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
