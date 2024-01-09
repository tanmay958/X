import React from "react";
import Image from "next/image";
import { FaRegHeart, FaRegCommentAlt } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import Link from "next/link";

const BlueHashtags = (text: string) => {
  const tweetText = text;

  const words = tweetText.split(" ");

  const styledWords = words.map((word, index) =>
    word.startsWith("#") ? (
      <span key={index} style={{ color: "#1A89D4" }}>
        {word}{" "}
      </span>
    ) : (
      <span key={index}>{word} </span>
    )
  );
  return styledWords;
};
export default function FeedCard({ payload }: { payload: any }) {
  return (
    <>
      <div className="grid grid-cols-12 border border-x-0 border-t-0 border-b-[1px] border-b-slate-800 p-2">
        <div className=" col-span-2 sm:col-span-1  my-auto   ">
          <Link href={`/${payload.author.id}`} prefetch={true}>
            <Image
              src={payload.author.profileImageURL}
              alt="nothing"
              width={60}
              height={60}
              className="rounded-full"
            />
          </Link>
        </div>
        <div className="col-span-10 sm:col-span-11 sm:col-start-2 px-2 py-1 flex  w-fit">
          <div className="font-extrabold">{payload.author.firstName} </div>
        </div>
        <div className=" col-start-3  col-span-9 sm:col-span-10 sm:col-start-2 px-2 mb-2 ">
          <p className="font-medium text-sm">{BlueHashtags(payload.content)}</p>
        </div>
        <div className="col-span-9 col-start-3 sm:col-span-10 sm:col-start-2 px-2 ">
          {payload.imageUrl && (
            <Image
              src={payload.imageUrl}
              width={100}
              height={100}
              alt="image"
              className=" w-fit h-fit rounded-xl shadow-lg"
            />
          )}
        </div>
        <div className="col-span-10 col-start-2 flex justify-between p-4 text-gray-600">
          <FaRegCommentAlt className="hover:text-blue-400 transition-all" />
          <FaRegHeart className="hover:text-red-400 transition-all " />
          <AiOutlineRetweet className="hover:text-green-400 transition-all" />
          <FiShare className="hover:text-blue-400 transition-all" />
        </div>
      </div>
    </>
  );
}
