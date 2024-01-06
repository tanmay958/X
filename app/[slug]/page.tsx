// export default function Page({ params }: { params: { slug: string } }) {
//   return (<div>
//     My Post: {params.slug}
//     </div>
//     );
// }
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { Chain } from "@/client/zeus";
import Profile from "../components/Profile";
const chain = Chain("http://localhost:8000/graphql");
export const dynamic = "force-dynamic";
// export const revalidate = 1;
const getUserInfo = async (id: any) => {
  console.log(" i am called");
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

export default async function ProfiePage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getUserInfo(params.slug);
  const session = await getServerSession(authOptions);

  return (
    <div className="col-span-6 border-r-[1px] border-l-[1px] border-slate-800 overflow-y-scroll">
      {data.getUserProfile === null ? (
        <h1>No such user</h1>
      ) : (
        <>
          <Profile data={data.getUserProfile} />
        </>
      )}
    </div>
  );
}
