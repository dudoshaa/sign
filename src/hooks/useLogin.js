import { useState } from "react";
import { auth } from "../firebase/config";
import { useDispatch } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";

import { logIn } from "../app/features/userSlice"; 

export const useLogin = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const login = async (email, password) => {
    setIsPending(true);
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      if (!user) {
        throw new Error("User not found");
      }
      dispatch(logIn(user));
      setUser(user);
      toast.success(`Welcome ${user.displayName}`);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return { user, isPending, login };
};
