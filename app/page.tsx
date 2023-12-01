
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
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
      <Blog />
      
    </>
  );
}
