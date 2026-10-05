import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        🏋️ Gym Management
      </div>

      <div className="navbar-links">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/dashboard">
          Dashboard
        </NavLink>

        <NavLink to="/profile">
          Profile
        </NavLink>

        <NavLink to="/login">
          Login
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;