import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

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
};
// export default NextAuth(authOptions);
export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
