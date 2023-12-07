import ScrollUp from "@/components/Common/ScrollUp";
import { Metadata } from "next";
import Receita3 from "./Receita3";

export const metadata: Metadata = {
  title: "Receita 3",
  description: "PWEB",
  // other metadata
};

export default function Receita3Page() {

    return (
    <>
      <ScrollUp />
      <Receita3></Receita3>
      

    </>
  );
}
