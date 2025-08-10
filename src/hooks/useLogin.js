import { useState } from "react";
import { auth, db } from "../firebase/config";
import { useDispatch } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";

import { logIn } from "../app/features/userSlice";
import { doc, updateDoc } from "firebase/firestore";

export const useLogin = () => {
  const dispatch = useDispatch();
  const [isPending, setIsPending] = useState(false);

  const login = async (email, password) => {
    setIsPending(true);
    try {
      const req = await signInWithEmailAndPassword(auth, email, password);
      if (!req.user) {
        throw new Error("User not found");
      }
      const user = doc(db, "users", auth.currentUser.uid);
      await updateDoc(user, {
        online: true,
        lastSeen: "",
      });
      dispatch(logIn(req.user));

      toast.success(`Welcome back, ${auth.currentUser.displayName}`);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return { isPending, login };
};
