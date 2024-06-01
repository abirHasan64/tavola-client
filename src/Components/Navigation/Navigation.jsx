import { Link } from "react-router-dom";
import logo from "../../assets/logo and title icon/logo.jpeg";

const Navigation = () => {
  return (
    <div className="lg:mx-20">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
                <ul className="p-2">
                  <li>
                    <a>Appetizers</a>
                  </li>
                  <li>
                    <a>Beef</a>
                  </li>
                  <li>
                    <a>Chicken</a>
                  </li>
                  <li>
                    <a>Vegetarian</a>
                  </li>
                  <li>
                    <a>Desert</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link>Chefs</Link>
              </li>
            </ul>
          </div>
          <Link className="flex gap-4">
            <img className="rounded-full w-1/6 lg:w-1/12 lg:rounded-full" src={logo} />
            <div className="my-auto">
              <p className="text-3xl font-semibold">Tavola</p>
              <p className="font-semibold text-gray-400 italic uppercase">Find best Italian cuisine</p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <details>
                <summary>Recipes</summary>
                <ul className="p-2">
                  <li>
                    <a>Appetizers</a>
                  </li>
                  <li>
                    <a>Beef</a>
                  </li>
                  <li>
                    <a>Chicken</a>
                  </li>
                  <li>
                    <a>Vegetarian</a>
                  </li>
                  <li>
                    <a>Desert</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Chefs</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="space-x-8">
          <button className="btn">Login</button>
          <button className="btn">Signup</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
