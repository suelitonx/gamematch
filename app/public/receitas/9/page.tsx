import ScrollUp from "@/components/Common/ScrollUp";
import { Metadata } from "next";
import Receita9 from "./Receita9";

export const metadata: Metadata = {
  title: "Receita 9",
  description: "PWEB",
  // other metadata
};

export default function Receita4Page() {

    return (
    <>
      <ScrollUp />
      <Receita9></Receita9>
    </>
  );
}
