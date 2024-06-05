import { useLoaderData } from "react-router-dom";
import ChefCarousel from "./ChefCarousel";

const Chefs = () => {
  const chefData = useLoaderData();
  console.log(chefData);
  return (
    <div>
      <ChefCarousel />
    </div>
  );
};

export default Chefs;
