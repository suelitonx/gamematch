import ScrollUp from "@/components/Common/ScrollUp";
import { Metadata } from "next";
import { ServerSingleMovie } from "../../_receitascomp/ServerSingleMovie";

export const metadata: Metadata = {
  title: "Detalhes do Filme",
  description: "PWEB",
  // other metadata
};

export default function Receita9MovieInfo({ params } : { params: {id: string}; }) {

    return (
    <>
      <ScrollUp />
      <ServerSingleMovie id={params.id}></ServerSingleMovie>
    </>
  );
}
