import React from "react";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Button from "@/app/components/Button";
import ButtonSignIn from "@/app/components/ButtonSignIn";
import Recommendation from "./Recommendation";

export default async function LeftBar() {
  const session: any = await getServerSession(authOptions);

  return (
    <div className="hidden sm:block sm:col-span-3">
      {session && (
        <div className="grid grid-cols-12">
          <div className="mt-2 col-span-10 col-start-2 border text-center bg-white text-slate-900 text-lg p-2 rounded-3xl font-bold">
            <Button />
          </div>
          <div className="col-span-10 col-start-2 h-[40vh] bg-[#16181C] w-full rounded-lg mt-9 overflow-y-scroll scrollbar-thin">
            <Recommendation id={session.id} />
          </div>
        </div>
      )}
      {!session && (
        <div className="p-2">
          <div className="grid grid-cols-12">
            <div className="col-span-4 font-extrabold text-3xl">New to X?</div>
            <div className="col-span-12 text-slate-400 font-light my-2 text-sm">
              Sign up now to get your own personalized timeline!
            </div>
            <div className="mt-2 col-span-10 col-start-2 border text-center bg-white text-slate-900 text-lg p-2 rounded-3xl font-bold">
              <ButtonSignIn text="Sign up" />
            </div>
            <div className="mt-2 col-span-10 col-start-2 border text-center bg-white text-slate-900 text-lg p-2 rounded-3xl font-bold">
              <ButtonSignIn text="Create account" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
