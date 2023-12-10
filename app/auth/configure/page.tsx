
import { getServerSession } from "next-auth";
import { FormConfigure } from "../components/form-configure";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function SignUpPage() {

    const session = await getServerSession(authOptions);
    let n:number = 2

    if(session.user.plataforma == 'pc')
    {
        n = 0
    }
    else if(session.user.plataforma == 'browser')
    {
        n = 1
    }


    if(session)
    {
        return (
            <FormConfigure platf={n} meusgeneros={session.user.categorias}  logado={true}></FormConfigure>
        )
    }
    return (
        <FormConfigure logado={false} meusgeneros={[]}  platf={0}  ></FormConfigure>
    )

    

}