
import RelatedPost from "@/components/Blog/RelatedPost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";
import { Metadata } from "next";
import { generos, generosFromAPI } from "@/data/info-api";
import { UniqueGame } from "@/types/game";
import Avaliacoes from "@/components/Avaliar";
import AvaliarComentario from "@/components/Avaliar/AvaliarComentario";
import NewAvaliacoes from "@/components/Avaliar/NewAvaliacoes";


export const metadata: Metadata = {
  title: "GameMatch",
  description: "Páginas de Detalhes",
  // other metadata
};

const UniqueGamePage = ({ game }: { game: UniqueGame }) => {

  function formatarData() : string {
    
    var pieces = game.release_date.split("-");

    if(pieces.length === 3)
    {
      return `${pieces[2]}/${pieces[1]}/${pieces[0]}`
    }
    return game.release_date
    
  }

  function getPlataform() : string {

    if(game.platform.toLowerCase().includes("all"))
    {
      return "PC, WEB"
    }

    if(game.platform.toLowerCase().includes("pc") || game.platform.toLowerCase().includes("windows"))
    {
      if(game.platform.toLowerCase().includes("browser") || game.platform.toLowerCase().includes("web"))
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
        <section className="overflow-hidden pb-[120px] pt-[180px]">
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 lg:w-8/12">
                <div>
                  <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                    {game.title}
                  </h1>
                  <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                    <div className="flex flex-wrap items-center">
                      <div className="mb-5 mr-10 flex items-center">
                        <div className="mr-4">
                          <div className="relative h-10 w-10 overflow-hidden">
                            <Image
                              src={(getPlataform().includes("PC")) ? '/images/blog/win.png' : '/images/blog/web.png'}
                              alt={getPlataform()}
                              fill
                            />
                          </div>
                        </div>
                        <div className="w-full">
                          <span className="mb-1 text-base font-medium text-body-color">
                            Por <span> {game.publisher}</span>
                          </span>
                        </div>
                      </div>
                      <div className="mb-5 flex items-center">
                        <p className="mr-5 flex items-center text-base font-medium text-body-color">
                          <span className="mr-3">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              className="fill-current"
                            >
                              <path d="M3.89531 8.67529H3.10666C2.96327 8.67529 2.86768 8.77089 2.86768 8.91428V9.67904C2.86768 9.82243 2.96327 9.91802 3.10666 9.91802H3.89531C4.03871 9.91802 4.1343 9.82243 4.1343 9.67904V8.91428C4.1343 8.77089 4.03871 8.67529 3.89531 8.67529Z" />
                              <path d="M6.429 8.67529H5.64035C5.49696 8.67529 5.40137 8.77089 5.40137 8.91428V9.67904C5.40137 9.82243 5.49696 9.91802 5.64035 9.91802H6.429C6.57239 9.91802 6.66799 9.82243 6.66799 9.67904V8.91428C6.66799 8.77089 6.5485 8.67529 6.429 8.67529Z" />
                              <path d="M8.93828 8.67529H8.14963C8.00624 8.67529 7.91064 8.77089 7.91064 8.91428V9.67904C7.91064 9.82243 8.00624 9.91802 8.14963 9.91802H8.93828C9.08167 9.91802 9.17727 9.82243 9.17727 9.67904V8.91428C9.17727 8.77089 9.08167 8.67529 8.93828 8.67529Z" />
                              <path d="M11.4715 8.67529H10.6828C10.5394 8.67529 10.4438 8.77089 10.4438 8.91428V9.67904C10.4438 9.82243 10.5394 9.91802 10.6828 9.91802H11.4715C11.6149 9.91802 11.7105 9.82243 11.7105 9.67904V8.91428C11.7105 8.77089 11.591 8.67529 11.4715 8.67529Z" />
                              <path d="M3.89531 11.1606H3.10666C2.96327 11.1606 2.86768 11.2562 2.86768 11.3996V12.1644C2.86768 12.3078 2.96327 12.4034 3.10666 12.4034H3.89531C4.03871 12.4034 4.1343 12.3078 4.1343 12.1644V11.3996C4.1343 11.2562 4.03871 11.1606 3.89531 11.1606Z" />
                              <path d="M6.429 11.1606H5.64035C5.49696 11.1606 5.40137 11.2562 5.40137 11.3996V12.1644C5.40137 12.3078 5.49696 12.4034 5.64035 12.4034H6.429C6.57239 12.4034 6.66799 12.3078 6.66799 12.1644V11.3996C6.66799 11.2562 6.5485 11.1606 6.429 11.1606Z" />
                              <path d="M8.93828 11.1606H8.14963C8.00624 11.1606 7.91064 11.2562 7.91064 11.3996V12.1644C7.91064 12.3078 8.00624 12.4034 8.14963 12.4034H8.93828C9.08167 12.4034 9.17727 12.3078 9.17727 12.1644V11.3996C9.17727 11.2562 9.08167 11.1606 8.93828 11.1606Z" />
                              <path d="M11.4715 11.1606H10.6828C10.5394 11.1606 10.4438 11.2562 10.4438 11.3996V12.1644C10.4438 12.3078 10.5394 12.4034 10.6828 12.4034H11.4715C11.6149 12.4034 11.7105 12.3078 11.7105 12.1644V11.3996C11.7105 11.2562 11.591 11.1606 11.4715 11.1606Z" />
                              <path d="M13.2637 3.3697H7.64754V2.58105C8.19721 2.43765 8.62738 1.91189 8.62738 1.31442C8.62738 0.597464 8.02992 0 7.28906 0C6.54821 0 5.95074 0.597464 5.95074 1.31442C5.95074 1.91189 6.35702 2.41376 6.93058 2.58105V3.3697H1.31442C0.597464 3.3697 0 3.96716 0 4.68412V13.2637C0 13.9807 0.597464 14.5781 1.31442 14.5781H13.2637C13.9807 14.5781 14.5781 13.9807 14.5781 13.2637V4.68412C14.5781 3.96716 13.9807 3.3697 13.2637 3.3697ZM6.6677 1.31442C6.6677 0.979841 6.93058 0.716957 7.28906 0.716957C7.62364 0.716957 7.91042 0.979841 7.91042 1.31442C7.91042 1.649 7.64754 1.91189 7.28906 1.91189C6.95448 1.91189 6.6677 1.6251 6.6677 1.31442ZM1.31442 4.08665H13.2637C13.5983 4.08665 13.8612 4.34954 13.8612 4.68412V6.45261H0.716957V4.68412C0.716957 4.34954 0.979841 4.08665 1.31442 4.08665ZM13.2637 13.8612H1.31442C0.979841 13.8612 0.716957 13.5983 0.716957 13.2637V7.16957H13.8612V13.2637C13.8612 13.5983 13.5983 13.8612 13.2637 13.8612Z" />
                            </svg>
                          </span>
                          {formatarData()}
                        </p>
                      </div>
                    </div>
                    <div className="mb-5">
                      
                    
                     {
                      //<LikeButton idGame={game.id} ></LikeButton>
                     }

                     

                     {
                      //<HoverRating></HoverRating>
                     }
                      {
                      /*<a
                        href="#0"
                        className="inline-flex items-center justify-center rounded-full bg-pink-600 px-4 py-2 text-sm font-semibold text-white"
                      >
                        Like
                      </a>*/
                      }
                      
                    </div>
                  </div>
                  <div>

                                                    
                  <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                      <p className="text-center text-base font-medium italic text-body-color">
                        {game.short_description}
                      </p>
                      <span className="absolute left-0 top-0 z-[-1]">
                        <svg
                          width="132"
                          height="109"
                          viewBox="0 0 132 109"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.5"
                            d="M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z"
                            fill="url(#paint0_linear_111:606)"
                          />
                          <path
                            opacity="0.5"
                            d="M33.3654 85.0768C24.1476 98.7862 1.19876 106.079 -9.12343 108.011L-38.876 22.9988L100.816 -25.8905C100.959 -23.8126 99.8798 -15.5499 94.4164 0.87754C87.5871 21.4119 61.9822 26.677 49.5641 38.7512C37.146 50.8253 44.8877 67.9401 33.3654 85.0768Z"
                            fill="url(#paint1_linear_111:606)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_111:606"
                              x1="94.7523"
                              y1="82.0246"
                              x2="8.40951"
                              y2="52.0609"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="white" stopOpacity="0.06" />
                              <stop
                                offset="1"
                                stopColor="white"
                                stopOpacity="0"
                              />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_111:606"
                              x1="90.3206"
                              y1="58.4236"
                              x2="1.16149"
                              y2="50.8365"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="white" stopOpacity="0.06" />
                              <stop
                                offset="1"
                                stopColor="white"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <span className="absolute bottom-0 right-0 z-[-1]">
                        <svg
                          width="53"
                          height="30"
                          viewBox="0 0 53 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            opacity="0.8"
                            cx="37.5"
                            cy="37.5"
                            r="37.5"
                            fill="#4A6CF7"
                          />
                          <mask
                            id="mask0_111:596"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="75"
                            height="75"
                          >
                            <circle
                              opacity="0.8"
                              cx="37.5"
                              cy="37.5"
                              r="37.5"
                              fill="#4A6CF7"
                            />
                          </mask>
                          <g mask="url(#mask0_111:596)">
                            <circle
                              opacity="0.8"
                              cx="37.5"
                              cy="37.5"
                              r="37.5"
                              fill="url(#paint0_radial_111:596)"
                            />
                            <g opacity="0.8" filter="url(#filter0_f_111:596)">
                              <circle
                                cx="40.8089"
                                cy="19.853"
                                r="15.4412"
                                fill="white"
                              />
                            </g>
                          </g>
                          <defs>
                            <filter
                              id="filter0_f_111:596"
                              x="4.36768"
                              y="-16.5881"
                              width="72.8823"
                              height="72.8823"
                              filterUnits="userSpaceOnUse"
                              colorInterpolationFilters="sRGB"
                            >
                              <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                              />
                              <feGaussianBlur
                                stdDeviation="10.5"
                                result="effect1_foregroundBlur_111:596"
                              />
                            </filter>
                            <radialGradient
                              id="paint0_radial_111:596"
                              cx="0"
                              cy="0"
                              r="1"
                              gradientUnits="userSpaceOnUse"
                              gradientTransform="translate(37.5 37.5) rotate(90) scale(40.2574)"
                            >
                              <stop stopOpacity="0.47" />
                              <stop offset="1" stopOpacity="0" />
                            </radialGradient>
                          </defs>
                        </svg>
                      </span>
                    </div>
                    
                    { game.screenshots.length >= 1 &&
                    <div className="mb-10 w-full overflow-hidden rounded">
                      <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                        <Image
                          src={game.screenshots[0].image}
                          alt="image"
                          fill
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    }

                    

                    <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                      {game.description}
                    </p>
                    
                    { game.screenshots.length >= 2 &&
                    <div className="mb-10 w-full overflow-hidden rounded">
                      <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                        <Image
                          src={game.screenshots[1].image}
                          alt="image"
                          fill
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    }
                    
                    {(getPlataform().includes("PC")) && 
                    
                    <>
                    <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                      Requisitos mínimos
                    </h3>
                    
                    <ul className="mb-10 list-inside list-disc text-body-color">
                        
                        <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                            <span className="text-primary dark:text-white">Sistema: { }</span>
                            {game.minimum_system_requirements.os}
                        </li>
                        <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                            <span className="text-primary dark:text-white">Processador: { }</span>
                            {game.minimum_system_requirements.processor}
                        </li>
                        <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                            <span className="text-primary dark:text-white">Memória: { }</span>
                            {game.minimum_system_requirements.memory}
                        </li>
                        <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                            <span className="text-primary dark:text-white">Placa de Vídeo: { }</span>
                            {game.minimum_system_requirements.graphics}
                        </li>
                        <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                            <span className="text-primary dark:text-white">Disco: { }</span>
                            {game.minimum_system_requirements.storage}
                        </li>
                    </ul>
                    </>
                    }
                    
                    { game.screenshots.length >= 3 &&
                    <div className="mb-10 w-full overflow-hidden rounded">
                      <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                        <Image
                          src={game.screenshots[2].image}
                          alt="image"
                          fill
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    }

                    <AvaliarComentario idjogo={game.id}></AvaliarComentario>

                    <div>
                      <NewAvaliacoes idjogo={game.id.toString()}></NewAvaliacoes>
                    </div>

                    <div className="items-center justify-between sm:flex my-4">
                      <div className="mb-5">
                        <h4 className="mb-3 text-sm font-medium text-body-color">
                          Gênero:
                        </h4>
                        <div className="flex items-center">
                          <TagButton href={`/public/categorias/${game.genre.toLowerCase()}`} text={getTranslateGenre(game.genre)} />
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <div className="shadow-three dark:bg-gray-dark mb-10 mt-12 rounded-sm bg-white p-6 dark:shadow-none lg:mt-0">
                  <div className="flex items-center justify-between">
                    <input
                      type="text"
                      placeholder="Pesquisar jogo..."
                      className="border-stroke dark:text-body-color-dark dark:shadow-two mr-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                    <button
                      aria-label="Pesquisar "
                      className="flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-sm bg-primary text-white"
                    >
                      <svg
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.4062 16.8125L13.9375 12.375C14.9375 11.0625 15.5 9.46875 15.5 7.78125C15.5 5.75 14.7188 3.875 13.2812 2.4375C10.3438 -0.5 5.5625 -0.5 2.59375 2.4375C1.1875 3.84375 0.40625 5.75 0.40625 7.75C0.40625 9.78125 1.1875 11.6562 2.625 13.0937C4.09375 14.5625 6.03125 15.3125 7.96875 15.3125C9.875 15.3125 11.75 14.5938 13.2188 13.1875L18.75 17.6562C18.8438 17.75 18.9688 17.7812 19.0938 17.7812C19.25 17.7812 19.4062 17.7188 19.5312 17.5938C19.6875 17.3438 19.6562 17 19.4062 16.8125ZM3.375 12.3438C2.15625 11.125 1.5 9.5 1.5 7.75C1.5 6 2.15625 4.40625 3.40625 3.1875C4.65625 1.9375 6.3125 1.3125 7.96875 1.3125C9.625 1.3125 11.2812 1.9375 12.5312 3.1875C13.75 4.40625 14.4375 6.03125 14.4375 7.75C14.4375 9.46875 13.7188 11.125 12.5 12.3438C10 14.8438 5.90625 14.8438 3.375 12.3438Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                
                
                
                <div className="shadow-three dark:bg-gray-dark mb-10 rounded-sm bg-white dark:shadow-none">
                  <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                    Jogos relacionados
                  </h3>
                  <ul className="p-8">
                    <li className="mb-6 border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
                      <RelatedPost
                        title="PUBG: BATTLEGROUNDS"
                        image="https://www.freetogame.com/g/516/thumbnail.jpg"
                        slug="/11"
                        date="KRAFTON, Inc."
                      />
                    </li>
                    <li className="mb-6 border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
                      <RelatedPost
                        title="Halo Infinite"
                        image="https://www.freetogame.com/g/515/thumbnail.jpg"
                        slug="#"
                        date="Xbox Game Studios"
                      />
                    </li>
                    <li>
                      <RelatedPost
                        title="Valorant"
                        image="https://www.freetogame.com/g/466/thumbnail.jpg"
                        slug="#"
                        date="Riot Games"
                      />
                    </li>
                  </ul>
                </div>

                <div className="shadow-three dark:bg-gray-dark mb-10 rounded-sm bg-white dark:shadow-none">
                  <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                    Plataforma
                  </h3>
                  <div className="flex flex-wrap px-8 py-6">    
                  <TagButton text={game.platform} href={ "/plataforma/" + game.platform.toLocaleLowerCase() } /> 
                  </div>
                </div>  

                <div className="shadow-three dark:bg-gray-dark mb-10 rounded-sm bg-white dark:shadow-none">
                  <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                    Links Importantes
                  </h3>
                  <ul className="px-8 py-6">
                    <li>
                      <a
                        href={game.freetogame_profile_url}
                        className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                      >
                        Página Oficial do Jogo
                      </a>
                    </li>
                    <li>
                      <a
                        href={game.game_url}
                        className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                      >
                        Página de Origem
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.freetogame.com/api-doc"
                        className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                      >
                        API Utilizada
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/suelitonx/gamematch"
                        className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                      > 
                        Repositório no Github
                      </a>
                    </li>
                    
                  </ul>
                </div>
                
                <div className="shadow-three dark:bg-gray-dark mb-10 rounded-sm bg-white dark:shadow-none">
                  <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                    Todas as Categorias
                  </h3>
                  <div className="flex flex-wrap px-8 py-6">
                    {generos.map( (g) => <TagButton key={g.original} href={"/public/categorias/" + g.original} text={g.traducao} />  ) }
                  </div>
                </div>

                
  
                {
                    //<NewsLatterBox />
                }
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  
export default UniqueGamePage;
  