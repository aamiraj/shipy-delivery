import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import ErrorPage from "../Pages/ErrrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Blogs from "../Pages/Blogs/Blogs";
import Services from "../Pages/Services/Services";
import Private from "./PrivateRoute";
import AddService from "../Pages/AddService/AddService";
import EditReview from "../Pages/EditReview/EditReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(`https://shipy-server-app.vercel.app/services?limit=3`),
      },
      {
        path: "/home",
        element: <Home />,
        loader: () =>
          fetch(`https://shipy-server-app.vercel.app/services?limit=3`),
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails />,
        loader: ({ params }) =>
          fetch(`https://shipy-server-app.vercel.app/services/${params.id}`),
      },
      {
        path: "/log-in",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/my-reviews",
        element: (
          <Private>
            <MyReviews />
          </Private>
        ),
        loader: () => fetch(`https://shipy-server-app.vercel.app/services`),
      },
      {
        path: "/add-services",
        element: (
          <Private>
            <AddService />
          </Private>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/edit-review/:id",
        element: <EditReview></EditReview>,
        loader: ({ params }) =>
          fetch(`https://shipy-server-app.vercel.app/edit-review/${params.id}`),
      },
    ],
  },
]);

export default router;
