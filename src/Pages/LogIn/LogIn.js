import React, { useContext, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import useTitle from "../../hooks/useTitle";
import { Oval } from "react-loader-spinner";

const LogIn = () => {
  const { user, logIn, googleLogIn, gitHubLogIn, isLoading, setLoading } =
    useContext(AuthContext);
  const [error, setError] = useState("");

  useTitle("Log In");

  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleLogIn = (event) => {
    setLoading(true);
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    logIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const currentUser = {
          email: user.email,
        };

        // get jwt token
        fetch("https://shipy-server-app.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => {
            setLoading(false);
            return res.json();
          })
          .then((data) => {
            //console.log(data);
            // saved to local storage
            localStorage.setItem("access-token", data.token);
            //navigate(from, { replace: true });
          });
        // navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleGoogleLogIn = () => {
    setLoading(true);
    googleLogIn()
      .then((userCredential) => {
        const user = userCredential.user;
        const currentUser = {
          email: user.email,
        };

        //console.log(currentUser);

        // get jwt token
        fetch("https://shipy-server-app.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => {
            setLoading(false);
            return res.json();
          })
          .then((data) => {
            //console.log(data);
            // saved to local storage
            localStorage.setItem("access-token", data.token);
            //navigate(from, { replace: true });
          });
        // navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleGitHubLogIn = () => {
    setLoading(true);
    gitHubLogIn()
      .then((userCredential) => {
        const user = userCredential.user;
        const currentUser = {
          email: user.email,
        };

        // get jwt token
        fetch("https://shipy-server-app.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => {
            setLoading(false);
            return res.json();
          })
          .then((data) => {
            //console.log(data);
            // saved to local storage
            localStorage.setItem("access-token", data.token);
            //navigate(from, { replace: true });
          });
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

  return (
    <div className="w-11/12 h-auto md:w-1/2 mx-auto border rounded-md shadow-lg hover:shadow-2xl p-5 my-8">
      {isLoading && (
        <div className="w-16 absolute top-1/2 left-1/2 z-30">
          <Oval
            height={80}
            width={80}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      )}
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
