import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-base-100 shadow-md p-4">
      {/* Left - Burger Menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><NavLink to="/" className="hover:bg-primary-focus hover:text-white rounded-lg p-2">Home</NavLink></li>
            <li><NavLink to="/about" className="hover:bg-primary-focus hover:text-white rounded-lg p-2">About</NavLink></li>
            <li><NavLink to="/posts" className="hover:bg-primary-focus hover:text-white rounded-lg p-2">Posts</NavLink></li>
            <li><NavLink to="/create-event" className="hover:bg-primary-focus hover:text-white rounded-lg p-2">Create Event</NavLink></li>
            <li><NavLink to="/signin" className="hover:bg-primary-focus hover:text-white rounded-lg p-2">SignIn</NavLink></li>
            <li><NavLink to="/signup" className="hover:bg-primary-focus hover:text-white rounded-lg p-2">SignUp</NavLink></li>
          </ul>
        </div>
      </div>

      {/* Center - Logo */}
      <div className="navbar-center">
        <Link to="/" className="text-xl font-bold">Logo</Link>
      </div>

      {/* Right - Nav Links */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:bg-primary hover:text-white rounded-lg px-3 py-2 transition ${
                  isActive ? "bg-primary text-white" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:bg-primary hover:text-white rounded-lg px-3 py-2 transition ${
                  isActive ? "bg-primary text-white" : ""
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/posts"
              className={({ isActive }) =>
                `hover:bg-primary hover:text-white rounded-lg px-3 py-2 transition ${
                  isActive ? "bg-primary text-white" : ""
                }`
              }
            >
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                `hover:bg-primary hover:text-white rounded-lg px-3 py-2 transition ${
                  isActive ? "bg-primary text-white" : ""
                }`
              }
            >
              SignIn
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                `hover:bg-primary hover:text-white rounded-lg px-3 py-2 transition ${
                  isActive ? "bg-primary text-white" : ""
                }`
              }
            >
              SignUp
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
