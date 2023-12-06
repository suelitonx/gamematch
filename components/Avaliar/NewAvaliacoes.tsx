'use client'

import { Avaliacao } from "@/types/avaliacao";
import SingleAvaliacao from "./SingleAvaliacao";
import { useEffect, useState } from "react";


const NewAvaliacoes = ({ idjogo }: { idjogo: string }) => {
  //avaliacoesData[0].designation = idjogo;
  
  let arrayAvaliacoes: Avaliacao[] = [];

  

  useEffect(() => {
    fetch(`https://www.sueliton.live/api/collections/avaliacaogm/records?filter=(idjogo=${idjogo})&expand=usuario&sort=-created`)
      .then((res) => res.json())
      .then((data) => {
        
        data.items.forEach( comment => {
            const today = new Date(comment.updated)
        
            arrayAvaliacoes.push({
                id: comment.id,
                idjogo: comment.idjogo,
                nomeUsuario: comment.expand !== undefined ? comment.expand.usuario.name : "Anônimo",
                comentario: comment.comentario,
                data: today.toLocaleDateString(),
                valor: comment.valor
            })
        });

        setAv(arrayAvaliacoes)
        setLoading(false)

      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  
  const [av, setAv] = useState<Avaliacao[]>([])
  
  const [isLoading, setLoading] = useState(true)

  
  if(isLoading === true) {
    return <></>
  }
  
  if(av.length >= 1)
  {
      return (
        <div className="grid grid-cols-1 gap-x-4 gap-y-4">
          {av.map((avaliacao) => (
            <SingleAvaliacao key={avaliacao.id} avaliacao={avaliacao} />
          ))}
        </div>
      )
  }

  return <></>
  
};

export default NewAvaliacoes;
