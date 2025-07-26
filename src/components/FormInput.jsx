import React, { useState } from "react";
import { PiEyeClosedBold, PiEyeBold } from "react-icons/pi";

function FormInput({ label, type, name, icon: Icon }) {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";
  return (
    <fieldset className="mb-6">
      <div className="relative w-full">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        )}

        <input
          name={name}
          type={isPassword ? (show ? "password" : "text") : type}
          placeholder={label}
          className={`w-full py-2 ${Icon ? "pl-10" : "pl-4"} ${
            isPassword ? "pr-10" : ""
          } border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-yellow-400`}
        />
        {isPassword && (
          <div
            onClick={() => setShow(!show)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
          >
            {show ? <PiEyeClosedBold /> : <PiEyeBold />}
          </div>
        )}
      </div>
    </fieldset>
  );
}

export default FormInput;
