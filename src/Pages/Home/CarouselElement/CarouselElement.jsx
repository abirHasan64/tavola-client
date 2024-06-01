/* eslint-disable react/no-unescaped-entities */
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
        interval={2000}
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: '-1' }}
      >
        <div>
          <img className="h-[1000px] bg-blend-color" src={img1} alt="carousel-background" />
          <div className="absolute rounded-xl w-3/4 h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <p className="absolute bottom-20 text-3xl font-bold border rounded-md px-5 py-12 my-60 text-white text-left left-20">Italy's culinary heritage is as diverse and rich as its history and culture. From the sun-drenched shores of Sicily to the snow-capped peaks of the Alps, each region boasts its own unique culinary traditions and specialties. Explore the flavors of Tuscany with its hearty ribollita and succulent bistecca alla Fiorentina, or indulge in the seafood delights of coastal regions like Liguria and Campania. With centuries of tradition and innovation behind every dish, Italian cuisine is a journey through time and taste that's sure to delight and inspire.</p>
          </div>
          
        </div>
        <div>
          <img className="h-[1000px]" src={img2} alt="carousel-background" />
          <div className="absolute rounded-xl w-3/4 h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <p className="absolute bottom-20 text-3xl font-bold border rounded-md px-5 py-12 my-60 text-white text-left left-20">Transport your taste buds to the heart of Italy with our collection of authentic and time-tested recipes. From classic favorites like Margherita pizza and creamy risotto to lesser-known regional specialties like Piedmontese vitello tonnato and Roman artichokes alla Romana, our recipes capture the essence of Italian cuisine in every bite. Whether you're planning a cozy dinner for two or hosting a festive gathering with friends and family, our recipes are sure to impress and delight even the most discerning of palates.</p>
          </div>
        </div>
        <div>
          <img className="h-[1000px]" src={img3} alt="carousel-background" />
          <div className="absolute rounded-xl w-3/4 h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <p className="absolute bottom-20 text-3xl font-bold border rounded-md px-5 py-12 my-60 text-white text-left left-20">In Italy, food is more than just sustenance—it's a way of life. Experience the warmth and hospitality of the Italian table with our tips for entertaining in true Italian style. Learn the art of aperitivo, the pre-dinner ritual of enjoying a leisurely drink and light snacks with friends, or discover the joy of a rustic family-style meal where everyone gathers around the table to share stories, laughter, and, of course, delicious food. With a focus on simplicity, quality, and above all, generosity, Italian hospitality is sure to leave a lasting impression on all who partake.</p>
          </div>
        </div>
        <div>
          <img className="h-[1000px]" src={img4} alt="carousel-background" />
          <div className="absolute rounded-xl w-3/4 h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <p className="absolute bottom-20 text-3xl font-bold border rounded-md px-5 py-12 my-60 text-white text-left left-20">No meal is complete without something sweet to end on a high note, and Italian cuisine offers a treasure trove of decadent desserts to satisfy every craving. From the iconic tiramisu and creamy panna cotta to the flaky sfogliatelle and delicate cannoli, Italian desserts are a celebration of indulgence and pleasure. Discover the secrets behind these timeless treats and learn how to recreate them in your own kitchen, whether you're planning a special occasion or simply treating yourself to a little slice of la dolce vita.</p>
          </div>
        </div>
        <div>
          <img className="h-[1000px]" src={img5} alt="carousel-background" />
          <div className="absolute rounded-xl w-3/4 h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <p className="absolute bottom-20 text-3xl font-bold border rounded-md px-5 py-12 my-60 text-white text-left left-20">Italy is renowned for its world-class wines, and no exploration of Italian cuisine would be complete without a journey through its vineyards and cellars. From the robust reds of Tuscany and Piedmont to the crisp whites of Friuli and the sparkling proseccos of Veneto, Italy's wine regions offer a diverse and exciting array of flavors and styles to suit every palate. Join us as we uncork the secrets of Italian wine, from the terroir and grape varieties to the winemaking techniques and food pairings that make each bottle a true expression of Italy's passion for wine.</p>
          </div>
        </div>
        <div>
          <img className="h-[1000px]" src={img6} alt="carousel-background" />
          <div className="absolute rounded-xl w-3/4 h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <p className="absolute bottom-20 text-3xl font-bold border rounded-md px-5 py-12 my-60 text-white text-left left-20">At the heart of Italian cooking lies an appreciation for fresh, seasonal produce. From ripe tomatoes bursting with sweetness to fragrant basil leaves and peppery arugula, Italian dishes are often a showcase of vibrant colors and bold flavors. Whether it's a simple Caprese salad drizzled with extra virgin olive oil or a hearty minestrone soup brimming with vegetables, each dish bursts with the essence of the Mediterranean sun.</p>
          </div>
        </div>
      </Carousel>
      {/* Render the Navbar component */}
      
    </div>
  );
};

export default CarouselElement;
