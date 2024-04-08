import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import About from "../pages/About/About";
import Career from "../pages/Crieer/Crieer";
import Home from "../pages/Home/Home";
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
    ],
  },
]);

export default router;
