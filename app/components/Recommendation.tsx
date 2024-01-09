import React from "react";
import { Chain } from "@/client/zeus";
import RecommendUser from "./RecommendUser";
import { RiH1 } from "react-icons/ri";
export const dynamic = "force-dynamic";
const chain = Chain(process.env.NEXT_PUBLIC_GRAPHQL as string);
const getRecomendation = async (id: any) => {
  const recommendeduser = await chain("query")({
    recommend: [
      {
        id: Number(id),
      },
      { id: true, firstName: true, profileImageURL: true },
    ],
  });
  return recommendeduser.recommend;
};

async function Recommendation({ id }: { id: any }) {
  const users: any = await getRecomendation(id);

  return (
    <div className="p-3 ">
      <h1 className="font-bold  text-2xl mb-3">Who to follow</h1>
      {users.length === 0 ? (
        <p className="text-gray-600">All done.. </p>
      ) : (
        users.map((item: any) => (
          <RecommendUser
            id={id}
            key={item.id}
            name={item.firstName}
            profileImageURL={item.profileImageURL}
            user_id={item.id}
          />
        ))
      )}
    </div>
  );
}

export default Recommendation;
