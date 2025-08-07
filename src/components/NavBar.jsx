import React from "react";
import { Link, NavLink } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import { useSelector } from "react-redux";
import { useLogout } from "../hooks/useLogout";
import { IoHome } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import Logo from "../../public/assets/Logo.svg";

function NavBar() {
  const { user } = useSelector((store) => store.user);
  const { logout, isPending } = useLogout();

  return (
    <header className="bg-gray-500 mb-3">
      <div className="navbar align-elements text-white px-4">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52"
            >
              <li>
                <NavLink to="/" className="flex items-center text-sm lg:text-lg md:text-shadow-md">
                  <IoHome className="text-xl md:text-2xl" />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="flex items-center text-sm lg:text-lg md:text-shadow-md">
                  {" "}
                  <IoMdContact className="text-xl  md:text-2xl" />
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/users"
                  className="flex items-center text-sm md:text-shadow-md"
                >
                  <FaUsers className="text-xl  md:text-2xl" /> Users
                </NavLink>
              </li>
            </ul>
          </div>
          <span className="text-xl font-bold">
            <Link to="/">
              <img src={Logo} alt="" className="w-4 lg:w-8 md:w-6" />
            </Link>
          </span>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-3">
            <li>
              <NavLink to="/" className=" hover:text-black hover:bg-white/30">
                <IoHome className="text-3xl" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:text-black hover:bg-white/30"
              >
                <IoMdContact className="text-3xl" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className="hover:text-black hover:bg-white/30"
              >
                <FaUsers className=" text-3xl" />
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end flex gap-4 items-center">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="m-1">
              <img
                className="rounded-full"
                src={user.photoURL}
                alt=""
                width={40}
              />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-4 shadow bg-base-100 rounded-box w-64"
            >
              <li className="grid place-items-center bg-[#3a3a361b] p-2 rounded-md">
                <h2 className="text-black mb-2">{user.email}</h2>
                <img
                  className="rounded-full"
                  src={user.photoURL}
                  alt=""
                  width={80}
                />
                <div className="flex gap-1 text-2xl mt-2">
                  <span className="text-black">Hi,</span>
                  <span className="text-black">{user.displayName}!</span>
                </div>
              </li>
            </ul>
          </div>

          {isPending ? (
            <button className=" btn-sm btn-outline text-white" disabled>
              Loading...
            </button>
          ) : (
            <button className=" btn-sm btn-outline text-white" onClick={logout}>
              <LuLogOut className="text-2xl" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default NavBar;
