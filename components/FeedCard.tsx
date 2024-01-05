import React from "react";
import Image from "next/image";
import { FaRegHeart, FaRegCommentAlt } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
export default function FeedCard({ payload }) {
  console.log(payload);
  return (
    <>
      <div className="grid grid-cols-12 border border-x-0 border-t-0 border-b-[1px] border-b-slate-800">
        <div className="col-span-1  py-2 pl-2">
          <Image
            src={payload.author.profileImageURL}
            alt="nothing"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <div className="col-span-11 col-start-2 p-4 items-center flex">
          <div className="font-extrabold">{payload.author.firstName} </div>
        </div>
        <div className="col-span-10 col-start-2 p-4 ">
          <p>{payload.content}</p>
        </div>
        <div className="col-span-10 col-start-2 flex justify-between p-4">
          <FaRegCommentAlt className="hover:text-blue-400 transition-all" />
          <FaRegHeart className="hover:text-red-400 transition-all " />
          <AiOutlineRetweet className="hover:text-green-400 transition-all" />
          <FiShare className="hover:text-blue-400 transition-all" />
        </div>
      </div>
    </>
  );
}
