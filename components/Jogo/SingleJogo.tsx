
import { generos, generosFromAPI, plataformas } from "@/data/info-api";
import { Game } from "@/types/game";
import Image from "next/image";
import Link from "next/link";

const SingleJogo = ({ jogo }: { jogo: Game }) => {
  const { id, title, thumbnail, short_description, genre, platform, publisher, release_date } = jogo;
  
  function formatarData() {
    
    var pieces = release_date.split("-");

    if(pieces.length === 3)
    {
      return `${pieces[2]}/${pieces[1]}/${pieces[0]}`
    }
    return release_date
    
  }

  function getPlataform() : string {

    if(platform.toLowerCase().includes("all"))
    {
      return "PC, WEB"
    }

    if(platform.toLowerCase().includes("pc") || platform.toLowerCase().includes("windows"))
    {
      if(platform.toLowerCase().includes("browser") || platform.toLowerCase().includes("web"))
      {
        return "PC, WEB"
      }
      return "PC"
    }

    return "WEB"

    

  }

  function getTranslateGenre(genero: string) : string {

    let str = ""

    for (let i = 0; i < generos.length; i++) {
      
      if(generos[i].original == genero.toLowerCase())
      {
        str = generos[i].traducao
        break;
      }
      
    }

    if(str.length === 0)
    {

      for (let i = 0; i < generosFromAPI.length; i++) {
      
        if(generosFromAPI[i].original == genero.toLowerCase())
        {
          str = generosFromAPI[i].traducao
          break;
        }
        
      }
    }
    
    if(str.length === 0)
    {
      str = genero;
    }

    return str
  }

  return (
    <>
      <div
        className="wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 dark:bg-dark"
        data-wow-delay=".1s"
      >
        <Link
          href={`/details-games/${id}`}
          className="relative block aspect-[37/22] w-full"
        >
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
            {getPlataform()}
          </span>
          <Image src={thumbnail} alt="image" fill />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href={`/details-games/${id}`}
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {short_description}
          </p>
          <div className="flex items-center">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden">
                  <Image src={ (platform == 'browser' || platform == 'Web Browser')  ? '/images/blog/web.png' : '/images/blog/win.png'} alt="author" fill />
                </div>
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  Por {publisher}
                </h4>
                <p className="text-xs text-body-color">{getTranslateGenre(genre)}</p>
                
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Lançamento
              </h4>
              <p className="text-xs text-body-color">{formatarData()}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleJogo;

