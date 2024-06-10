import { FaSearch } from "react-icons/fa";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className="bg-slate-100 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span style={{ color: "#990010" }}>Astute</span>

            <span className="text-red-800">Homes</span>
          </h1>
        </Link>
        <form className="bg-#FCF6F5 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent w-24 sm:w-64"
          />
          <FaSearch className="text-red-800" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-red-800 hover:underline">
              Home
            </li>
          </Link>

          <Link to="/about">
            <li className="hidden sm:inline text-red-800 hover:underline">
              About
            </li>
          </Link>

          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className="hidden sm:inline text-red-800 hover:underline">
                Sign In
              </li>
            )}
          </Link>

          {/* <li className="hidden sm:inline text-red-800 hover:underline">
            Home
          </li> */}
        </ul>
      </div>
    </header>
  );
}
//font-bold text-sm sm:text-xl flex flex-wrap
