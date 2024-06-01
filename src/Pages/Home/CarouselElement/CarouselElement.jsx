import img1 from "../../../assets/cover/img1.jpeg";
import img2 from "../../../assets/cover/img2.jpeg";
import img3 from "../../../assets/cover/img3.jpeg";
import img4 from "../../../assets/cover/img4.jpeg";
import img5 from "../../../assets/cover/img5.jpeg";
import img6 from "../../../assets/cover/img6.jpeg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselElement = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Carousel
        autoPlay={true}
        interval={3000}
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: '-1' }}
      >
        <div>
          <img className="h-[1000px]" src={img1} alt="carousel-background" />
        </div>
        <div>
          <img className="h-[1000px]" src={img2} alt="carousel-background" />
        </div>
        <div>
          <img className="h-[1000px]" src={img3} alt="carousel-background" />
        </div>
        <div>
          <img className="h-[1000px]" src={img4} alt="carousel-background" />
        </div>
        <div>
          <img className="h-[1000px]" src={img5} alt="carousel-background" />
        </div>
        <div>
          <img className="h-[1000px]" src={img6} alt="carousel-background" />
        </div>
      </Carousel>
      {/* Render the Navbar component */}
      
    </div>
  );
};

export default CarouselElement;
