import React from "react";
import useTitle from "../../hooks/useTitle";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  useTitle("Error");
  const error = useRouteError();

  return (
    <div
      id="error-page"
      className="flex flex-col justify-center items-center h-screen"
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/home" className="underline text-amber-500">
        Back to home page
      </Link>
    </div>
  );
};

export default ErrorPage;
