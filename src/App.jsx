import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import MainLayout from "./layout/MainLayout";
import {
  Contact,
  Home,
  Login,
  Profile,
  SignUp,
  SingleImage,
  OnlineUsers,
} from "./pages";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { logIn, authReady } from "./app/features/userSlice";

function App() {
  const dispatch = useDispatch();
  const { user, isAuthReady } = useSelector((store) => store.user);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "/contact", element: <Contact /> },
        { path: "/singleImage/:id", element: <SingleImage /> },
        { path: "/profile", element: <Profile /> },
        { path: "/users", element: <OnlineUsers /> },
      ],
    },
    { path: "/login", element: user ? <Navigate to="/" /> : <Login /> },
    { path: "/signUp", element: user ? <Navigate to="/" /> : <SignUp /> },
  ]);
  onAuthStateChanged(auth, (user) => {
    if (user?.displayName && user?.photoURL) {
      dispatch(logIn(user));
    }
    dispatch(authReady());
  });
  return <>{isAuthReady && <RouterProvider router={routes} />}</>;
}

export default App;
