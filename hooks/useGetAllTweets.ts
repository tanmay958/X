"use client";
import { graphqlClient } from "@/client/api";
import { getAllTweetsHelper } from "../graphql/tweet";
import { useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
async function helper() {
  console.log("i am called");
  const data = await graphqlClient.request(getAllTweetsHelper);
  console.log(data);
  return data;
}
export const useGetAllTweets = () => {
  //   const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: ["all-tweets"],
    queryFn: async () => {
      const data = await graphqlClient.request(getAllTweetsHelper);
      console.log("hye i got called");
      return data;
    },
  });
  console.log(query);
  return { ...query, tweets: query.data?.getAllTweets, myname: "tanmay" };
};
