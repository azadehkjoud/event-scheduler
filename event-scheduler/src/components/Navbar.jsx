import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <span>Logo</span>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/signin">SignIn</NavLink>
        <NavLink to="/signup">SignUp</NavLink>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link> */}
      </div>
    </nav>
  );
}

export default Navbar;
