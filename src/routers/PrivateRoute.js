import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const Private = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  // if (!isLoading && user) {
  //   return (
  //     <div className="w-16 absolute top-1/2 left-1/2">
  //       <Oval
  //         height={80}
  //         width={80}
  //         color="#4fa94d"
  //         wrapperStyle={{}}
  //         wrapperClass=""
  //         visible={true}
  //         ariaLabel="oval-loading"
  //         secondaryColor="#4fa94d"
  //         strokeWidth={2}
  //         strokeWidthSecondary={2}
  //       />
  //     </div>
  //   );
  // }

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default Private;
