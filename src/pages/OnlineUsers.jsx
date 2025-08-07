import React, { useEffect, useState } from "react";
import { TbSquareRoundedFilled } from "react-icons/tb";
import { useCollection } from "../hooks/useCollection";

function OnlineUsers() {
  const { data: users } = useCollection("users");
  return (
    <div className="bg-gray-200 w-full ">
      <main>
        <ul>
          {users &&
            users.map((user) => {
              return (
                <li
                  key={user.id}
                  className="flex border-b-[0.8px] border-gray-300 lg:border-none md:border-none items-center gap-4 w-sm lg:w-lg md:w-md  px-4 py-2 mb-4 hover:bg-gray-300 hover: transition-all "
                >
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16">
                    <img
                      className="rounded-full w-full h-full object-cover"
                      src={user.photoURL}
                      alt="avatar"
                    />
                    <TbSquareRoundedFilled
                      className={`absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ${
                        user.online ? "text-green-500" : "text-gray-500"
                      }`}
                    />
                  </div>

                  <div className="text-xs sm:text-sm md:text-base lg:text-lg">
                    <h3 className="font-semibold truncate max-w-[150px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px]">
                      {user.displayName}
                    </h3>
                    <p className="text-gray-500 text-xs"></p>
                  </div>
                </li>
              );
            })}
        </ul>
      </main>
    </div>
  );
}

export default OnlineUsers;
