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
                  <div className="relative w-14 h-14">
                    <img
                      className="rounded-full w-full h-full object-cover"
                      src={user.photoURL}
                      alt="avatar"
                    />
                    <TbSquareRoundedFilled
                      className={`absolute top-10.5 right-1 ${
                        user.online ? "text-green-500" : "text-gray-500"
                      }`}
                      size={16}
                      s
                    />
                  </div>

                  <div className="hidden sm:block">
                    <h3 className="font-semibold">{user.displayName}</h3>
                    <p className="text-sm">{user.email}</p>
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
