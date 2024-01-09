import React from "react";
import Image from "next/image";
import FollowButton from "./FollowButton";

export default function RecommendUser({
  name,
  profileImageURL,
  user_id,
  id,
}: {
  id: any;
  user_id: any;
  name: any;
  profileImageURL: any;
}) {
  return (
    <div className="w-full hover:bg-slate-950 rounded-sm flex items-center justify-between gap-5">
      <div className="flex gap-3 mb-2">
        <Image
          src={profileImageURL}
          alt={name + "image"}
          width={40}
          height={40}
          className="rounded-full"
        />

        <p className="text-l text-white font-bold">{name}</p>
      </div>
      <FollowButton id={id} userId={user_id} />
    </div>
  );
}
