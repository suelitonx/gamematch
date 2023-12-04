'use client'

import { useState } from "react";

interface Option {
  id: string;
  label: string;
}
  
const options: Option[] = [
  {id: 'mmorpg', label: 'MMORPG'},
  {id: 'shooter', label: 'Atirador'},
  {id: 'strategy', label: 'Estratégia'}
]
  
function MultiSelect() {

  const [selecionados, setSelecionados] = useState<string[]>([])

  function bt() {
    alert(selecionados)
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

  return (
    <div className="flex flex-col">
      {options.map(option => (
        <div 
          key={option.id}
          className="flex items-center my-2"
        >
          <input 
            type="checkbox"
            checked={selecionados.includes(option.id)}
            onChange={() => handleToggle(option.id)}
            className="h-4 w-4 transition-colors checked:bg-green-600"
          />
          <label className="ml-2">{option.label}</label>
        </div>
      ))}

      <button className="bg-blue-500 mb-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={bt}>OK</button>

    </div>
  )
}

export default MultiSelect