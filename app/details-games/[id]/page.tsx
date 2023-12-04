import ScrollUp from "@/components/Common/ScrollUp";
import Jogo from "@/components/Jogo/Jogo";
import UniqueGamePage from "@/components/Jogo/JogoUnico/UniqueGamePage";
import { UniqueGame } from "@/types/game";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GameMatch",
  description: "Jogos grátis que você ama",
  // other metadata
};

export default async function JogoUnico({ params } : { params: {id: number}; }) {
  
    let jogo : UniqueGame;
    //452

    const response = await fetch(`https://www.freetogame.com/api/game?id=${params.id}`)
    if(response.status == 200)
    {
        jogo = await response.json()
    }


  
    return (
    //{params.id}

    

    <>
      <ScrollUp />
      
        <UniqueGamePage game={jogo}></UniqueGamePage>

      </>
  );
}
