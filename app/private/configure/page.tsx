
import { getServerSession } from "next-auth";
import { FormConfigure } from "../../auth/components/form-configure";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function SignUpPage() {

    const session = await getServerSession(authOptions);

    if(session)
    {
        return (
            <FormConfigure platf={session.user.plataforma} logado={true}></FormConfigure>
        )
    }
    return (
        <FormConfigure logado={false} platf="all" ></FormConfigure>
    )

    

}