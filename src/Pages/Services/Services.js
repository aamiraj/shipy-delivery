import React from "react";
import { useLoaderData } from "react-router-dom";
import Service from "../../components/Service/Service";

const Services = () => {
  const services = useLoaderData();
  return (
    <div>
      <div id="services" className="w-11/12 mx-auto my-8">
        <h1 className="text-4xl font-bold p-4 text-center">
          Services We Provide
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((serve) => (
            <Service key={serve._id} service={serve}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
