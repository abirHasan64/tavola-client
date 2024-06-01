import { useState, useEffect } from "react";
import "./Category.css";
import { Link } from "react-router-dom";

const Category = () => {
  const [categoryImages, setCategoryImages] = useState([]);

  useEffect(() => {
    fetch("/food.json")
      .then((res) => res.json())
      .then((data) => {
        const images = data.find((item) => item.category_image)
          ?.category_image[0];
        setCategoryImages(images);
      });
  }, []);

  return (
    <div className="flex sm:flex-col justify-center items-center space-y-8 lg:space-y-0 lg:flex-row lg:space-x-20 text-center">
      {categoryImages &&
        Object.keys(categoryImages).map(
          (key, index) =>
            key !== "id" && (
              <Link key={index}>
                <div key={index} className="flex flex-col items-center lg:px-4">
                  <img
                    src={categoryImages[key]}
                    alt={key}
                    className="w-32 h-32 tilt-left object-cover rounded-full"
                  />
                  <p className="font-bold text-xl my-4 lg:mt-2">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </p>
                </div>
              </Link>
            )
        )}
    </div>
  );
};

export default Category;
