import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { CgOpenCollective } from "react-icons/cg";
import { Chain } from "@/client/zeus";
import { Darumadrop_One } from "next/font/google";
import { setEngine } from "crypto";
import { graphqlClient } from "@/client/api";
import { userSignInHelper } from "@/graphql/user";
import toast from "react-hot-toast";
const chain = Chain("http://localhost:8000/graphql");

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: "71806cf71fdd9454a4ac",
      clientSecret: "efe5200928cfb2542b0c5f3f351c201da356128d",
    }),
    GoogleProvider({
      clientId:
        "538405567512-4e45ijl4fa7rn91muma5vicdomesoda5.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // ...add more providers here
  ],

  secret: "secret",
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    encryption: true,
  },
  callbacks: {
    async session({ session }: any) {
      const data = await graphqlClient.request(userSignInHelper, {
        payload: {
          email: session.user.email,
          firstName: session.user.name,
          profileImage: session.user.image,
        },
      });
      // const data = await chain("mutation")({
      //   userSignIn: [
      //     {
      //       payload: {
      //         email: session.user.email,
      //         firstName: session.user.name,
      //         profileImage: session.user.image,
      //       },
      //     },
      //     true,
      //   ],
      // });

      session.id = data.userSignIn;
      return session;
    },
  },
};
// export default NextAuth(authOptions);
export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
