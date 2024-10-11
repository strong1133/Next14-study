import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import {User} from "@/repository/types/definitions";
import {NextResponse} from "next/server";

export const { signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        if (credentials.id && credentials.password) {
          // Add you backend code here
          // let loginRes = await backendLogin(credentials.id, credentials.password)
          let loginRes = {
            success : true,
            data : {
              user: {
                ID: "john_doe",
                NAME: "John Doe",
                EMAIL: "email@email.email",
              },
            }
          }
          // Failed logging in
          if (!loginRes.success) return null;
          // Successful log in
          const user = {
            id: loginRes.data.user.ID ?? '',
            name: loginRes.data.user.NAME ?? '',
            email: loginRes.data.user.EMAIL ?? '',
          } as User;


          return user;
        }
        return null;
      },
    })
  ],
  callbacks: {
    // authorized({ auth, request: { nextUrl } }) {
    //   const isLoggedIn = !!auth?.user
    //   // const isOnDashboardRoutes = nextUrl.pathname.startsWith('/')
    //   if (isLoggedIn) {
    //     return Response.redirect(new URL('/', nextUrl))
    //   }
    //
    //   return true;
    // },

    async session({ session, token, user }) {
      // @ts-ignore
      session.user = token.user as User
      return session;
    },
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
});