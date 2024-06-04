/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ChefQuotes = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chef")
      .then((res) => res.json())
      .then((data) => setQuotes(data));
  }, []);

  return (
    <div>
      <SectionTitle
        subHeading="Chef's Quote"
        heading="Get Awesome Cooking Tricks"
      />
      <Swiper
        className="w-5/6 lg:w-1/2 h-full mb-20"
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
      >
        {quotes.map((quote, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col mb-12 items-center">
              <img
                className="rounded-full w-64 h-64"
                src={quote.chef_image}
                alt={quote.chef_name}
              />
              <p className="w-1/2 font-caveat-bold text-3xl">
                "{quote.tricks}"
              </p>
              <p className="font-shantell-sans-extrabold text-4xl text-right">
                -{quote.chef_name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ChefQuotes;