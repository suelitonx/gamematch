import { NextResponse } from "next/server";

function validateEmail(email:string) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validateName(nome:string) {
    var re = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/
    return re.test(nome);

}

export async function POST(request: Request) {

    try {
        const {email, password, cpassword, name} = await request.json();

        if(name.length <= 3 || !validateName(name))
        {
            return NextResponse.json({message: 'Nome inválido.', code: 400})
        }

        if(!validateEmail(email))
        {
            return NextResponse.json({message: 'E-mail inválido', code: 400})
        }

        if(password.length < 8 || cpassword.length < 8)
        {
            return NextResponse.json({message: 'Senha muito curta!', code: 400})
        }

        if(password !== cpassword)
        {
            return NextResponse.json({message: 'Senhas não coincidem.', code: 400})
        }

        const response = await fetch("https://www.sueliton.live/api/collections/usuariosgm/records", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                passwordConfirm: cpassword,
                name: name,
                nivel: 1,
                categorias: [],
                plataforma: ''
            }),
        });

        if (response.status !== 200) {
            return NextResponse.json({message: 'Não foi possível fazer o cadastro', code: 400})
        }

        
    } catch (error) {
        return NextResponse.json({message: 'Não foi possível fazer o cadastro', code: 400})
    }

    return NextResponse.json({message: 'success', code: 200})


}