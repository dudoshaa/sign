import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TbSquareRoundedFilled } from "react-icons/tb";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

function OnlineUsers() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    const getDocuments = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const data = [];
      querySnapshot.forEach((user) => {
        data.push({ id: user.id, ...user.data() });
      });
      setUsers(data);
    };
    getDocuments();
  }, []);
  console.log(users);

  return (
    <div className="bg-gray-200 w-80 border-2 border-gray-300 p-4">
      <header className="text-2xl font-bold mb-6">Users:</header>
      <main>
        <ul>
          {users &&
            users.map((user) => {
              return (
                <li key={user.id} className="flex items-center gap-4 mx-2 mb-4">
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
