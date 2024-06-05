import { useLoaderData } from "react-router-dom";
import ChefCarousel from "./ChefCarousel";
import ChefCards from "./ChefCards";

const Chefs = () => {
  const chefData = useLoaderData();
  return (
    <div>
      <ChefCarousel />
      <ChefCards data = {chefData}/>
    </div>
  );
};

export default Chefs;
