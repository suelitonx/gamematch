import ScrollUp from "@/components/Common/ScrollUp";
import { Metadata } from "next";
import Receita4 from "./Receita4";

export const metadata: Metadata = {
  title: "Receita 4",
  description: "PWEB",
  // other metadata
};

export default function Receita4Page() {


    return (
    <>
      <ScrollUp />
      <Receita4></Receita4>
      

    </>
  );
}
