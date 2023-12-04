import ScrollUp from "@/components/Common/ScrollUp";
import Jogo from "@/components/Jogo/Jogo";
import { Game } from "@/types/game";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GameMatch - Top 2023",
  description: "Jogos grátis que você ama",
  // other metadata
};

export default async function TopPage() {
  
    let jogosArray : Array<Game> = [];

    const response = await fetch("https://www.freetogame.com/api/games?sort-by=relevance")
    if(response.status == 200)
    {
        jogosArray = await response.json()

        jogosArray = jogosArray.filter(item => item.release_date.includes("2023"));

        while (jogosArray.length > 100) {
            jogosArray.pop()
        }

        //console.log(jogosArray)

        
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
