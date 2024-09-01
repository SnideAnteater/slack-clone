"use client";
import React, { useState } from "react";
import { SignInFlow } from "../types";
import SignInCard from "./SignInCard";
import SignUpCard from "./SignUpCard";

const AuthScreen = () => {
  const [signState, setSignState] = useState<SignInFlow>("signIn");
  return (
    <div className=" h-full flex items-center justify-center bg-[#5c3b58]">
      <div className=" md:h-auto md:w-{420px]">
        {signState === "signIn" ? (
          <SignInCard setState={setSignState} />
        ) : (
          <SignUpCard setState={setSignState} />
        )}
      </div>
    </div>
  );
};

export default AuthScreen;
