"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

function Button() {
  console.log("tnamam");
  return <button onClick={() => signOut()}>Logout</button>;
}

export default Button;
