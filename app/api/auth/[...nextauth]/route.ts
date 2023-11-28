import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {label: 'Email', type: 'email'},
                password: {label: 'Senha', type: 'password'}
            },
            async authorize(credentials, token)
            {
                const response = await fetch("https://www.sueliton.live/api/collections/users/auth-with-password", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        identity: credentials?.email,
                        password: credentials?.password,
                    }),
                });

                if (response.status === 200) {
                    //Logou
                    const data = await response.json()

                    const {record, token} = data;
                    record.pbtoken = token;
                    //token = pbtoken
                    return record
                }
                return null
            }
        })
    ],
    callbacks: {
        jwt: ({token, user}) => {
            const customUser = user as unknown as any
            
            

            if(user)
            {

                return {
                    ...token,
                    role: customUser.tipo,
                    //pbtoken: customUser.pbtoken
                }
            }
            return token
        },
        session: async ({session, token}) => {
            return {
                ...session,
                user: {
                    name: token.name,
                    email: token.email,
                    role: token.role,
                    //pbtoken: token.pbtoken
                }
            }
        }
    },
    pages: {
        signIn: '/auth/login'
    }
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }