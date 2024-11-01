import { NavLink, Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

function Navbar() {
  return (
    <nav className="navbar bg-base-100 shadow-md p-4">
      {/* Create Event Button */}
      <div className="navbar-start">
        <Link to="/create-event" className="btn btn-primary text-white ">
          Create New Event
        </Link>
      </div>

      {/* Logo */}
      <div className="navbar-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-20 w-auto" /> {/* Adjust size as needed */}
        </Link>
      </div>

      {/* Nav Links */}
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
              to="/posts"
              className={({ isActive }) =>
                `hover:bg-primary hover:text-white rounded-lg px-3 py-2 transition ${
                  isActive ? "bg-primary text-white" : ""
                }`
              }
            >
              Current Events
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
              Sign In
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
              Sign Up
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
