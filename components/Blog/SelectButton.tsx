'use client'

import { generos } from "@/data/info-api";
import { useState } from "react";

const SelectButton = () => {
    
    const [selectedOptions, setSelectedOptions] = useState([]);
    
    const handleSubmit = (e) => {
        
        e.preventDefault();

        const isChecked = e.target.name
        console.log(isChecked)

        const selectedOptionSet = new Set(selectedOptions);

        
    };
    
    //{generos.map( (g) => <TagButton key={g.original} href={"/categorias/" + g.original} text={g.traducao} />  ) }

    return (
        <>

        {generos.map( (g) => 

    <button
        
        key={g.original}
        id={g.original}
        name={g.original}
        className="bg-gray-light mb-3 mr-3 inline-flex items-center justify-center rounded-sm px-4 py-2 text-sm text-black duration-300 hover:bg-primary hover:text-white dark:bg-[#2C303B] dark:text-white dark:hover:bg-primary"
        onClick={(e) => handleSubmit(e)}

      >
        {g.traducao}
    </button>
        ) }

     
    </>
    )
  };
  
  export default SelectButton;
  