import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Myreview from "../../components/MyReview/Myreview";
import { AuthContext } from "../../contexts/UserContext";
import useTitle from "../../hooks/useTitle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyReviews = () => {
  const [myReviews, setMyReviews] = useState([]);
  const services = useLoaderData();
  const { user, logOut } = useContext(AuthContext);
  useTitle("My reviews");

  useEffect(() => {
    fetch(`http://localhost:5000/my-reviews?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => setMyReviews(data));
  }, [user, logOut]);

  const notify = () => toast("You have deleted successfully!");

  const deleteItem = (id) => {
    fetch(`http://localhost:5000/my-reviews/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const remainingItems = myReviews.filter((myrev) => myrev._id !== id);
          setMyReviews(remainingItems);
          notify();
        }
      });
  };

  return (
    <div className="w-4/5 mx-auto border-2 rounded p-4 my-8">
      <ToastContainer></ToastContainer>
      <div className="flex justify-start items-center gap-4 my-2">
        <img
          className="rounded-full"
          src={user?.photoURL}
          style={{ width: "32px", height: "32px" }}
          alt="profile"
        />
        <p className="w-4/5 text-start text-2xl font-bold">
          {user?.displayName || user.email}
        </p>
      </div>
      {!myReviews.length && (
        <>
          <p className="text-center my-8 px-4 w-full font-bold">
            You have no review
          </p>
        </>
      )}
      {myReviews.map((myrev) => (
        <Myreview
          key={myrev._id}
          myReview={myrev}
          services={services}
          deleteItem={deleteItem}
        ></Myreview>
      ))}
    </div>
  );
};

export default MyReviews;
