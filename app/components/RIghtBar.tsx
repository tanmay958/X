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
    <div className="col-span-2 sm:col-span-3 sm:relative  ">
      {/* <div className="w-full  my-4 sm:p-3  hover:bg-slate-900 sm:h-fit sm:w-fit sm:rounded-full sm:transition-all sm:hover:cursor-pointer">
        <BsTwitterX className="sm:text-3xl w-full " />
      </div>
      <div className="sm :mt-4 sm:text-2xl sm:font-medium ">
        <ul>
          {SidebarMenuItems.map((item) => (
            <div
              className="sm:py-2 sm:mb-3  hover:bg-slate-900 sm:w-fit sm:h-fit sm:rounded-full w-full "
              key={item.id}
            >
              <li className="sm:flex sm:justify-start sm:items-center ">
                <span className="sm:text-3xl ">{item.icon}</span>
                <span className="hidden sm:block sm:text-xl">
                  {item.title}{" "}
                </span>
              </li>
            </div>
          ))}
        </ul>
      </div> */}
      <div className="hidden sm:block ">
        <div className="ml-[105px] rounded-full mt-2  hover:bg-slate-900 w-fit  p-2">
          <BsTwitterX className="text-3xl  " />
        </div>
        <div className="flex-col ">
          {SidebarMenuItems.map((item) => (
            <div
              key={item.id}
              className="flex ml-24 my-3  hover:bg-slate-900 rounded-full p-3"
            >
              <span className="text-3xl">{item.icon}</span>{" "}
              <span className="text-lg font-bold ml-2 "> {item.title}</span>
            </div>
          ))}
        </div>
        <button className=" hidden sm:block ml-24 sm:my-5 sm:bg-[#1D9BF0]  sm:p-3 sm:w-2/3 sm:rounded-full sm:mt-5 sm:font-extrabold hover:opacity-75">
          Post
        </button>
      </div>
      <div className="block sm:hidden">
        <div className="w-full  ">
          <BsTwitterX className="text-5xl my-3 mx-3" />
        </div>
        <div className="flex-col">
          {SidebarMenuItems.map((item) => (
            <div key={item.id} className="text-4xl my-10  mx-4">
              {item.icon}
            </div>
          ))}
        </div>
      </div>

      {session && session.user && (
        // <div className="absolute bottom-2 grid grid-cols-12 bg-slate-950 gap-2 hover:bg-slate-900 hover:rounded-full p-2">
        //   <div className="col-span-3">
        //     <Image
        //       src={session?.user?.image}
        //       width={50}
        //       height={50}
        //       alt="profile image"
        //       className="rounded-full"
        //     />
        //   </div>
        //   <div className="flex col-span-6 items-center justify-center">
        //     {session?.user.name}
        //   </div>
        //   <div className=" col-span-3 flex items-center justify-center">
        //     <SlOptions />
        //   </div>
        // </div>
        <div className="absolute bottom-2 ml-3 sm:ml-24 ">
          <div className="flex gap-2  rounded-full hover:bg-slate-900 justify-between px-2 py-1">
            <div className="flex gap-2">
              <Image
                src={session?.user?.image}
                width={45}
                height={45}
                alt="profile image"
                className="rounded-full"
              />
              <div className="hidden sm:block  h-fit w-fit my-auto  font-semibold text-lg">
                {session.user.name}
              </div>
            </div>

            <div className="hidden sm:block h-fit w-fit my-auto ">
              <SlOptions />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
