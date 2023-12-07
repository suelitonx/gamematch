import ScrollUp from "@/components/Common/ScrollUp";
import { Metadata } from "next";
import Receita5 from "./Receita5";

export const metadata: Metadata = {
  title: "Receitas 5 e 6",
  description: "PWEB",
  // other metadata
};

export default function Receita5Page() {

    return (
    <>
      <ScrollUp />
      <Receita5></Receita5>
    </>
  );
}
