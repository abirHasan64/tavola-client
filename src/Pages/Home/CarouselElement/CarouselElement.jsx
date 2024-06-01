import img1 from "../../../assets/cover/img1.jpeg";
import img2 from "../../../assets/cover/img2.jpeg";
import img3 from "../../../assets/cover/img3.jpeg";
import img4 from "../../../assets/cover/img4.jpeg";
import img5 from "../../../assets/cover/img5.jpeg";
import img6 from "../../../assets/cover/img6.jpeg";
import { useEffect, useState } from "react";

const CarouselElement = () => {
  const [animationDelay, setAnimationDelay] = useState(0); // Initial delay

  // Function to update animation delay
  useEffect(() => {
    // Set your desired animation delay in milliseconds
    const delay = 2000; // 2 seconds
    const interval = setInterval(() => {
      setAnimationDelay((prevDelay) => (prevDelay + 1) % 6);
    }, delay);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="carousel h-[800px] w-full">
        <div
          id="item1"
          className={`carousel-item w-full ${
            animationDelay === 0 ? "animate-slide" : ""
          }`}
        >
          <img src={img1} className="w-full" />
        </div>
        <div
          id="item2"
          className={`carousel-item w-full ${
            animationDelay === 1 ? "animate-slide" : ""
          }`}
        >
          <img src={img2} className="w-full" />
        </div>
        <div
          id="item3"
          className={`carousel-item w-full ${
            animationDelay === 2 ? "animate-slide" : ""
          }`}
        >
          <img src={img3} className="w-full" />
        </div>
        <div
          id="item4"
          className={`carousel-item w-full ${
            animationDelay === 3 ? "animate-slide" : ""
          }`}
        >
          <img src={img4} className="w-full" />
        </div>
        <div
          id="item5"
          className={`carousel-item w-full ${
            animationDelay === 4 ? "animate-slide" : ""
          }`}
        >
          <img src={img5} className="w-full" />
        </div>
        <div
          id="item6"
          className={`carousel-item w-full ${
            animationDelay === 5 ? "animate-slide" : ""
          }`}
        >
          <img src={img6} className="w-full" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
        <a href="#item5" className="btn btn-xs">
          5
        </a>
        <a href="#item6" className="btn btn-xs">
          6
        </a>
      </div>
    </div>
  );
};

export default CarouselElement;
