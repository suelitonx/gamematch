import Link from "next/link"
import { SignOutButton } from "./sign-out-button"
import { getServerSession } from "next-auth"

import Logo from '../public/gm.png'
import Image from "next/image"
import NavBarOne from "./navbarone"
import NavBarTwo from "./navbartwo"

const Header = async  () => {

    const session = await getServerSession()

    if(session)
    {
        console.log("HEADER SESSION DETECT:", session?.user)
    }

    if(session)
    {
        return ( <NavBarTwo /> )
    }
    return  ( <NavBarOne /> )
}

export { Header }

/*
<header className="fixed w-full h-20 flex items-center bg-blue-900 text-slate-450">
        <nav className="w-full flex items-center justify-between m-auto max-w-screen-x1 ">
            <Link href="/" className="ml-2"> <Image src={Logo} alt="Logo" height={45} ></Image>  </Link>
            <ul className="flex items-center gap-10">
                <li><Link className="text-white hover:text-[#50d71e]" href="/">Inicio</Link></li>
                <li><Link className="text-white hover:text-[#50d71e]" href="/public">Publica</Link></li>
                
                {session ? <li><Link href="/private" className="text-white hover:text-[#50d71e]">Privada</Link></li> : <li><Link href="/private" className="mr-5 text-white hover:text-[#50d71e]">Login</Link></li>}
                {session && <li className="mr-5" ><SignOutButton /></li>}
            </ul>
        </nav>
    </header>
*/