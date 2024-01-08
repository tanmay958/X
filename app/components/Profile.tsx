"use server";
import React from "react";
import Image from "next/image";
import { IoArrowBackOutline } from "react-icons/io5";
import ProfileTweetCard from "./ProfileTweetCard";

function Profile({
  data,
  followerList,
  followingList,
}: {
  data: any;
  followerList: any;
  followingList: any;
}) {
  return (
    <div>
      <nav className="w-full h-10 md:h-14 flex  gap-3 mb-1">
        <div className="text-xl p-4 opacity-70  rounded-full hover:bg-slate-700 w-fit">
          <IoArrowBackOutline />
        </div>
        <div className="pt-2 pl-1">
          <div className="font-extrabold text-xl text-slate-50 mb-0 pb-0 ">
            {data.firstName}
          </div>
          <p className="text-slate-500 mt-0 pt-0">
            {data.Tweets.length + " Tweets"}{" "}
          </p>
        </div>
      </nav>
      <div className="hover:underline">
        <span className="font-semibold text-base text-white">
          {followerList.length}
        </span>
        <span className="font-light text-gray-600 text-base ml-2">
          Followers
        </span>
      </div>
      <div className="hover:underline">
        <span className="font-semibold text-base text-white">
          {followingList.length}
        </span>
        <span className="font-light text-gray-600 text-base ml-2">
          Following
        </span>
      </div>

      <div
        className="w-full bg-cover bg-no-repeat bg-center"
        style={{
          height: 200,
          backgroundImage:
            `url(` +
            "https://pbs.twimg.com/profile_banners/105669760/1700197631" +
            `)`,
        }}
      >
        <Image
          className="opacity-0 w-full h-full"
          src="https://pbs.twimg.com/profile_banners/2161323234/1585151401/600x200"
          alt=""
          width={100}
          height={100}
        />
      </div>
      <div className="relative flex w-full">
        <div className="flex flex-1">
          <div style={{ marginTop: `-6rem` }}>
            <div
              style={{ height: `9rem`, width: `9rem` }}
              className="md rounded-full relative avatar"
            >
              <Image
                style={{ height: `9rem`, width: `9rem` }}
                src={data.profileImageURL}
                alt=""
                height={50}
                width={50}
                className="md rounded-full relative border-4 border-gray-900"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-slate-800">
        {data.Tweets.map((item: any) => (
          <ProfileTweetCard
            key={item.id}
            payload={item}
            user={{
              profileImageURL: data.profileImageURL,
              firstName: data.firstName,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Profile;
