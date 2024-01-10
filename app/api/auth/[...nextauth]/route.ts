import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

import { Chain } from "@/client/zeus";

const chain = Chain(process.env.NEXT_PUBLIC_GRAPHQL as string);

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: "71806cf71fdd9454a4ac",
      clientSecret: "efe5200928cfb2542b0c5f3f351c201da356128d",
    }),
    // ...add more providers here
  ],

  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async session({ session }: any) {
      const data = await chain("mutation")({
        userSignIn: [
          {
            payload: {
              email: session.user.email,
              firstName: session.user.name,
              profileImage: session.user.image,
            },
          },
          true,
        ],
      });

      session.id = data.userSignIn;
      return session;
    },
  },
};
// export default NextAuth(authOptions);
export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
