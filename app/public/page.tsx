'use client'

import { useSession } from "next-auth/react"

export default function PublicPage() {

    const { data: session } = useSession()

    return (
        <div className="w-full max-w-screen-x1 h-screen flex-col flex justify-center items-center">
            <h1>Public Page</h1>
            {session && <pre className="bg-slate-900 text-slate-50 p-10 rounded-md w-full">{JSON.stringify(session, null, 2)}</pre>}
            {session && session.user.categorias?.join(',')}
        
        </div>
    )

}