'use client'

import { generos, ordenacao, plataformas } from "@/data/info-api";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

interface Option {
  original: string;
  traducao: string;
}
  
  function SelectOne( { g, p, o } : { g : string, p : string, o : string } ) {
  
    const router = useRouter()
    

    const [genero, setGenero] = useState(g);
    const [plataforma, setPlataforma] = useState(p);
    const [ordem, setOrdem] = useState(o);

    return (
<>

      <div className="grid grid-cols-1 gap-3 mb-3 md:grid-cols-2 lg:grid-cols-4 items-center justify-center">
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

        <button onClick={() => {

          router.push(`/public/${plataforma}/${genero}?s=${ordem}`)

        }} className="shadow-submit dark:shadow-submit-dark w-full h-10 rounded-sm bg-primary text-base font-medium text-white duration-300 hover:bg-primary/90">
          Pesquisar
        </button>

      </div>
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