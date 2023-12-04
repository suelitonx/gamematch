
import ScrollUp from "@/components/Common/ScrollUp";
import Jogo from "@/components/Jogo/Jogo";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";


export const metadata: Metadata = {
  title: "GameMatch",
  description: "Jogos grátis que você ama",
  // other metadata
};

export default async function Home() {
  
  const session = await getServerSession(authOptions);



  return (
    <>
      <ScrollUp />
      <Jogo logado={ session !== null } random={false} arrJogos={[]}></Jogo>
      
      {/*
      <ScrollUp />
      <Blog />
      */}
      </>
  );
}
