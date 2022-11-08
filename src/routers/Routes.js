import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import ErrorPage from "../Pages/ErrrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/services",
        element: <ServiceDetails />,
      },
      {
        path: "/log-in",
        element: <ServiceDetails />,
      },
      {
        path: "/register",
        element: <ServiceDetails />,
      },
      {
        path: "/my-reviews",
        element: <ServiceDetails />,
      },
      {
        path: "/blogs",
        element: <ServiceDetails />,
      },
    ],
  },
]);

export default router;
