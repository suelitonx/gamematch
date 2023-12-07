
import ScrollUp from "@/components/Common/ScrollUp";
import ReceitasForm from "@/components/Receita/ReceitasPage";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Receitas",
  description: "PWEB",
  // other metadata
};


export default async function ReceitasPage() {

  return (
    <>
      <ScrollUp />
      <ReceitasForm></ReceitasForm>
      
      </>
  );
}
