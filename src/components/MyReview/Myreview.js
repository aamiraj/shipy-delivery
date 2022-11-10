import React from "react";
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";

const Myreview = ({ myReview, services, deleteItem }) => {
  const { _id, review, serviceId, date, rating } = myReview;

  //console.log(services);

  const reviewedService = services.find((serve) => serve._id === serviceId);
  //console.log(reviewedService);
  const reviewedServiceName = reviewedService.name;

  const d = new Date(date);
  const dateString = d.toDateString();
  return (
    <div>
      <div className="flex justify-between items-cemter gap-4">
        <div className="w-4/5 mx-auto my-4">
          <div className="flex justify-start items-center gap-2 my-2">
            <p>In</p>
            <p className="text-md font-bold">{reviewedServiceName}</p>
            <p>On {dateString}</p>
          </div>
          <span className="font-bold">You said: </span>
          <q>{review}</q>
          <p>
            <span className="font-bold">You rated:</span>{" "}
            <span className="font-bold">{rating}</span> out of 5
          </p>
        </div>
        <div className="w-1/5 flex justify-center items-center gap-4">
          <button
            onClick={() => deleteItem(_id)}
            className="btn btn-error w-1/2"
          >
            <FaRegTrashAlt></FaRegTrashAlt>
          </button>
          <button className="btn btn-info w-1/2">
            <FaEdit></FaEdit>
          </button>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default Myreview;
