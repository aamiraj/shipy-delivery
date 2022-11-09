import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { name, img, price, rating, description } = useLoaderData();
  return (
    <>
      <div key="content-0" className="relative mx-auto w-full">
        <img
          className="block mx-auto w-full h-screen object-cover"
          src={img}
          alt={name}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-overlay"></div>
        <div className="absolute top-1/4 left-0 text-white w-full text-start p-6">
          <h1 className="text-4xl font-bold">{name}</h1>
          <p>Price: {price}</p>
          <p>Raring: {rating}</p>
          <Link className="btn bg-my-primary-outline my-4">
            Get Our Service
          </Link>
        </div>
      </div>
      <p className="w-11/12 md:w-1/2 mx-auto text-center my-8 py-8">
        {description}
      </p>
    </>
  );
};

export default ServiceDetails;
