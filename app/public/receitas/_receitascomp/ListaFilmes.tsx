import useSWR from "swr"
import Filme from "./filmex"

type ListaFilmesProps = {
    url: string;
    servidor?: boolean;
};

export default function ListaFilmes({ url, servidor }: ListaFilmesProps) {

    const {data, error} = useFetch(url)

    if(url.length == 0) return (
        <div></div>
    )

    if(error) return <p className="text-center text-base text-red-400 font-medium text-body-color">
        Não foi possível estabelecer a conexão com a API.
    </p>
    
    if(!data) return <h3 className="mb-5 text-center font-bold text-black dark:text-white"> Carregando filmes...</h3>

    if(data && data.Search != null) {
        
        if(data.Search.length >= 1)
        {
            return (                
                <div className="shadow-three dark:bg-gray-dark mb-10 rounded-sm bg-white dark:shadow-none">
                    <ul className="p-8">
                    

                    {data.Search.map( (m) => <li key={m.imdbID} className="mb-6 border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
                        <Filme
                        title={m.Title}
                        image={m.Poster}
                        link={servidor === true ?  `/public/receitas/9/${m.imdbID}` :  `/public/receitas/filme/${m.imdbID}`}
                        date={m.Year}
                        />
                    </li>
                    )}

                    </ul>
                </div>
            )
                
        }
        else
        {
            return <p className="text-center text-base text-red-400 font-medium text-body-color">
                Nenhum filme encontrado.
            </p>
        }     

        
    
    }
    else return <p className="text-center text-base text-red-400 font-medium text-body-color">
        Nenhum filme encontrado.
        </p>


}


function useFetch(url : string) {
    const {data, error} = useSWR(url, async (url) => {
  
      const res = await fetch(url)
  
      const json = await res.json()
  
      return json
    }, {revalidateOnFocus: false})
  
    return { data, error }  
}