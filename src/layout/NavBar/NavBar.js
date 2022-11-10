import React, { useEffect, useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo-shipy.png";
import { AuthContext } from "../../contexts/UserContext";
import { FaUserAlt } from "react-icons/fa";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [services, setServices] = useState([]);
  //console.log(user);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]);
  return (
    <div className="navbar bg-base-100 shadow-lg sticky top-0 z-30">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="color-my-primary lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-amber-500" : undefined
                }
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-amber-500" : undefined
                }
                to="/blogs"
              >
                Blogs
              </NavLink>
            </li>
            <li tabIndex={0}>
              <NavLink
                to="/services"
                className={`justify-between ${({ isActive }) =>
                  isActive ? "text-amber-500" : undefined}`}
              >
                Services
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  color="#fe181a"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </NavLink>
              <ul className="p-2 z-30 bg-white">
                {services.map((serve) => (
                  <li key={serve._id.toString()}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "text-amber-500" : undefined
                      }
                      to={`/services/${serve._id}`}
                    >
                      {serve.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
            {user?.uid && (
              <>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-amber-500" : undefined
                    }
                    to="/my-reviews"
                  >
                    My Reviews
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-amber-500" : undefined
                    }
                    to="/add-services"
                  >
                    Add Services
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link to="/">
          <img className="w-32" src={Logo} alt="shipy" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-amber-500" : undefined
              }
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-amber-500" : undefined
              }
              to="/blogs"
            >
              Blogs
            </NavLink>
          </li>
          <li tabIndex={0}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-amber-500" : undefined
              }
              to="/services"
            >
              Services
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                color="#fe181a"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </NavLink>
            <ul className="p-2 z-30 bg-white">
              {services.map((serve) => (
                <li key={serve._id.toString()}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-amber-500" : undefined
                    }
                    to={`/services/${serve._id}`}
                  >
                    {serve.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
          {user?.uid && (
            <>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-amber-500" : undefined
                  }
                  to="/my-reviews"
                >
                  My Reviews
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-amber-500" : undefined
                  }
                  to="/add-services"
                >
                  Add Services
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user?.uid ? (
          <div
            className="flex justify-center items-center tooltip tooltip-left"
            data-tip={user?.email}
          >
            {user?.photoURL ? (
              <img
                className="w-8 h-8 rounded-full mx-4"
                src={user?.photoURL}
                alt="profile-pic"
              />
            ) : (
              <FaUserAlt className="w-8 h-8 rounded-full mx-4" />
            )}
            <button onClick={handleLogOut} className="btn btn-outline">
              Log Out
            </button>
          </div>
        ) : (
          <NavLink to="/log-in" className="btn bg-my-primary-outline">
            Log In
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default NavBar;
