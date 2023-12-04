
import { ChangeNameForm } from "../components/form-change-name";
import { NewLoginForm } from "../components/form-login-v2";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "[GameMatch}: Login",  
  description: "Entre na sua conta",
  // other metadata
};

export default async function LoginPage() {


    return (
        <ChangeNameForm></ChangeNameForm>
    )
    
        

}