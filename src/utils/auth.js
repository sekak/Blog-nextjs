import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import School from "next-auth/providers/42-school";
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "./connect"
import { getServerSession } from "next-auth"; 

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            
        }),
        School({
            clientId: process.env.FORTYTWO_CLIENT_ID,
            clientSecret: process.env.FORTYTWO_CLIENT_SECRET,
            secondSecret: process.env.FORTYTWO_SECOND_SECRET, // Add your second secret here
         }),
    ],
}

export const getAuthSession = () => getServerSession(authOptions);