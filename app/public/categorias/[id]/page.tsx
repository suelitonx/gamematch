import ScrollUp from "@/components/Common/ScrollUp";
import Jogo from "@/components/Jogo/Jogo";
import { Game } from "@/types/game";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GameMatch",
  description: "Jogos grátis que você ama",
  // other metadata
};

export default async function CategoriasIDs({ params } : { params: {id: string}; }) {
  
    let jogosArray : Array<Game> = [];

    const response = await fetch(`https://www.freetogame.com/api/games?category=${params.id}`)
    if(response.status == 200)
    {
        jogosArray = await response.json()
    }


  
    return (
    //{params.id}

    

    <>
      <ScrollUp />
      <Jogo logado={false} random={false} arrJogos={jogosArray}  /> 
      
      {/*
      <ScrollUp />
      <Blog />
      */}
      </>
  );
}
