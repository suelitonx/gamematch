import ScrollUp from "@/components/Common/ScrollUp";
import Jogo from "@/components/Jogo/Jogo";
import { generos } from "@/data/info-api";
import { Game } from "@/types/game";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GameMatch: Jogos de Navegador",
  description: "Jogos grátis que você ama",
  // other metadata
};

function getLinkAPI(id: string)
{

  for (let i = 0; i < generos.length; ++i) {
    
    if(generos[i].original === id)
    {
      return `&category=${id}`
    }
    
  }
  return ""

}


export default async function CategoriasPC({ params, searchParams } : { params: {id: string}; searchParams: { [key: string]: string | string[] | undefined } }) {
  
    let jogosArray : Array<Game> = [];
    const cat = getLinkAPI(params.id)

    const sort = (searchParams.s === undefined) ? '' : `&sort-by=${searchParams.s}`
    const response = await fetch(`https://www.freetogame.com/api/games?platform=pc${cat}${sort}`)
    const sortStr:string = (searchParams.s === undefined) ? 'relevance' : `${searchParams.s}`

    if(response.status == 200)
    {
      const jogos = await response.json()

      if(searchParams.search !== null && searchParams.search !== undefined)
      {
        const regex = new RegExp(searchParams.search.toString(), 'i');
    
        jogosArray = jogos.filter(game => {
          return regex.test(game.title);
        })
      }
      else
      {
        jogosArray = jogos
      }
    }

    return (
        <>
            <ScrollUp />
            {cat.length >= 2 ? <Jogo o={sortStr} g={params.id} p="pc" logado={false}  pesquisar={true} random={false} arrJogos={jogosArray}  /> : <Jogo o={sortStr} logado={false} p="pc" pesquisar={true} random={false} arrJogos={jogosArray}  /> }
        </>
  );
}
