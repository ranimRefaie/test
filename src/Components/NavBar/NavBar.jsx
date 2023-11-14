import "./NavBar.css";
import logo from "./logo-phono.webp";
import { NavLink } from "react-router-dom";
import DropDown from "../DropDown/DropDown";

function NavBar() {
  return (
    <navbar>
      <div className="navagiation">
        <input type="checkbox" className="toggle-menu" />
        <div className="hamburger"></div>

        <div className="">
          <img src={logo} alt="" />
        </div>
        <ul className="menu">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Home
          </NavLink>
          <DropDown name="Collection" option1="" option2="" option3="" />
          <NavLink to="/shope">Shop</NavLink>
          <NavLink to="android">Android</NavLink>
          <NavLink to="/accessoriess">Accessoriess</NavLink>
          <NavLink to="/memory&storage">Memory & Storage</NavLink>
          <DropDown
            name="Pages"
            option1="About"
            option2="Conacts"
            option3="Blog"
          />
        </ul>

        <ul>
          <NavLink to="/login">
            <i className="fa-solid fa-user-large"></i>
          </NavLink>
          <NavLink to="/shope">
            <i className="fa-solid fa-cart-shopping"></i>
          </NavLink>
          <NavLink to="/search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </NavLink>
        </ul>
      </div>
    </navbar>
  );
}

export default NavBar;
