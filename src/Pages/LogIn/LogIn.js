import React, { useContext, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const LogIn = () => {
  const { user, logIn, googleLogIn, gitHubLogIn } = useContext(AuthContext);
  const [error, setError] = useState("");

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    logIn(email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        // navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (user) {
        navigate(from, { replace: true });
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [user, navigate, from]);

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then(() => {})
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleGitHubLogIn = () => {
    gitHubLogIn()
      .then(() => {})
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div className="w-11/12 h-auto md:w-1/2 mx-auto border rounded-md shadow-lg hover:shadow-2xl p-5 my-8">
      <h1 className="text-4xl font-bold text-center my-8">Log In</h1>
      <p>
        Haven't Registered yet?{" "}
        <Link to="/register" className="underline footer-link">
          Go to Register
        </Link>
      </p>
      <form onSubmit={handleLogIn} className="form-control">
        <label htmlFor="email" className="input-group my-4">
          Email
        </label>
        <input
          name="email"
          type="email"
          className="input input-bordered"
          required
        />
        <label htmlFor="password" className="input-group my-4">
          Password
        </label>
        <input
          name="password"
          type="password"
          className="input input-bordered"
          required
        />
        {error && <p className="text-error">{error}</p>}
        <button type="submit" className="btn btn-outline btn-info my-4">
          Log In
        </button>
      </form>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <button
          onClick={handleGoogleLogIn}
          type="submit"
          className="w-full md:w-5/12 btn btn-outline btn-primary my-4"
        >
          Google Log In <FcGoogle className="mx-2" />
        </button>
        <button
          onClick={handleGitHubLogIn}
          type="submit"
          className="w-full md:w-5/12 btn btn-outline my-4"
        >
          Git Hub Log In <FaGithub className="mx-2" />
        </button>
      </div>
    </div>
  );
};

export default LogIn;
