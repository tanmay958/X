"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { LuFileImage } from "react-icons/lu";

const handleSelectImage = () => {
  const input = document.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute("accept", "image/*");
  input.click();
};
export default function PostBox({ session }) {
  return (
    <div className="grid grid-cols-12 pb-5 pt-2 border-b border-slate-800">
      <div className="col-span-1 py-2 pl-2">
        <Image
          src={session.user.image}
          alt="nothing"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      <div className="col-span-10 px-2 pt-2  border-b border-slate-700 max-h-[80vh]">
        <textarea
          placeholder="What happening ?!"
          className="bg-transparent w-full focus:outline-none text-xl "
          rows={4}
        ></textarea>
      </div>
      <div className="col-span-10  col-start-2 px-2 pt-2">
        <div className="flex justify-between items-center">
          <div className="text-[#1D9BF0] text-xl">
            <LuFileImage onClick={handleSelectImage} />
          </div>
          <div>
            <button className="px-3 py-1 bg-[#1D9BF0] rounded-full font-extrabold">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
