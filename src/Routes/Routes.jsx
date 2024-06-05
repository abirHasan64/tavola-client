import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import CategoryFood from "../Pages/CategoryFood/CategoryFood";
import Chefs from "../Pages/Chefs/Chefs";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/food/:category",
        element: <CategoryFood />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/food/${params.category}`),
      },
      {
        path: "/chef",
        element: <Chefs />,
        loader: () => fetch("http://localhost:5000/chef"),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
