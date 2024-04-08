import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import About from "../pages/About/About";
import Career from "../pages/Crieer/Crieer";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import SignUp from "../pages/SignUp/SignUp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <SignUp></SignUp>,
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <NewsDetails></NewsDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
