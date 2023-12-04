
import ScrollUp from "@/components/Common/ScrollUp";
import Jogo from "@/components/Jogo/Jogo";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "GameMatch",
  description: "Jogos grátis que você ama",
  // other metadata
};

export default function Home() {
  
  return (
    <>
      <ScrollUp />
      <Jogo random={true} arrJogos={[]}></Jogo>
      
      {/*
      <ScrollUp />
      <Blog />
      */}
      </>
  );
}
