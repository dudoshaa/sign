import React from "react";
import FormInput from "../components/FormInput";
import { NavLink } from "react-router-dom";
import { TfiEmail } from "react-icons/tfi";
import { BsShieldLockFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useLogin } from "../hooks/useLogin";

function Login() {
  const { login, isPending } = useLogin();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    login(email, password);
  };

  return (
    <main>
      <div className="regestration hidden lg:flex h-full w-1/2 ">
        {/* BG */}
      </div>

      <div className="regestration grow lg:bg-none grid place-items-center ">
        <div className="fixed top-0 left-0 bottom-0  w-full bg-black/70 z-10  lg:hidden  "></div>
        <div className="relative z-20">
          <div className="mx-14 flex gap-5 text-2xl mb-4">
            <NavLink
              to="/login"
              className=" py-3 px-3 rounded-4xl text-yellow-500 "
            >
              LOGIN
            </NavLink>
            <NavLink
              to="/signUp"
              className="py-3 px-3 rounded-4xl text-yellow-500 "
            >
              SIGNUP
            </NavLink>
          </div>
          <form className="" onSubmit={handleSubmit}>
            <FormInput
              name="email"
              label="Email"
              type="email"
              icon={TfiEmail}
            />
            <FormInput
              name="password"
              label="Password"
              type="password"
              icon={BsShieldLockFill}
            />
            {isPending && (
              <button
                className="mt-5 mx-28 btn bg-black rounded-3xl text-white"
                disabled
              >
                Loading...
              </button>
            )}
            {!isPending && (
              <button className="mt-5 mx-28 btn bg-black rounded-3xl text-white">
                Login
              </button>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;
