import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import mongoose from "mongoose";
import User from "@/models/User";
import Payment from "@/models/Payment";

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
      //connect to the database
        const client = await mongoose.connect("mongodb://localhost:27017")
        //check if the user already exists in the database 
        const currentUser = User.findOne({email: email})
        if(!currentUser)
        {
            //create a new user
            const newUser = new User({
               email: email,
               username: email.split("@")[0],
            })

            await newUser.save();
            user.name = newUser.
        }
      }
    }
  }

})

export { authoptions as GET, authoptions as POST }
