import ScrollUp from "@/components/Common/ScrollUp";
import SectionTitle from "@/components/Common/SectionTitle";
import ErrorGame from "@/components/Jogo/JogoUnico/ErrorGame";
import UniqueGamePage from "@/components/Jogo/JogoUnico/UniqueGamePage";
import { Game, UniqueGame } from "@/types/game";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GameMatch",
  description: "Jogos grátis que você ama",
  // other metadata
};

export default async function JogoUnico({ params } : { params: {id: number}; }) {
  
    let jogo : UniqueGame;

    const response = await fetch(`https://www.freetogame.com/api/game?id=${params.id}`)
    if(response.status == 200)
    {
        jogo = await response.json()
    }

    const res = await fetch("https://www.freetogame.com/api/games?sort-by=popularity");
    
    let newGames : Array<Game> = [];
    
    if(res.status == 200)
    {
      const jogos = await res.json();
      
      if(jogos !== null || jogos !== undefined){
       
        jogos.sort(() => Math.random() - 0.5);
        
        while (jogos.length > 5) {
          jogos.pop()
        }
        
        newGames = jogos;
      }
    }

    
    
    if(jogo === null || jogo === undefined)
    {
      return (
        <>
        <ScrollUp />
        <ErrorGame></ErrorGame>
        </>
      )
    }


    return (
      <>
        <ScrollUp />
        <UniqueGamePage relacionados={newGames} game={jogo}></UniqueGamePage>
      </>
    );

    
}
