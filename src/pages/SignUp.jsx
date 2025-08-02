import React, { useState } from "react";
import FormInput from "../components/FormInput";
import { Link, Navigate, NavLink } from "react-router-dom";
import { TbUserPlus } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";
import { BsShieldLockFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useSignup } from "../hooks/useSignup";
import toast from "react-hot-toast";

function SignUp() {
  const { signup, isPending } = useSignup();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const displayName = formData.get("displayName");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (password !== confirmPassword) {
      toast.error("Invalid Password");
      return;
    }

    signup(displayName, email, password);
  };
  return (
    <main>
      <div className="regestration hidden lg:flex h-full  w-1/2 ">
        {/* BG */}
      </div>
      <div className="regestration grow lg:bg-none grid place-items-center ">
        <div className="fixed top-0 left-0 bottom-0 right-0 w-full bg-black/70 z-10 lg:hidden"></div>
        <div className="relative z-20">
          <div className="mx-14 flex gap-5 text-2xl mb-4">
            <NavLink
              to="/login"
              className="text-yellow-500 py-3 px-3 rounded-4xl   hover:bg-black/10"
            >
              LOGIN
            </NavLink>
            <NavLink
              to="/signUp"
              className="text-yellow-500 py-3 px-3 rounded-4xl    "
            >
              SIGNUP
            </NavLink>
          </div>
          <form
            className="w-[90vw] max-w-md px-4 sm:px-8"
            onSubmit={handleSubmit}
          >
            <FormInput
              name="displayName"
              type="text"
              label="User Name"
              icon={TbUserPlus}
            />
            <FormInput
              name="email"
              type="email"
              label="Email"
              icon={TfiEmail}
            />
            <FormInput
              name="password"
              type="password"
              label="Password"
              icon={BsShieldLockFill}
            />
            <FormInput
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              icon={BsShieldLockFill}
            />

            {isPending ? (
              <button
                className="mt-5 w-full btn bg-black rounded-3xl text-white py-2"
                disabled
              >
                Loading...
              </button>
            ) : (
              <button className="mt-5 w-full btn bg-black rounded-3xl text-white py-2">
                Sign Up
              </button>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}

export default SignUp;
