'use client'

import { useState } from "react";
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { error } from "console";

const labels: { [index: string]: string } = {
  1: 'Muito ruim',
  2: 'Ruim',
  3: 'Mediano',
  4: 'Bom',
  5: 'Excelente',
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const AvaliarComentario = ({idjogo} : {idjogo:number}) => {
  const [value, setValue] = useState<number | null>(3);
  const [hover, setHover] = useState(-1);
  const [error, setError] = useState('')
  const [sucess, setSucess] = useState('')

  const handleComment = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const msg = formData.get('message');
    
    if(value !== null)
    {
        
        try {
            const response = await fetch("/api/auth/avaliar", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        idjogo: idjogo,
                        comentario: msg,
                        valor: value
                    }),
            });

            const f = await response.json();
            
            if(f.code === 200)
            {
                console.log("SUCESSO")
            }
            else
            {
                console.log("ERRO")
            }
        } catch (error) {
            console.log(error)
        }


    }

  }

  return (
    
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full">
            <div
              className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              
              <form onSubmit={handleComment}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        className={value !== null ? "mb-3 block text-sm font-medium text-dark dark:text-white" : "mb-3 block text-sm font-medium text-red-400 dark:text-red-400"}
                      >
                        Sua avaliação {value !== null ? (
                          <>
                          ({labels[hover !== -1 ? hover : value]})
                          </>
                        ) : " *"}
                      </label>

                      <Rating
                      name="hover-feedback"
                      value={value}
                      precision={1}
                      getLabelText={getLabelText}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      onChangeActive={(event, newHover) => {
                        setHover(newHover);
                      }}
                      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />

                    </div>
                  </div>
                  
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Seu comentário
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Escreva seu comentário (opcional)"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="shadow-submit dark:shadow-submit-dark rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                      Avaliar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    
  );
};

export default AvaliarComentario;
