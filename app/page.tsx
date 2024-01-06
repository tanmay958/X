import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Tweets from "./components/Tweets";
import PostBox from "./components/PostBox";
export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="col-span-6 border-r-[1px] border-l-[1px] border-slate-800 overflow-y-scroll">
      {session && <PostBox session={session} />}
      <Tweets />
    </div>
  );
}
