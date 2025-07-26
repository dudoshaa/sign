import React, { useState } from "react";
import FormInput from "../components/FormInput";
import { Link, Navigate, NavLink } from "react-router-dom";
import { TbUserPlus } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";
import { BsShieldLockFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { signUp } from "../app/features/userSlice";
import toast from "react-hot-toast";

function SignUp() {
  const dispatch = useDispatch();
  const [isSigup, setIsSignup] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userName = formData.get("userName");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (!userName || !email || !password || !confirmPassword) {
      toast.error("Please fill in all the fields!");
      return;
    }
  
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    if (userName && email && password) {
      dispatch(signUp({ userName, email, password }));
      setIsSignup(true);
    }
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
              className="text-white py-3 px-3 rounded-4xl  lg:text-black hover:bg-black/10"
            >
              LOGIN
            </NavLink>
            <NavLink
              to="/signUp"
              className="text-white py-3 px-3 rounded-4xl  lg:text-black  "
            >
              SIGNUP
            </NavLink>
          </div>
          <form className="w-96" onSubmit={handleSubmit}>
            <FormInput
              name="userName"
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

            <button className="mt-5 mx-28 btn bg-amber-600 rounded-3xl text-white">
              SignUp
            </button>
          </form>
          {isSigup && <Navigate to="/login" />}
        </div>
      </div>
    </main>
  );
}

export default SignUp;
