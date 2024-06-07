/* eslint-disable react/no-unescaped-entities */
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../assets/cover/chef_1.png";
import img2 from "../../assets/cover/chef_2.png";
import img3 from "../../assets/cover/chef_3.png";
import img4 from "../../assets/cover/chef_4.png";
import img5 from "../../assets/cover/chef_5.png";
const ChefCarousel = () => {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <Carousel
          autoPlay={true}
          interval={500000}
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: "-1",
          }}
        >
          <div>
            <img
              className="h-[1000px] bg-blend-color"
              src={img1}
              alt="carousel-background"
            />
            <div className="absolute rounded-xl w-3/4 h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <p className="absolute w-11/12 bottom-20 text-2xl lg:text-3xl font-shantell-sans-extrabold border rounded-md px-5 py-12 my-12 text-white text-left left-20">
              Stepping into an Italian kitchen is like entering a world of vibrant colors and intoxicating aromas. Sun-ripened tomatoes, emerald green basil, and plump garlic cloves fill the air with a fragrant promise. Here, simplicity reigns supreme. A chef's hands, weathered with years of experience, work with the reverence of an artist. They slice plump tomatoes, their juice glistening like rubies, and toss them with a drizzle of emerald olive oil. A sprinkle of sea salt, the delicate crunch of fresh bread – each element plays a vital role in the culinary symphony. The dish, in its unpretentious beauty, is a testament to Italian cuisine's ability to elevate the ordinary to the extraordinary.
              </p>
            </div>
          </div>
          <div>
            <img className="h-[1000px]" src={img2} alt="carousel-background" />
            <div className="absolute rounded-xl w-3/4 h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <p className="absolute w-11/12 bottom-20 text-2xl lg:text-3xl font-shantell-sans-extrabold border rounded-md px-5 py-12 my-12 text-white text-left left-20">
              Watch an Italian chef at work, and you'll witness the quiet dance of an artist. Their hands, calloused yet nimble, transform vegetables into delicate julienne with a rhythmic precision. A splash of balsamic vinegar here, a pinch of saffron there – these seemingly minor adjustments are the brushstrokes that personalize the canvas. Their eyes, filled with a fiery passion, light up as they describe a new dish taking shape – a testament to their constant quest for innovation. More than just technical skill, it's the love for the craft that imbues their movements with a sense of artistry. Each dish becomes a masterpiece, a love song sung through the language of fresh ingredients and time-honored techniques.
              </p>
            </div>
          </div>
          <div>
            <img className="h-[1000px]" src={img3} alt="carousel-background" />
            <div className="absolute rounded-xl w-3/4 h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <p className="absolute w-11/12 bottom-20 text-2xl lg:text-3xl font-shantell-sans-extrabold border rounded-md px-5 py-12 my-12 text-white text-left left-20">
              Travel across the Italian peninsula, and the landscape changes, so too does the cuisine. In sun-drenched Tuscany, simplicity reigns supreme. Freshly baked bread, drizzled with vibrant olive oil, and a wedge of Pecorino cheese – this is the essence of Tuscan fare. Here, the focus is on letting the land speak for itself. Venture south to Naples, and the aroma of pizza fills the air. This iconic dish, a thin, blistered crust topped with the freshest tomatoes and mozzarella, is a testament to Neapolitan ingenuity. Each region boasts its own culinary language, a symphony of flavors that tells a story of its people, traditions, and the bounty offered by the land.
              </p>
            </div>
          </div>
          <div>
            <img className="h-[1000px]" src={img4} alt="carousel-background" />
            <div className="absolute rounded-xl w-3/4 h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <p className="absolute w-11/12 bottom-20 text-2xl lg:text-3xl font-shantell-sans-extrabold border rounded-md px-5 py-12 my-12 text-white text-left left-20">
              The heart of an Italian kitchen isn't just a fiery stove or a gleaming countertop. It's the warmth that radiates from Nonna Elena's smile as she stirs a pot of simmering ragù. It's the laughter echoing around a bustling table, filled with families gathered to share stories and a meal prepared with love. Italian food is more than sustenance; it's about connection. The aroma of simmering sauces, the warmth of freshly baked bread – these are the ingredients that create a sense of togetherness. In this haven of warmth and laughter, food becomes the bridge that connects generations, fostering memories that linger long after the last bite.
              </p>
            </div>
          </div>
          <div>
            <img className="h-[1000px]" src={img5} alt="carousel-background" />
            <div className="absolute rounded-xl w-3/4 h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
              <p className="absolute w-11/12 bottom-20 text-2xl lg:text-3xl font-shantell-sans-extrabold border rounded-md px-5 py-12 my-12 text-white text-left left-20">
              Italian cuisine is a living history book, its pages filled with recipes passed down through generations. Each dish is a testament to the ingenuity and passion of those who came before. In a Nonna's kitchen, time seems to slow down as she shares her secrets – the perfect kneading technique for pasta dough, the delicate balance of herbs in a simmering sauce. These culinary heirlooms are cherished and honed, each generation adding their own twist while staying true to the essence of tradition. The result is a vibrant tapestry of flavors, a legacy that lives on with every bite, a testament to the enduring power of Italian cuisine.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ChefCarousel;
