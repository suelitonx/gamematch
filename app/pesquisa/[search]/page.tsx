import ScrollUp from "@/components/Common/ScrollUp";
import Jogo from "@/components/Jogo/Jogo";
import ErrorGame from "@/components/Jogo/JogoUnico/ErrorGame";
import { Game } from "@/types/game";

export default async function Pesquisa({ params } : { params: {search: string}; }) {

    let lJogos : Array<Game> = [];

    const res = await fetch("https://www.freetogame.com/api/games?sort-by=popularity");

    if(res.status == 200)
    {
        const jogos = await res.json()

        const regex = new RegExp(params.search, 'i');
      
        lJogos = jogos.filter(game => {
          return regex.test(game.title);
        })
    }

    if(lJogos != null && lJogos.length >= 1)
    {
        return <>
        
        <Jogo logado={ false } random={false} arrJogos={lJogos}></Jogo>
        </>
    }

    return (
        <>
        <ScrollUp />
        <ErrorGame erro="Nenhum jogo encontrado."></ErrorGame>
        </>
      )


}