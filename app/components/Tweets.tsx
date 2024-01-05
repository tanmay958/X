"use client";
import { useQuery } from "@tanstack/react-query";
import { graphqlClient } from "@/client/api";
import { getAllTweetsHelper } from "@/graphql/tweet";
import { Chain } from "../../client/zeus";
import FeedCard from "@/components/FeedCard";
const chain = Chain("http://localhost:8000/graphql");
const helper = async () => {
  const data = await chain("query")({
    getAllTweets: {
      content: true,
      imageUrl: true,
      id: true,
      author: {
        id: true,
        profileImageURL: true,
        firstName: true,
      },
    },
  });
  return data;
};
const Tweets = () => {
  //   helper();
  const { data, error, isLoading } = useQuery({
    queryKey: ["use-Tweets"],
    queryFn: helper,
  });
  if (isLoading) return <h1>loading....</h1>;

  return data?.getAllTweets?.map((item) => (
    <FeedCard key={item.id} payload={item} />
  ));
};
export default Tweets;
