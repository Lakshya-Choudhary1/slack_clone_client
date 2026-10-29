import React from "react";
import { Route, Routes, Navigate } from "react-router";
import {
  Show,
  SignIn,
  SignInButton,
  SignInWithMetamaskButton,
  SignOutButton,
  SignUp,
  SignUpButton,
  UserButton,
  UserProfile,
  UserAvatar,
  getToken,
  useAuth
} from "@clerk/react";

import HomePage from "./pages/HomePage.jsx";
import AuthPage from "./pages/AuthPage.jsx"
import CallPage from "./pages/CallPage.jsx"

import "./App.jsx";


const App = () => {

  const {isLoaded,isSignedIn} = useAuth();

  if(!isLoaded) return null;

  return (
    <>

    <Routes>

      <Route path="/" element={isSignedIn ? <HomePage /> : <Navigate to={"/auth"} replace />} />

      <Route path="/auth" element={!isSignedIn ? <AuthPage /> : <Navigate to={"/"} replace />} />

      <Route
        path="/call/:path"
        element={isSignedIn ? <CallPage /> : <Navigate to={"/auth"} replace />}
      />

      <Route path="*" element={isSignedIn ? <HomePage /> : <Navigate to={"/auth"} replace />} />
    </Routes>


    </>
  );
};

export default App;
