import { useLoaderData } from "react-router-dom";

const SingleFood = () => {
  const singleItemData = useLoaderData();
  console.log(singleItemData);
  const recipeSteps = singleItemData.food_complete_recipe.split('\n').map((step, index) => (
    <li key={index} className="mt-2 list-none my-6">{step}</li>
  ));
  return (
    <div className="w-3/4 mx-auto border-2 my-40 rounded-lg">
      <div className="my-12 p-4">
        <img
          className="mx-auto w-5/6 rounded-xl"
          src={singleItemData.food_image}
          alt=""
        />
        <div className="text-center mt-5">
          <h1 className="text-5xl font-extrabold">
            {singleItemData.food_name}
          </h1>
          <div className="flex justify-center mt-4">
            <p className="w-1/16 uppercase bg-slate-400 px-2 rounded-xl text-white font-bold py-1">
              Category: {singleItemData.category}
            </p>
          </div>
        </div>
        <h1 className="text-3xl mt-8 font-serif font-bold">
          Chef Name: {singleItemData.chef_name}
        </h1>
        <p className="text-xl mt-4 font-semibold">
          <span className="bg-[#024950] mr-4 text-white px-4 rounded-xl">
            About food:
          </span>
          {singleItemData.food_details}
        </p>
        <div className="text-xl mt-4">
          <span className="bg-[#024950] text-white px-4 font-semibold rounded-xl">
            Recipe:
          </span>
          <p className="px-6">{recipeSteps}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
