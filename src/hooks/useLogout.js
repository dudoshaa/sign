import { useState } from "react";
import { auth } from "../firebase/config";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { logOut } from "../app/features/userSlice";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const useLogout = () => {
  const dispatch = useDispatch();
  const [isPending, setIsPending] = useState(false);

  const logout = async (email, password) => {
    setIsPending(true);
    try {
      const user = doc(db, "users", auth.currentUser.uid);

      await updateDoc(user, {
        online: false,
        lastSeen: new Date(),
      });
      await signOut(auth);
      dispatch(logOut());
      toast.success(`See you`);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return { isPending, logout };
};
