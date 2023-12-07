'use client'

import { useState } from "react"
import { API_KEY } from "../apikey"
import ListaFilmes from "../_receitascomp/ListaFilmes"

export default function Receita9() {

  const [linkdaapi, setLink] = useState('')

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    
    const formData = new FormData(e.currentTarget)

    const name = formData.get('name').toString();
    const ano = formData.get('ano').toString();

    if(name.length <= 3)
    {
      return alert("O nome do filme deve ter pelo menos 4 caracteres")
    }

    if(ano.length == 4)
    {
      if(parseInt(ano) <= 1500 || parseInt(ano) >= 2025)
      {
        return alert("O ano informado é inválido.")
      }
    }

    let linkApi = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${name}`

    if(ano.length == 4)
    {
      linkApi += `&y=${ano}`
    }

    setLink(linkApi)

    

}

  



    return (

        <>
        
        <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
       
       <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="shadow-three mx-auto max-w-[800px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]">
                
              <h3 className="mb-5 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                Receita 9 - Pesquisar Filme
              </h3>

              <form onSubmit={ handleSearch  }>
                  <div className="mb-8">
                    <input
                      type="text"
                      name="name"
                      placeholder="Digite o nome do filme"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  
                  <div className="mb-8">
                    <input
                      type="text"
                      name="ano"
                      placeholder="Digite o ano do filme"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>


                  <div className="mb-6">
                    <button className="shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                      Pesquisar
                    </button>
                  </div>
                </form>

                <ListaFilmes url={linkdaapi} servidor={true} />   
                
              </div>
            </div>
          </div>
        </div>
      </section>

        </>
        
        

    )

}