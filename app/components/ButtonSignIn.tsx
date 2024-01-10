"use client";
import { signIn } from "next-auth/react";
import React from "react";

interface ButtonSignInProps {
  text: string;
}

const ButtonSignIn: React.FC<ButtonSignInProps> = ({ text }) => {
  return <button onClick={() => signIn()}>{text}</button>;
};

export default ButtonSignIn;
