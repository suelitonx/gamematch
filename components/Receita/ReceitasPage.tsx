import { Receita } from "@/types/receita";
import SectionTitle from "../Common/SectionTitle";
import SingleReceita from "./SingleReceita";

const ReceitasForm = ( ) => {

    const receitas: Receita[] = [
    {
        id: 1,
        title: "Receita 1",
        thumbnail: "/images/receitas/1.png",
        short_description: "Começando do básico. Página simples com uma puxada de API de conselhos.",
        url: "/public/receitas/1",
        developer: "Susu"
    },
    {
        id: 2,
        title: "Receita 2",
        thumbnail: "/images/receitas/2.png",
        short_description: "A página que você está acessando já é uma implementação da receita 2.",
        url: "/public/receitas",
        developer: "Susu"
    },
    {
        id: 3,
        title: "Receita 3",
        thumbnail: "/images/receitas/3.png",
        short_description: "Filtragem, pesquisa, listagem e exibição dos filmes diretamente da api (com imagens).",
        url: "/public/receitas/3",
        developer: "Susu"
    },
    {
        id: 4,
        title: "Receita 4",
        thumbnail: "/images/receitas/4.png",
        short_description: "Utilizando hooks (swr) e rotas dinâmicas",
        url: "/public/receitas/4",
        developer: "Susu"
    },
    {
      id: 5,
      title: "Receitas 5 e 6",
      thumbnail: "/images/receitas/5.png",
      short_description: "Melhorias da Receita 4, com implementação de Estados.",
      url: "/public/receitas/5",
      developer: "Susu"
    },
    {
      id: 9,
      title: "Receita 9",
      thumbnail: "/images/receitas/9.png",
      short_description: "As rotas dinâmicas agora vão ser pré-renderizadas pelo servidor.",
      url: "/public/receitas/9",
      developer: "Susu"
    },
    /*
    {
        id: 5,
        title: "Receita 5",
        thumbnail: "/images/receitas/5.png",
        short_description: "Começando do básico",
        url: "/public/receitas/5",
        developer: "Susu"
    },
    {
        id: 6,
        title: "Receita 6",
        thumbnail: "/images/receitas/6.png",
        short_description: "Começando do básico",
        url: "/public/receitas/6",
        developer: "Susu"
    },
    {
        id: 9,
        title: "Receita 9",
        thumbnail: "/images/receitas/9.png",
        short_description: "Começando do básico",
        url: "/public/receitas/9",
        developer: "Susu"
    },
    */
    ];

  return (
    <section
      id="receitas"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
      <SectionTitle
          title="Receitas desenvolvidas na disciplina de PWEB"
          paragraph="2023.2"
          center
        />


        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">

          {receitas.map((r) => (
            <div key={r.id} className="w-full">
              <SingleReceita receita={r} />
            </div>
          ))}

        </div>
      </div>

            

    </section>
  );
};

export default ReceitasForm;
