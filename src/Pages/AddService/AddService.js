import React from "react";
import useTitle from "../../hooks/useTitle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddService = () => {
  useTitle("Add service");
  const notify = () => toast("You have added a service successfully!");

  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const img = form.img.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const newService = {
      name: name,
      img: img,
      price: price,
      description: description,
      rating: rating,
    };

    fetch(`https://shipy-server-app.vercel.app/add-service`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          notify();
        }
      });

    form.reset();
  };
  return (
    <div className="w-3/4 md:w-1/2 mx-auto border rounded-md shadow-lg hover:shadow-2xl p-5 my-8">
      <ToastContainer></ToastContainer>
      <h1 className="text-4xl font-bold text-center my-8">
        Add your service Here
      </h1>
      <form onSubmit={handleAddService} className="form-control">
        <label htmlFor="name" className="input-group my-4">
          Name of your service
        </label>
        <input
          name="name"
          type="text"
          className="input input-bordered"
          required
          placeholder="Service name"
        />
        <label htmlFor="img" className="input-group my-4">
          Display Image
        </label>
        <input
          name="img"
          type="text"
          className="input input-bordered"
          required
          placeholder="A Banner Image link"
        />
        <label htmlFor="price" className="input-group my-4">
          Price of your service
        </label>
        <input
          name="price"
          type="text"
          className="input input-bordered"
          required
          placeholder="Price"
        />
        <label htmlFor="description" className="input-group my-4">
          Description
        </label>
        <textarea
          name="description"
          className="textarea textarea-bordered h-24"
          required
          placeholder="Short description of your service"
        />
        <label htmlFor="rating" className="input-group my-4">
          Rating
        </label>
        <input
          name="rating"
          type="number"
          min="1"
          max="5"
          className="input input-bordered"
          required
          placeholder="Rate your service"
        />
        {/* <label htmlFor="photoURL" className="input-group my-4">
          Photo URL
        </label>
        <input name="photoURL" type="text" className="input input-bordered" /> */}
        <button type="submit" className="btn btn-outline btn-info my-4">
          Add service
        </button>
      </form>
    </div>
  );
};

export default AddService;
