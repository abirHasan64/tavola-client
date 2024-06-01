import { Outlet } from "react-router-dom";
import Navigation from "../Components/Navigation/Navigation";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
