import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { RiHome5Fill, RiOctagonFill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { FaRegBookmark } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import FeedCard from "@/components/FeedCard";
import { signIn, signOut, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Button from "@/components/Button";
import ButtonSignIn from "@/components/ButtonSignIn";
import Image from "next/image";
import { SlOptions } from "react-icons/sl";
import PostBox from "@/components/PostBox";

interface TwitterSidebarButton {
  title: String;
  icon: React.ReactNode;
}
const SidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <RiHome5Fill />,
  },
  {
    title: "Explore",
    icon: <IoSearch />,
  },
  {
    title: "Notification",
    icon: <IoIosNotificationsOutline />,
  },
  {
    title: "Messages",
    icon: <HiOutlineEnvelope />,
  },
  {
    title: "Bookmark",
    icon: <FaRegBookmark />,
  },
  {
    title: "Profile",
    icon: <CgProfile />,
  },
];
export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div className="grid grid-cols-12 bg-black w-screen h-screen  gap-4 p-4">
      <div className="col-span-3 pl-28 relative ">
        <div className="p-3  hover:bg-slate-900 h-fit w-fit rounded-full transition-all hover:cursor-pointer">
          <BsTwitterX className="text-3xl" />
        </div>
        <div className="mt-4 text-2xl font-medium">
          <ul>
            {SidebarMenuItems.map((item) => (
              <div
                className="py-2 mb-2 pr-2 pl-2 hover:bg-slate-900 w-fit h-fit rounded-full"
                key={item.title}
              >
                <li
                  className="flex justify-start items-center"
                  key={item.title}
                >
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
        {session && (
          <div className="absolute bottom-2 grid grid-cols-12 bg-slate-950 gap-2 hover:bg-slate-900 hover:rounded-full p-2">
            <div className="col-span-3">
              <Image
                src={session.user?.image}
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
      <div className="col-span-5 border-r-[1px] border-l-[1px] border-slate-800 overflow-y-scroll">
        {session && <PostBox session={session} />}
        <FeedCard />
      </div>
      <div className="col-span-4">
        {session && (
          <div className="grid grid-cols-12">
            <div className="mt-2 col-span-10 col-start-2 border text-center bg-white text-slate-900 text-lg p-2 rounded-3xl font-bold">
              <Button />
            </div>
          </div>
        )}
        {!session && (
          <div className="p-2">
            <div className="grid grid-cols-12">
              <div className="col-span-4 font-extrabold text-3xl">
                New to X?
              </div>
              <div className="col-span-12 text-slate-400 font-light my-2 text-sm">
                Sign up now to get your own personalized timeline!
              </div>
              <div className="mt-2 col-span-10 col-start-2 border text-center bg-white text-slate-900 text-lg p-2 rounded-3xl font-bold">
                <ButtonSignIn text="Sign up" />
              </div>
              <div className="mt-2 col-span-10 col-start-2 border text-center bg-white text-slate-900 text-lg p-2 rounded-3xl font-bold">
                <ButtonSignIn text="Create account" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const session = await getServerSession(context.req, context.res, authOptions);

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       session,
//     },
//   };
// }

// export const getSession = async (context)=>{
//     console.log(context) ;

// }
