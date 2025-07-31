import React from "react";
import { useSelector } from "react-redux";
import { TbSquareRoundedFilled } from "react-icons/tb";

function OnlineUsers() {
  const { user } = useSelector((store) => store.user);

  return (
    <div className="bg-gray-200 border-2 border-gray-300 p-4">
      <header className="text-2xl font-bold mb-6">Users:</header>
      <main>
        <ul>
          <li className="flex items-center gap-4 mx-2">
            {/* Avatar + icon overlay */}
            <div className="relative w-14 h-14">
              <img
                className="rounded-full w-full h-full object-cover"
                src={user.photoURL}
                alt="avatar"
              />
              <TbSquareRoundedFilled
                className="text-green-500 absolute top-10.5 right-1"
                size={16}
              />
            </div>

            {/* User info – hidden on small screens */}
            <div className="hidden sm:block">
              <h3 className="font-semibold">{user.displayName}</h3>
              <p className="text-sm">{user.email}</p>
            </div>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default OnlineUsers;
