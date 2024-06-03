import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import CategoryFood from "../Pages/CategoryFood/CategoryFood";

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
        loader: ({ params }) => fetch(`http://localhost:5000/food/${params.category}`),
      },
    ],
  },
]);

export default router;
