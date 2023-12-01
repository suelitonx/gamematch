import { getServerSession } from "next-auth";
import { NewLoginForm } from "../components/form-login-v2";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "[GameMatch}: Login",  
  description: "Entre na sua conta",
  // other metadata
};

export default async function LoginPage() {

    const session = await getServerSession();

    console.log("LOGIN PAGE SESSION: ", session)

    if(!session)
    {
        return (
            <NewLoginForm logado={false}></NewLoginForm>
        )
    }
    else
    {
        return (
            <NewLoginForm logado={true}></NewLoginForm>
        )
    }
    
        

}