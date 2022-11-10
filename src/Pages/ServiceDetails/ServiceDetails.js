import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Review from "../../components/Review/Review";
import { AuthContext } from "../../contexts/UserContext";
import useTitle from "../../hooks/useTitle";

const ServiceDetails = () => {
  const { _id, name, img, price, rating, description } = useLoaderData();
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);

  useTitle(name);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [_id]);

  return (
    <div>
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
      {/* review section start */}
      <div className="grid grid-cols-1 gap-4 my-8">
        <p className="w-4/5 mx-auto text-start text-2xl font-bold">Reviews</p>
        <div className="w-4/5 mx-auto border-2 rounded p-4">
          {reviews.map((rev) => (
            <Review key={rev._id} review={rev}></Review>
          ))}
          {user?.uid ? (
            <form className="form-control">
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Add your review"
              ></textarea>
              <button className="btn btn-ghost-outline my-4">
                Add your review
              </button>
            </form>
          ) : (
            <p>
              Please{" "}
              <Link to="/log-in" className="underline">
                log in
              </Link>{" "}
              to add review.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
