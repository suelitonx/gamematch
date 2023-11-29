import Link from "next/link"
import { SignOutButton } from "./sign-out-button"
import { getServerSession } from "next-auth"

const Header = async  () => {

    const session = await getServerSession()

    if(session)
    {
        console.log("HEADER SESSION DETECT:", session?.user)
        
    }

    return  (
    
    <header className="fixed w-full h-20 flex items-center bg-blue-400 text-slate-450">
        <nav className="w-full flex items-center justify-between m-auto max-w-screen-x1 ">
            <Link href="/" className="ml-2">Logo</Link>
            <ul className="flex items-center gap-10">
                <li><Link href="/">Inicio</Link></li>
                <li><Link href="/public">Publica</Link></li>
                
                {session ? <li><Link href="/private">Privada</Link></li> : <li><Link href="/private" className="mr-5">Privada</Link></li>}
                {session && <li className="mr-5"><SignOutButton /></li>}
            </ul>
        </nav>
    </header>
    

    )
}

export { Header }