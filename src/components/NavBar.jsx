import React from "react";
import { NavLink } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import { logOut } from "../app/features/userSlice";
import { useDispatch, useSelector } from "react-redux";

function NavBar() {
  const { user } = useSelector((store) => store.user);
  console.log(user);
  const dispatch = useDispatch();
  return (
    <header className="bg-yellow-400">
      <div className="navbar align-elements text-white ">
        <div className="navbar-start">
        Logo
        </div>
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
        <div className="dropdown dropdown-left bottom-0">
  <div tabIndex={0} role="button" className="m-1 ">
    <img
      className="rounded-4xl "
      src={user.photoURL}
      alt=""
      width={40}
    />
  </div>

  <ul
    tabIndex={0}
    className="dropdown-content  menu p-2 shadow bg-base-100 rounded-box w-64"
  >
    <li className="grid place-items-center bg-[#3a3a361b]">
      <h2 className="text-black mb-2 ">{user.email}</h2>
      <img
        className="rounded-[50%]"
        src={user.photoURL}
        alt=""
        width={80}
      />
      <div className="flex gap-1 text-2xl">
        <span className="text-black">Hi,</span>
        <span className="text-black">{user.displayName}!</span>
      </div>
    </li>
  </ul>
</div>

        </div>
      </div>
    </header>
  );
}

export default NavBar;
