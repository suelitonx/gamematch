'use client'

import { generos, ordenacao, plataformas } from "@/data/info-api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

interface Option {
  original: string;
  traducao: string;
}
  
  function SelectOne( { g, p, o } : { g : string, p : string, o : string } ) {
  
    const router = useRouter()
    const [pesq, setPesq] = useState('')

    const [genero, setGenero] = useState(g);
    const [plataforma, setPlataforma] = useState(p);
    const [ordem, setOrdem] = useState(o);

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {

      e.preventDefault();
    
      router.push(pesq.length >= 1 ? `/public/${plataforma}/${genero}?s=${ordem}&search=${pesq}` : `/public/${plataforma}/${genero}?s=${ordem}`)
    }

    return (
<>
      <form onSubmit={handleSearch}>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-3 items-center justify-center">
        <Select 
          options={plataformas}
          name="s1"
          titulo="Plataforma:"
          setfunc={setPlataforma}
          valor={plataforma}
        />

        <Select 
          options={generos}
          name="s2"
          titulo='Gênero:'
          setfunc={setGenero}
          valor={genero}
        />

        <Select 
          options={ordenacao}
          name="s3"
          titulo="Ordenar por:"
          setfunc={setOrdem}
          valor={ordem}
        />

        {/* 
        <button onClick={() => {

          router.push(`/public/${plataforma}/${genero}?s=${ordem}`)

        }} className="shadow-submit dark:shadow-submit-dark w-full h-10 rounded-sm bg-primary text-base font-medium text-white duration-300 hover:bg-primary/90">
          Pesquisar
        </button>
        */}
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 items-center justify-center mb-3">
      
      <input
        type="text"
        placeholder="Pesquisar (opcional)"
        name="pesquisa"
        value={pesq}
        className="border-stroke dark:text-body-color-dark dark:shadow-two mr-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
        onChange={(e) => setPesq(e.target.value)}
      />
      
      <button type="submit" className="shadow-submit dark:shadow-submit-dark w-full h-12 rounded-sm bg-primary text-base font-medium text-white duration-300 hover:bg-primary/90">
Pesquisar 
</button>

      {/* 
      <Link
        aria-label="Pesquisar"
        className="flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-sm bg-primary text-white"
        href={pesq.length >= 1 ? `/public/${plataforma}/${genero}?s=${ordem}&search=${pesq}` : `/public/${plataforma}/${genero}?s=${ordem}`}
      >
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.4062 16.8125L13.9375 12.375C14.9375 11.0625 15.5 9.46875 15.5 7.78125C15.5 5.75 14.7188 3.875 13.2812 2.4375C10.3438 -0.5 5.5625 -0.5 2.59375 2.4375C1.1875 3.84375 0.40625 5.75 0.40625 7.75C0.40625 9.78125 1.1875 11.6562 2.625 13.0937C4.09375 14.5625 6.03125 15.3125 7.96875 15.3125C9.875 15.3125 11.75 14.5938 13.2188 13.1875L18.75 17.6562C18.8438 17.75 18.9688 17.7812 19.0938 17.7812C19.25 17.7812 19.4062 17.7188 19.5312 17.5938C19.6875 17.3438 19.6562 17 19.4062 16.8125ZM3.375 12.3438C2.15625 11.125 1.5 9.5 1.5 7.75C1.5 6 2.15625 4.40625 3.40625 3.1875C4.65625 1.9375 6.3125 1.3125 7.96875 1.3125C9.625 1.3125 11.2812 1.9375 12.5312 3.1875C13.75 4.40625 14.4375 6.03125 14.4375 7.75C14.4375 9.46875 13.7188 11.125 12.5 12.3438C10 14.8438 5.90625 14.8438 3.375 12.3438Z"
            fill="white"
          />
        </svg>
      </Link>
      */}
    </div>
    </form>
      </>
      
    )
  }
  
  function Select({options, name, titulo, valor, setfunc}: {options: Option[], name: string, titulo: string, valor: string, setfunc: Dispatch<SetStateAction<string>>}) {

    return (
      <div>
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{titulo}</label>
      <select 
        id={name}
        name={name}
        value={valor}
        className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={e =>setfunc(e.target.value)}
      >
        {options.map(option => (
          <option 
            key={option.original}
            value={option.original}
          >
            {option.traducao}
          </option>
        ))}
      </select>
      </div>
    )
  }
  
  export default SelectOne