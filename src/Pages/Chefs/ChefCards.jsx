/* eslint-disable react/prop-types */
const ChefCards = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((singleChefData, index) => (
        <div key={index} className="card lg:card-side bg-base-100 w-3/4 mx-auto my-20 shadow-xl">
          <figure className="w-5/6 mx-auto">
            <img
            className="w-96 h-96 rounded-lg"
              src={singleChefData.chef_image}
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-3xl">{singleChefData.chef_name}</h2>
            <p className="w-3/4 font-shantell-sans-semibold text-lg mt-8">{singleChefData.description}</p>
            <div className="card-actions justify-end">
              <button className="btn transition bg-[#003135] text-white text-lg mt-4 hover:bg-[#0FA4AF] hover:text-white hover:-translate-y-1 hover:scale-110 duration-200 ease-in-out">View My Recipe</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChefCards;
