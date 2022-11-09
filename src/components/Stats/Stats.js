import React from "react";
import { CiDeliveryTruck, CiLocationOn, CiUser } from "react-icons/ci";
const Stat = () => {
  return (
    <div className="bg-my-primary text-white relative w-full h-3/5 py-12 stats flex flex-col md:flex-row shadow rounded-none">
      <div className=" z-10 stat place-items-center">
        <CiDeliveryTruck className="w-8 h-8"></CiDeliveryTruck>
        <div className="stat-title ">Percel Delivered</div>
        <div className="stat-value">10,000+</div>
      </div>

      <div className="z-10 stat place-items-center bg-transparent">
        <CiLocationOn className="w-8 h-8"></CiLocationOn>
        <div className="stat-title">Coverage Districts</div>
        <div className="stat-value">64</div>
      </div>

      <div className=" z-10 stat place-items-center bg-transparent">
        <CiUser className="w-8 h-8"></CiUser>
        <div className="stat-title">Happy Clients</div>
        <div className="stat-value ">100,000+</div>
      </div>
    </div>
  );
};

export default Stat;
