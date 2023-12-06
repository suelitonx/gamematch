import { Avaliacao } from "@/types/avaliacao";
import SingleAvaliacao from "./SingleAvaliacao";

async function getData(idjogo: string) {
  const linkAPI = `https://www.sueliton.live/api/collections/avaliacaogm/records?filter=(idjogo=${idjogo})&expand=usuario&sort=-created`

  const res = await fetch(linkAPI, { next: { revalidate: 5 } })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const Avaliacoes = async ({ idjogo }: { idjogo: string }) => {
  //avaliacoesData[0].designation = idjogo;
  
  let arrayAvaliacoes: Avaliacao[] = [];

  const ratings = await getData(idjogo);

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
  
  
  if(arrayAvaliacoes.length >= 1)
  {
      return (
        <div className="grid grid-cols-1 gap-x-4 gap-y-4">
          {arrayAvaliacoes.map((avaliacao) => (
            <SingleAvaliacao key={avaliacao.id} avaliacao={avaliacao} />
          ))}
        </div>
      )
  }

  return <></>
  
};

export default Avaliacoes;
