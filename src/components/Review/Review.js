import React from "react";

const Review = (props) => {
  const { name, email, review, rating, photo, date } = props.review;
  const d = new Date(date);
  const dateString = d.toDateString();
  return (
    <div className="mx-auto my-4">
      <div className="flex justify-start items-center gap-4 my-2">
        <img
          className="rounded-full"
          src={photo}
          style={{ width: "32px", height: "32px" }}
          alt={name}
        />
        <p className="text-md font-bold">{name || email}</p>
        <p>{dateString}</p>
      </div>
      <span className="font-bold">Said: </span>
      <q>{review}</q>
      <p>
        <span className="font-bold">Rated:</span>{" "}
        <span className="font-bold">{rating}</span> out of 5
      </p>
      <hr />
    </div>
  );
};

export default Review;
