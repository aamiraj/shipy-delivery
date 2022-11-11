import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const EditReview = () => {
  const { _id, review } = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;
    const d = new Date();
    const dateISO = d.toISOString();

    fetch(`http://localhost:5000/edit-review/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
      body: JSON.stringify({ review: review, date: dateISO }),
    });
  };

  return (
    <div className="w-4/5 mx-auto border-2 rounded p-4 my-8">
      <div className="flex justify-start items-center gap-4 my-2">
        <img
          className="rounded-full"
          src={user?.photoURL}
          style={{ width: "32px", height: "32px" }}
          alt="profile"
        />
        <p className="w-4/5 text-start text-2xl font-bold">
          {user?.displayName || user?.email}
        </p>
      </div>
      <form onSubmit={handleSubmit} className="form-control">
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="Add your review"
          name="review"
        >
          {review}
        </textarea>
        <input
          className="input input-bordered my-2"
          type="number"
          name="rated"
          id="rated"
          placeholder="Rate this service out of 5"
          min="1"
          max="5"
          value="4"
        />

        <button className="btn btn-ghost-outline my-4">
          Update your review
        </button>
      </form>
    </div>
  );
};

export default EditReview;
