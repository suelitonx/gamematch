'use client'

import useSWR from "swr"
import { API_KEY } from "../apikey"
import Image from 'next/image'


export function SingleMovieDetails( { id } : { id: string } ) {

    let linkApi = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`

    const { data, error } = useFetch(linkApi)

    return <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
       
    <div className="container">
       <div className="-mx-4 flex flex-wrap">
         <div className="w-full px-4">
           <div className="shadow-three mx-auto max-w-[800px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]">
            
            {!data ? <h3 className="mb-5 text-center font-bold text-black dark:text-white"> Carregando informações do filme...</h3> : <>
            
           <Image
                src={data.Poster}
                alt={data.Title}
                width={200}
                height={350}
                className="rounded-md mx-auto mb-4"
           />



           <h3 className="mb-5 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
             {data.Title}
           </h3>

           <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                
                <div className="flex flex-col pb-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Sinopse</dt>
                    <dd className="text-lg font-semibold">{data.Plot}</dd>
                </div>

                <div className="flex flex-col pb-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Ano de Lançamento</dt>
                    <dd className="text-lg font-semibold">{data.Year}</dd>
                </div>
                
                <div className="flex flex-col pb-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Duração</dt>
                    <dd className="text-lg font-semibold">{data.Runtime}</dd>
                </div>

                <div className="flex flex-col pb-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Gênero(s)</dt>
                    <dd className="text-lg font-semibold">{data.Genre}</dd>
                </div>

                <div className="flex flex-col pb-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Diretor</dt>
                    <dd className="text-lg font-semibold">{data.Director}</dd>
                </div>

                <div className="flex flex-col pb-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Escritor</dt>
                    <dd className="text-lg font-semibold">{data.Writer}</dd>
                </div>

                <div className="flex flex-col pb-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Atores</dt>
                    <dd className="text-lg font-semibold">{data.Actors}</dd>
                </div>

                

                <div className="flex flex-col pb-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Idioma</dt>
                    <dd className="text-lg font-semibold">{data.Language}</dd>
                </div>

                <div className="flex flex-col pb-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">País(es)</dt>
                    <dd className="text-lg font-semibold">{data.Country}</dd>
                </div>

                <div className="flex flex-col pb-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Premiações</dt>
                    <dd className="text-lg font-semibold">{data.Awards}</dd>
                </div>

                <div className="flex flex-col pb-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Nota do IMDB</dt>
                    <dd className="text-lg font-semibold">{data.imdbRating}</dd>
                </div>

                <div className="flex flex-col pb-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Bilheteria $</dt>
                    <dd className="text-lg font-semibold">{data.BoxOffice}</dd>
                </div>

                <div className="flex flex-col pb-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Ano</dt>
                    <dd className="text-lg font-semibold">{data.Year}</dd>
                </div>
                
            </dl>
             
            </>}
           </div>
         </div>
       </div>
     </div>
   </section>

     

    
}

function useFetch(url : string) {
    const {data, error} = useSWR(url, async (url) => {
  
      const res = await fetch(url)
  
      const json = await res.json()
  
      return json
    }, {revalidateOnFocus: false})
  
    return { data, error }  
}