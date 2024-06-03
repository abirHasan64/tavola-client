import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CarouselElement from "../CarouselElement/CarouselElement";
import Category from "../Category/Category";
import ChefQuotes from "../ChefQuotes/ChefQuotes";

const Home = () => {
  return (
    <div>
      <CarouselElement />
      <SectionTitle
        heading="Recipe Categories"
        subHeading="Choose a Category"
      />
      <Category />
      <ChefQuotes />
    </div>
  );
};

export default Home;
