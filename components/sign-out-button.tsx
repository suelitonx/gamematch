'use client'

import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

export const SignOutButton = () => {

    const router = useRouter()

    async function logout(){
        await signOut()
    }

    return (   
        <button onClick={logout} className="text-white hover:text-[#50d71e]">Sair</button>
    )

}