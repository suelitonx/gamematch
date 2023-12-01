import Link from "next/link";

export function DeniedPage() {

    return (
        <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-3x1 mb-6">Acesso restrito!</h1>
        <h5 className="text-base t ext-slate-600 mb-10">Você não tem permissão.</h5>
        <Link className="p-4 bg-amber-950 text-slate-50" href="/">Voltar</Link>
        </div>
    )


}