import { Chain } from "@/client/zeus";

const chain = Chain("http://localhost:8000/graphql");
async function main() {
  const data = await chain("query")({
    getAllTweets: {
      id: true,
      content: true,
      imageUrl: true,
      author: {
        id: true,
        profileImageURL: true,
      },
    },
  });
  console.log("hye");
  console.log(data);
  console.log("----", data.getAllTweets);
}
main();
