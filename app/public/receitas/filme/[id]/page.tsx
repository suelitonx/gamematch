import ScrollUp from "@/components/Common/ScrollUp";
import { Metadata } from "next";
import { SingleMovieDetails } from "../../_receitascomp/SingleMovieDetails";

export const metadata: Metadata = {
  title: "Detalhes do Filme",
  description: "Receitas PWEB 2023.2",
  // other metadata
};

export default async function FilmeEspecifico({ params } : { params: {id: string}; }) {
  
    //{params.id}

    return (
    <>
      <ScrollUp />
      <SingleMovieDetails id={params.id}></SingleMovieDetails>
      

    </>
  );
}
