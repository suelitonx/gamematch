import SectionTitle from "../Common/SectionTitle";
import { games } from "@/data/gamelist";
import SingleJogo from "./SingleJogo";
import { Game } from "@/types/game";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const TOTAL_JOGOS_EXIBIDOS : number = 70

const Jogo = async ( { arrJogos, logado = false, random = false } : { arrJogos: Array<Game>; logado: boolean; random: boolean;  } ) => {

  if(arrJogos.length == 0)
  {
    const session = await getServerSession(authOptions);

    if(session != null && random === false)
    {
      //console.log("PÁGINA INICIAL SESSÃO: ", session.user)

      const uCategorias = session.user.categorias?.join('.')
      const uPlataforma = session.user.plataforma

      const linkAPI = `https://www.freetogame.com/api/filter?tag=${uCategorias}&platform=${uPlataforma}`

      const response = await fetch(linkAPI);

      if(response.status === 200)
      {
        const jogos = await response.json();
        arrJogos = jogos;
      }
      else
      {
        const newGames : Array<Game> = games;
        newGames.sort(() => Math.random() - 0.5);
        arrJogos = newGames;
      }
    }
    else
    {
      const response = await fetch("https://www.freetogame.com/api/games");

      if(response.status === 200)
      {
        const jogos = await response.json();
        const newGames : Array<Game> = jogos;
        newGames.sort(() => Math.random() - 0.5);
        arrJogos = newGames;
      }
      else
      {
        const newGames : Array<Game> = games;
        newGames.sort(() => Math.random() - 0.5);
        arrJogos = newGames;
      }

      /*
      let generos:Array<string> = [];

      games.forEach(g => {
        
        generos.push(g.platform)

      });


      var generos_novo = new Set(generos);
      generos = Array.from(generos_novo)
      console.log(generos);
      */
      //arrJogos = games;
    }
    
    
    while (arrJogos.length > TOTAL_JOGOS_EXIBIDOS) {
      arrJogos.pop()
    }
    
    
  }
  
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Descubra os melhores jogos grátis para jogar!"
          paragraph={logado === false ? "Cadastre-se para ter uma recomendações personalizadas!" : "Os jogos que você ama estão aqui!"}
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">

          {arrJogos.map((game) => (
            <div key={game.id} className="w-full">
              <SingleJogo jogo={game} />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Jogo;
