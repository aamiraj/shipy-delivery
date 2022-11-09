import React from "react";

const Review = (props) => {
  const { name, review, rating } = props.review;
  return (
    <div className="mx-auto my-4">
      <p className="text-md font-bold">{name}</p>
      <q>{review}</q>
      <p>
        Rated: <span className="font-bold">{rating}</span> out of 5
      </p>
      <hr />
    </div>
  );
};

export default Review;
