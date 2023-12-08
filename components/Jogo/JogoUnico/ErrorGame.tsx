import Link from "next/link";

export default function ErrorGame() {



    return (

        <>
        
        <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
       
       <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="shadow-three mx-auto text-center max-w-[800px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]">
            

                <h2 className="mb-3 text-center text-2xl font-bold text-red-600 dark:text-red-400 sm:text-3xl">
                 ERRO
                </h2>

                <h4 className="mb-10 text-center font-bold text-black dark:text-white">
                As informações do jogo não estão disponíveis, tente mais tarde!
                </h4>

                <Link
                  href="/"
                  className="px-8 py-3 text-base font-bold text-white duration-300 rounded-md bg-primary shadow-signUp hover:bg-white hover:text-primary md:px-9 lg:px-8 xl:px-9"
                >
                  Voltar para Página Inicial
                </Link>

              </div>
            </div>
          </div>
        </div>

        
      </section>

        </>
        
        

    )

}