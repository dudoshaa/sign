import React from "react";
import { NavLink } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import { useSelector } from "react-redux";
import { useLogout } from "../hooks/useLogout";

function NavBar() {
  const { user } = useSelector((store) => store.user);
  const { logout, isPending } = useLogout();
  return (
    <header className="bg-gray-500">
      <div className="navbar align-elements text-white ">
        <div className="navbar-start">Logo</div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal gap-3">
            <li>
              <NavLink to="/" className="hover:bg-white/30 hover:text-black">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:bg-white/30 hover:text-black">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-4">
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
          {isPending && (
            <button className=" rounded-3xl text-white" disabled>
              Loading...
            </button>
          )}
          {!isPending && (
            <button className=" rounded-3xl text-white" onClick={logout}>
              <LuLogOut className="text-3xl" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default NavBar;
