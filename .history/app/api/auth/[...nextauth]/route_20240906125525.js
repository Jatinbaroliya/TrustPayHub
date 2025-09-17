import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"

export const authoptions = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    // ...add more providers here
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if(account.provider == "github")
      //connect to the database
    
    }
  }

})

export { authoptions as GET, authoptions as POST }
