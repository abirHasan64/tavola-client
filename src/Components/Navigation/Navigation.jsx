import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo and title icon/logo.jpeg";

const Navigation = () => {
  return (
    <div className="bg-[#0FA4Af]" style={{ position: 'relative', zIndex: '1' }}>
      <div className="lg:mx-20 text-white p-1">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#0FA4AF] text-white font-semibold rounded-box w-64"
              >
                <li>
                  <NavLink to='/'>Home</NavLink>
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
                <li>
                  <Link>Contact</Link>
                </li>
              </ul>
            </div>
            <Link className="flex gap-4">
              <img
                className="rounded-full w-1/6 lg:w-1/10 lg:rounded-full"
                src={logo}
              />
              <div className="my-auto">
                <p className="text-3xl font-semibold">Tavola</p>
                <p className="font-semibold text-gray-600 italic uppercase">
                  Find best Italian cuisine
                </p>
              </div>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-8 px-2 font-semibold text-lg">
              <li>
              <NavLink to='/'>Home</NavLink>
              </li>
              <li>
                <details>
                  <summary>Recipes</summary>
                  <ul className="p-2 w-64 bg-[#0FA4AF] text-white font-semibold">
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
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <Link className="space-x-8">
              <button className="btn px-16 text-lg font-bold">Login</button>
              <button className="btn px-16 text-lg font-bold">Signup</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
