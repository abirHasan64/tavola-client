import { Link, useLoaderData } from "react-router-dom";
import cover from "../../assets/background.jpeg";

const CategoryFood = () => {
  const foodItems = useLoaderData();

  return (
    <div className="items-center lg:pt-0">
      <div
        className="w-full"
        style={{
          position: "absolute",
          top: 0,
          bottom: 20,
          left: 0,
          width: "100%",
          height: "50%",
          zIndex: "10",
          backgroundImage: `url(${cover})`,
        }}
      >
        <h1 className="w-6/12 lg:w-1/4 mt-56 p-10 mx-auto uppercase text-center border-4 rounded-full text-5xl bg-cover font-pacifico-regular bg-center">
          {foodItems[0].category}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 pt-56 mt-96 my-20 lg:grid-cols-3 gap-y-20 gap-8">
        {foodItems.map((foodItem) => (
          <div key={foodItem.id}>
            <div className="flex justify-center">
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src={foodItem.food_image}
                    alt={foodItem.category}
                    className="object-cover h-48 w-full"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-serif text-3xl font-bold">
                    {foodItem.food_name}
                  </h2>
                  <p>
                    {foodItem.food_details.split(" ").slice(0, 50).join(" ") +
                      "..."}
                  </p>

                  <div className="card-actions justify-end">
                    <Link to={`/food/${foodItem.category}/${foodItem.id}`}>
                      <button className="btn transition bg-[#003135] text-white text-lg mt-4 hover:bg-[#0FA4AF] hover:text-white hover:-translate-y-1 hover:scale-110 duration-200 ease-in-out">
                        View Recipe
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFood;
