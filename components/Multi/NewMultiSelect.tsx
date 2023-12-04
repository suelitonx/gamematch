'use client'

import { generos } from "@/data/info-api";
import { useRouter } from "next/navigation";
import { useState } from "react";

function NewMultiSelect() {

  const router = useRouter();

  const [selecionados, setSelecionados] = useState<string[]>([])

  function todos() {
    //setSelecionados([])
    if(selecionados.length >= 1)
    {
      setSelecionados([])
    }
    else
    {
      for (const key in generos) {
        if(!selecionados.includes(generos[key].original)) {
          setSelecionados(prev => [...prev, generos[key].original])
        }
      }
    }
    
    


  }

  function bt() {
    const queryString = selecionados.join(',');
    const base_url = "/?selecionados="
    var str3 = base_url.concat(queryString.toString());
    router.push(str3)
    alert(queryString)
  }

  function handleToggle(id: string) {
    //Caso já tenha sido selecionado...
    if(selecionados.includes(id)) {
      //Exclui o id do array "selecionados"
      setSelecionados(prev => prev.filter(x => x !== id))
    }
    else //Caso não tenha sido seleconado
    {
      //Adiciona aquele id ao array "selecionados"
      setSelecionados(prev => [...prev, id])
    }

  }
  //"bg-gray-300 mb-3 mr-3 inline-flex items-center justify-center rounded-sm px-4 py-2 text-sm text-black duration-300 hover:bg-primary hover:text-white dark:bg-[#2C303B] dark:text-white dark:hover:bg-primary"
  //"bg-primary mb-3 mr-3 inline-flex items-center justify-center rounded-sm px-4 py-2 text-sm text-white duration-300 hover:bg-gray-300 hover:text-black dark:bg-primary dark:text-white dark:hover:bg-[#2C303B]"
  return (
    <>  
      <button key="1211" className="bg-green-light mb-3 mr-3 inline-flex items-center justify-center rounded-sm px-4 py-2 text-sm text-black duration-300 hover:bg-primary hover:text-white dark:bg-[#2C303B] dark:text-white dark:hover:bg-primary" onClick={todos}>{selecionados.length >= 1 ? 'Nenhum' : 'Todos'}</button>
      
      {generos.map(generos => (
      <button
      key={generos.original}
      className={selecionados.includes(generos.original) ? "bg-primary mb-3 mr-3 inline-flex items-center justify-center rounded-sm px-4 py-2 text-sm text-white duration-300 hover:bg-gray-300 hover:text-black dark:bg-primary dark:text-white dark:hover:bg-[#2C303B]" : "bg-gray-300 mb-3 mr-3 inline-flex items-center justify-center rounded-sm px-4 py-2 text-sm text-black duration-300 hover:bg-primary hover:text-white dark:bg-[#2C303B] dark:text-white dark:hover:bg-primary"}
      onClick={() => handleToggle(generos.original)}
      >
        {generos.traducao}
      </button>
      ))}

      <button key="111" className="bg-gray-light mb-3 mr-3 inline-flex items-center justify-center rounded-sm px-4 py-2 text-sm text-black duration-300 hover:bg-primary hover:text-white dark:bg-[#2C303B] dark:text-white dark:hover:bg-primary" onClick={bt}>OK</button>
    </>
  );
}

export default NewMultiSelect