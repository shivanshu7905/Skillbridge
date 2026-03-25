import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    callbacks: {
        async session({ session, token }) {
            if (session.user) {
                session.user.username = token.login;
            }
            return session;
        },
        async jwt({ token, profile }) {
            if (profile) {
                token.login = profile.login;
            }
            return token;
        },
    },
    pages: {
        signIn: "/",
    },
};

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);