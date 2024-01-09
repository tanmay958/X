import React from "react";
import { Chain } from "@/client/zeus";

import Profile from "../components/Profile";

const chain = Chain(process.env.NEXT_PUBLIC_GRAPHQL as string);

export const dynamic = "force-dynamic";
const getUserInfo = async (id: any) => {
  const data = await chain("query")({
    getUserProfile: [
      {
        id: Number(id),
      },
      {
        email: true,
        profileImageURL: true,
        id: true,
        firstName: true,
        Tweets: {
          id: true,
          content: true,
          imageUrl: true,
        },
      },
    ],
  });

  return data;
};

const getFollower = async (id: any) => {
  const followers = await chain("query")({
    getAllFollower: [
      {
        id: Number(id),
      },
      {
        id: true,
        email: true,
        firstName: true,
        profileImageURL: true,
      },
    ],
  });
  return followers.getAllFollower;
};
const getFollowing = async (id: any) => {
  const followings = await chain("query")({
    getAllFollowing: [
      {
        id: Number(id),
      },
      {
        id: true,
        email: true,
        firstName: true,
        profileImageURL: true,
      },
    ],
  });
  return followings.getAllFollowing;
};
export default async function ProfiePage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getUserInfo(params.slug);
  const followerList = await getFollower(params.slug);
  const followingList = await getFollowing(params.slug);

  return (
    <div className="col-span-6 border-r-[1px] border-l-[1px] border-slate-800 overflow-y-scroll">
      {data.getUserProfile === null ? (
        <h1>No such user</h1>
      ) : (
        <>
          <Profile
            data={data.getUserProfile}
            followerList={followerList}
            followingList={followingList}
          />
        </>
      )}
    </div>
  );
}
