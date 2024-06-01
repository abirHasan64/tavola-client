import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CarouselElement from "../CarouselElement/CarouselElement";
import Category from "../Category/Category";

const Home = () => {
  return (
    <div>
      <CarouselElement />
      <SectionTitle
        heading="Recipe Categories"
        subHeading="Choose a Category"
      />
      <Category />
    </div>
  );
};

export default Home;
