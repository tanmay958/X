"use server";
import { Chain } from "@/client/zeus";
const chain = Chain("http://localhost:8000/graphql");
async function getAllTweet() {
  try {
    const data = await chain("query")({
      getAllTweets: {
        content: true,
        imageUrl: true,
        author: {
          email: true,
          profileImageURL: true,
          firstName: true,
        },
      },
    });
    console.log(data);
    return data;
  } catch (err) {
    console.log("this is the problem", err);
  }
}

export default getAllTweet;
