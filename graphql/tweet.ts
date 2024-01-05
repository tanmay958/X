import { graphql } from "../gql";

export const getAllTweetsHelper = graphql(`
  #graphql
  query GetAllTweets {
    getAllTweets {
      content
      imageUrl
      author {
        firstName
        lastName
        profileImageURL
      }
    }
  }
`);
