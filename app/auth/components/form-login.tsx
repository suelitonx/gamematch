'use client'

import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

const LoginForm = () => {

    const router = useRouter()

    const [error, setError] = useState('')

    const handleCreateAccount = () => {
        router.push('/auth/signup');
      };

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        
        const formData = new FormData(e.currentTarget)

        const email = formData.get('email');
        const password = formData.get('password');


        try {
            const response = await signIn('credentials', {
                redirect: false,
                email,
                password
            })

            console.log('LOGIN RESPONSE: ', response)

            if(!response?.error)
            {
                
                router.push('/')
                router.refresh()
                
            }
            else {
                console.log(response?.error)
                setError("Email ou senha inválidas.")
            }

        } catch (error) {
            console.log('LOGIN ERROR: ', error)
        }

        


    }

    return (<div className="w-full h-screen flex items-center justify-center">
        <form className="p-10 border rounded-lg w-96" onSubmit={handleLogin}>

        <h1 className="text-3x1 font-bold mb-4">Login</h1>
        <p className="text-sm text-slate-700 mb-10">Faça o login para continuar</p>
        <div className="flex flex-col">
            <div className="flex flex-col gap-1 mb-6 ">
                <label htmlFor="email">E-mail</label>
                <input 
                    type="email" 
                    name="email" 
                    className="border rounded w-fit w-full p-3"
                />
            </div>
            <div className="flex flex-col gap-1 mb-6">
                <label htmlFor="password">Senha</label>
                <input 
                    type="password" 
                    name="password" 
                    className="border rounded w-fit w-full p-3"
                />
            </div>
            {error && <span className="text-red-400 text-sm block mt-2">{error}</span>}
            <button
            type="submit"
            className="mt-10 bg-blue-900 text-slate-50 p-3 rounded">Entrar</button>
            <button
          type="button" 
          onClick={handleCreateAccount}
          className="mt-2 border border-blue-900 text-blue-900 text-slate-50 p-3 rounded"
        >
          Cadastra-se
        </button>
        </div>


        </form>
    </div>
    )

}

export { LoginForm }