"use client";
import { signIn } from "next-auth/react";
import React from "react";

export default function ButtonSignIn({ text }) {
  return <button onClick={() => signIn()}>{text}</button>;
}
