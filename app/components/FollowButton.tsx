"use client";
import React from "react";
import toast from "react-hot-toast";
import { useState } from "react";
import { Chain } from "@/client/zeus";
const chain = Chain("http://localhost:8000/graphql");
const follow_state: string =
  " hover:opacity-75 text-black bg-white font-semibold py-1 px-5 border border-white hover:border-transparent rounded-full";
const following_state: string =
  " bg-transparent hover:bg-[#352022] text-white  font-semibold py-1 px-5 border border-white hover:border-transparent hover:text-[#CB2D37] rounded-full";

export default function FollowButton({ id, userId }: { id: any; userId: any }) {
  const [follow_btn, setFollow_btn] = useState("Follow");
  const [cssFollow, setCssFollow] = useState(follow_state);
  async function OnclickHandler() {
    toast.success("reached");
    if (follow_btn == "Follow") {
      const result = await chain("mutation")({
        follow: [
          {
            followerId: Number(id),
            followingId: Number(userId),
          },
          {
            success: true,
            message: true,
          },
        ],
      });
      if (result.follow.success) {
        toast.success(result.follow.message);
        setFollow_btn("Unfollow");
        setCssFollow(following_state);
      }
    }
    if (follow_btn == "Unfollow") {
      const result = await chain("mutation")({
        unfollow: [
          {
            followerId: Number(id),
            followingId: Number(userId),
          },
          {
            success: true,
            message: true,
          },
        ],
      });
      if (result.unfollow.success) {
        toast.success(result.unfollow.message);
        setFollow_btn("Follow");
        setCssFollow(follow_state);
      }
    }
  }

  return (
    <button className={cssFollow} onClick={() => OnclickHandler()}>
      {follow_btn}
    </button>
  );
}
