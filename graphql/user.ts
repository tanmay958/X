import { graphql } from "../gql";

export const userSignInHelper = graphql(`
  #graphql
  mutation UserSignIn($payload: userSingInPayload!) {
    userSignIn(payload: $payload)
  }
`);
