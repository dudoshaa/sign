import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../app/features/userSlice";

export const useLogin = () => {
  const [isPending, setIsPending] = useState(false);

  const login = ( email, password) => {
    console.log( email, password);
  };

  return { login, isPending };
};
