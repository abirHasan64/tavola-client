import { Outlet } from "react-router-dom";
import Navigation from "../Components/Navigation/Navigation";

const MainLayout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default MainLayout;
