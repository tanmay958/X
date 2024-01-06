import React from "react";

import { BsTwitterX } from "react-icons/bs";
import { RiHome5Fill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { FaRegBookmark } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Image from "next/image";
import { SlOptions } from "react-icons/sl";

interface TwitterSidebarButton {
  title: String;
  icon: React.ReactNode;
  id: number;
}
const SidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    id: 1,
    icon: <RiHome5Fill />,
  },
  {
    title: "Explore",
    id: 2,
    icon: <IoSearch />,
  },
  {
    title: "Notification",
    id: 3,
    icon: <IoIosNotificationsOutline />,
  },
  {
    title: "Messages",
    id: 4,
    icon: <HiOutlineEnvelope />,
  },
  {
    title: "Bookmark",
    id: 5,
    icon: <FaRegBookmark />,
  },
  {
    title: "Profile",
    id: 6,
    icon: <CgProfile />,
  },
];

export default async function RightBar() {
  const session = await getServerSession(authOptions);

  return (
    <div className="col-span-3 relative ">
      <div className="p-3  hover:bg-slate-900 h-fit w-fit rounded-full transition-all hover:cursor-pointer">
        <BsTwitterX className="text-3xl" />
      </div>
      <div className="mt-4 text-2xl font-medium">
        <ul>
          {SidebarMenuItems.map((item) => (
            <div
              className="py-2 mb-2 pr-2 pl-2 hover:bg-slate-900 w-fit h-fit rounded-full"
              key={item.id}
            >
              <li className="flex justify-start items-center">
                <span className="text-2xl pr-4">{item.icon}</span>
                <span className="text-xl">{item.title} </span>
              </li>
            </div>
          ))}
        </ul>
      </div>
      <button className="bg-[#1D9BF0]  p-3 w-2/3 rounded-full mt-4 font-extrabold">
        Post
      </button>
      {session && session.user && (
        <div className="absolute bottom-2 grid grid-cols-12 bg-slate-950 gap-2 hover:bg-slate-900 hover:rounded-full p-2">
          <div className="col-span-3">
            <Image
              src={session?.user?.image}
              width={50}
              height={50}
              alt="profile image"
              className="rounded-full"
            />
          </div>
          <div className="flex col-span-6 items-center justify-center">
            {session?.user.name}
          </div>
          <div className=" col-span-3 flex items-center justify-center">
            <SlOptions />
          </div>
        </div>
      )}
    </div>
  );
}
