import React from "react";
import { NavLink } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import { logOut } from "../app/features/userSlice";
import { useDispatch } from "react-redux";

function NavBar() {
  const dispatch = useDispatch();
  return (
    <header className="bg-yellow-400"  >
      <div className="navbar align-elements text-white ">
        <div className="navbar-start">Logo</div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button onClick={() => dispatch(logOut())}>
            <LuLogOut className="text-3xl" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
