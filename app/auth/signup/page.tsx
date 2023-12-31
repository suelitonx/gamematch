
import { getServerSession } from "next-auth";
import { NewSignUpForm } from "../components/form-cadastro-v2";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "[GameMatch}: Cadastro",  
  description: "Faça uma nova conta!",
  // other metadata
};

export default async function SignUpPage() {

    const session = await getServerSession();

    //console.log("REGISTER SESSION: ", session)

    if(session)
    {
        return (
            <NewSignUpForm logado={true}></NewSignUpForm>
        )
    }
    return (
        <NewSignUpForm logado={false}></NewSignUpForm>
    )

    

}