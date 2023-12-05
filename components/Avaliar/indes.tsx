import { Avaliacao } from "@/types/avaliacao";
import SingleAvaliacao from "./SingleAvaliacao";

const Avaliacoes = async ({ idjogo }: { idjogo: string }) => {
  //avaliacoesData[0].designation = idjogo;
  
  const linkAPI = `https://www.sueliton.live/api/collections/avaliacaogm/records?filter=(idjogo=${idjogo})&expand=usuario`

  let arrayAvaliacoes: Avaliacao[] = [];

  const response = await fetch(linkAPI);

  if(response.status === 200)
  {
    const ratings = await response.json();

    ratings.items.forEach( comment => {
      const today = new Date(comment.updated)

      arrayAvaliacoes.push({
        id: comment.id,
        idjogo: comment.idjogo,
        nomeUsuario: comment.expand !== undefined ? comment.expand.usuario.name : "Anônimo",
        comentario: comment.comentario,
        data: today.toLocaleDateString(),
        valor: comment.valor
      })
    });
  }

  if(arrayAvaliacoes.length >= 1)
  {
      return (
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {arrayAvaliacoes.map((avaliacao) => (
            <SingleAvaliacao key={avaliacao.id} avaliacao={avaliacao} />
          ))}
        </div>
      )
  }

  return <></>
  
};

export default Avaliacoes;
