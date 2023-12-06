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
        const {idjogo, comentario, valor} = await request.json();

        if(idjogo === null || comentario === null || valor === null)
        {
            return NextResponse.json({message: 'Não foi possível avaliar o jogo.', code: 400})
        }

        const response = await fetch("https://www.sueliton.live/api/collections/avaliacaogm/records", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': session.user.pbtoken
            },
            body: JSON.stringify({
                idjogo: idjogo,
                usuario: session.user.id,
                comentario: comentario,
                valor: valor
            }),
        });

        if (response.status !== 200) {
            return NextResponse.json({message: 'Não foi possível fazer a configuração', code: 400})
        }

        
    } catch (error) {
        return NextResponse.json({message: 'Não foi possível fazer a configuração', code: 400})
    }

    

    return NextResponse.json({message: 'Avaliação enviada com sucesso!', code: 200})


}