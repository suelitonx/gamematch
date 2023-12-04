import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../[...nextauth]/route";

export async function POST(request: Request) {

    const session = await getServerSession(authOptions);

    if(session === null)
    {
        return NextResponse.json({message: 'Você não está logado!', code: 400})
    }

    
    try {
        const {categoryas, plat} = await request.json();

        if(categoryas === null || plat === null || categoryas === undefined || plat === undefined)
        {
            return NextResponse.json({message: 'Categoria(s) ou plataforma(s) não válidas.', code: 400})
        }

        const link = `https://www.sueliton.live/api/collections/usuariosgm/records/${session.user.id}`

        const response = await fetch(link, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': session.user.pbtoken
            },
            body: JSON.stringify({
                categorias: categoryas,
                plataforma: plat
            }),
        });

        if (response.status !== 200) {
            return NextResponse.json({message: 'Não foi possível fazer a configuração', code: 400})
        }

        
    } catch (error) {
        return NextResponse.json({message: 'Não foi possível fazer a configuração', code: 400})
    }

    

    return NextResponse.json({message: 'Configuração realizada!', code: 200})


}