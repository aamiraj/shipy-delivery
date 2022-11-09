import React from "react";
import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";

const Featured = (props) => {
  const { _id, name, img, price, rating } = props.service;
  return (
    <div>
      <div className="w-11/12 mx-auto card lg:card-side bg-base-100 shadow-xl">
        <figure className="w-full md:w-1/4">
          <img className="object-cover h-full" src={img} alt="Album" />
        </figure>
        <div className="w-full md:w-3/4 card-body">
          <h2 className="card-title">
            {name} <div className="badge badge-secondary">OFFER</div>
          </h2>
          <p>
            Price: <span className="line-through">{price}</span>
          </p>
          <p className="color-my-primary">
            Offer Price: <span>{parseInt(price) - parseInt(price) * 0.4}</span>
            tk
          </p>
          <span>
            Rating: {rating}/5 <CiStar className="inline-block"></CiStar>
          </span>
          <div className="card-actions justify-end">
            <Link to={`/services/${_id}`} className="btn bg-my-primary-outline">
              Deal Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
