import { Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";

const MainLayout = () => {
  return (
    <div>
      <Home />
      <Outlet />
    </div>
  );
};

export default MainLayout;
