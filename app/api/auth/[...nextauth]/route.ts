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
            async authorize(credentials)
            {
                console.log("CREDENCIAIS ENVIADAS AO SERVIDOR: ", credentials?.email, credentials?.password)

                const response = await fetch("https://www.sueliton.live/api/collections/usuariosgm/auth-with-password", {
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
                    return record
                }
                return null
            },
            
        })
    ],
    callbacks: {
        jwt: ({token, user, trigger, session }) => {
            

            if(trigger == "update" && session?.plataforma && session?.categorias)
            {
                token.plataforma = session.plataforma;
                token.categorias = session.categorias;
            }

            const customUser = user as unknown as any

            if(user)
            {
                console.log("TOKEN: ", token)
                return {
                    ...token,
                    nivel: customUser.nivel,
                    categorias: customUser.categorias,
                    plataforma: customUser.plataforma,
                    pbtoken: customUser.pbtoken, 
                    id: customUser.id
                }
            }
            return token
        },
        session: async ({session, token}) => {
            //console.log("SESSÃO: ",session)
            
            return {
                ...session,
                user: {
                    name: token.name,
                    email: token.email,
                    nivel: token.nivel,
                    categorias: token.categorias,
                    plataforma: token.plataforma,
                    pbtoken: token.pbtoken,
                    id: token.id
                }
            }
        },
        
    },
    pages: {
        signIn: '/auth/login',
        newUser: '/auth/signup'
    }
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST, authOptions  }