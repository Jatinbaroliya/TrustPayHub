import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import mongoose from "mongoose";
import User from "@/models/User";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectdb";

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
      if(account.provider == "github"){
        //check if the user already exists in the database 
        const currentUser = await User.findOne({email: email})
        if(!currentUser)
        {
            //create a new user
            const newUser = await User.create({
               email: user.email,
               username: user.email.split("@")[0],
            })

            user.name = newUser.username
            console.log(newUser);
        }
        else
        {
            user.name = currentUser.username
        }
        return true;
      }
    },

    async session({ session, user, token }) {
      const dbUser = await User.find({email: email})
      session.user.name = dbUser.username
      return session
    },

  }

})

export { authoptions as GET, authoptions as POST }
