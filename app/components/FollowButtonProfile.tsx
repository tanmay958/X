"use client";
import React, { useEffect, useState } from "react";
import { Chain } from "@/client/zeus";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
const chain = Chain(process.env.NEXT_PUBLIC_GRAPHQL as string);
const follow_state: string =
  " hover:opacity-75 text-black bg-white font-semibold py-1 px-5 border border-white hover:border-transparent rounded-full";
const following_state: string =
  " bg-transparent hover:bg-[#352022] text-white  font-semibold py-1 px-5 border border-white hover:border-transparent hover:text-[#CB2D37] rounded-full";
function FollowButtonProfile({ user_id }: { user_id: any }) {
  const [followState, SetFollowState] = useState("...");
  const [cssFollow, setCssFollow] = useState(follow_state);
  const { data: session } = useSession();
  getFollowState();
  async function getFollowState() {
    const data = await chain("query")({
      isFollowing: [
        {
          followerId: Number(session?.id),
          followingId: Number(user_id),
        },
        {
          value: true,
        },
      ],
    });
    if (data.isFollowing.value === true) SetFollowState("Unfollow");
    else SetFollowState("Follow");
  }
  async function OnclickHandler() {
    toast.success("reached");
    if (followState == "Follow") {
      const result = await chain("mutation")({
        follow: [
          {
            followerId: Number(session?.id),
            followingId: Number(user_id),
          },
          {
            success: true,
            message: true,
          },
        ],
      });
      if (result.follow.success) {
        toast.success(result.follow.message);
        SetFollowState("Unfollow");
        setCssFollow(following_state);
      }
    }
    if (followState == "Unfollow") {
      const result = await chain("mutation")({
        unfollow: [
          {
            followerId: Number(session?.id),
            followingId: Number(user_id),
          },
          {
            success: true,
            message: true,
          },
        ],
      });
      if (result.unfollow.success) {
        toast.success(result.unfollow.message);
        SetFollowState("Follow");
        setCssFollow(follow_state);
      }
    }
  }
  return (
    <button className={cssFollow} onClick={() => OnclickHandler()}>
      {followState}
    </button>
  );
}

export default FollowButtonProfile;
