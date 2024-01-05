"use server";
import { Chain } from "@/client/zeus";
const chain = Chain("http://localhost:8000/graphql");
const postTweet = async (session: any, data: any) => {
  const tweet = await chain("mutation")({
    createTweet: [
      {
        payload: {
          content: data,
          userid: parseInt(session.id),
        },
      },
      {
        author: {
          email: true,
        },
      },
    ],
  });
};
export default postTweet;
