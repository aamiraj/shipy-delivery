import React from "react";
import { FaTruck, FaLocationArrow, FaUserAlt } from "react-icons/fa";
const Stat = () => {
  return (
    <div className="bg-my-primary text-white relative w-full h-3/5 py-12 stats flex flex-col md:flex-row shadow rounded-none">
      <div className=" z-10 stat place-items-center">
        <FaTruck className="w-8 h-8"></FaTruck>
        <div className="stat-title ">Percel Delivered</div>
        <div className="stat-value">300,000+</div>
      </div>

      <div className="z-10 stat place-items-center bg-transparent">
        <FaLocationArrow className="w-8 h-8"></FaLocationArrow>
        <div className="stat-title">Coverage Districts</div>
        <div className="stat-value">64</div>
      </div>

      <div className=" z-10 stat place-items-center bg-transparent">
        <FaUserAlt className="w-8 h-8"></FaUserAlt>
        <div className="stat-title">Happy Clients</div>
        <div className="stat-value ">100,000+</div>
      </div>
    </div>
  );
};

export default Stat;
