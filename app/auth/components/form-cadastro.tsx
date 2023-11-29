'use client'

//import { signIn } from "next-auth/react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

const SignUpForm = () => {

    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')
    const [name, setName] = useState('')
    const [error, setError] = useState('')


    const handleSignUp = async (e: React.FormEvent) => {
        
        e.preventDefault()

        try {
            const response = await fetch("/api/auth/register", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                        cpassword: cpassword,
                        name: name
                    }),
            });

            const f = await response.json();
            
            if(f.code === 200)
            {
                const responseLogin = await signIn('credentials', {
                    redirect: false,
                    email,
                    password
                })

                if(!responseLogin?.error)
                {
                    router.push('/')
                    router.refresh()
                }
                else {
                    router.push('/auth/login')
                    router.refresh()
                }
            }
            else
            {
                setError(f.message)
            }
            /* 
            const response = await fetch("https://www.sueliton.live/api/collections/usuariosgm/records", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                        passwordConfirm: cpassword,
                        nivel: 1
                    }),
            });

            if (response.status === 200) {

                const data = await response.json()

                console.log(data)

            }
            else
            {
                setError("Não foi possível fazer o cadastro")
            }*/
        } catch (error) {
            console.log(error)
        }
        
    
    }

    return (<div className="w-full h-screen flex items-center justify-center">
        <form className="p-10 border rounded-lg w-96" onSubmit={handleSignUp}>

        <h1 className="text-3x1 font-bold mb-4">Cadastro</h1>
        <p className="text-sm text-slate-700 mb-10">Faça parte da família GameMatch</p>
        <div className="flex flex-col">
        <div className="flex flex-col gap-1 mb-6 ">
                <label htmlFor="name">Nome Completo</label>
                <input 
                    type="text" 
                    name="name" 
                    onChange={(e) => setName(e.target.value)} 
                    className="border rounded w-fit w-full p-3"
                />
            </div>
            <div className="flex flex-col gap-1 mb-6 ">
                <label htmlFor="email">E-mail</label>
                <input 
                    type="email" 
                    name="email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="border rounded w-fit w-full p-3"
                />
            </div>
            <div className="flex flex-col gap-1 mb-6">
                <label htmlFor="password">Senha</label>
                <input 
                    type="password" 
                    name="password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="border rounded w-fit w-full p-3"
                />
            </div>
            <div className="flex flex-col gap-1 mb-6">
                <label htmlFor="cpassword">Confirme a senha</label>
                <input 
                    type="password" 
                    name="cpassword" 
                    onChange={(e) => setCPassword(e.target.value)} 
                    className="border rounded w-fit w-full p-3"
                />
            </div>
            {error && <span className="text-red-400 text-sm block mt-2">{error}</span>}
            <button
            type="submit"
            className="mt-10 bg-blue-900 text-slate-50 p-3 rounded">Cadastrar</button>
        </div>


        </form>
    </div>
    )
}

export { SignUpForm }