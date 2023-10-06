"use client";

import FormCalculateFee from "../components/formCalculateFee";
import TableFees from "../components/tableFees";
import Header from "../components/header";
import PageTitle from "../components/pageTitle";
import { useContext } from "react";
import { LoanSimulationContext } from "@/contexts/loanSimulation.context";

export default function Home() {
  const { tablesList } = useContext(LoanSimulationContext)

  return (
    <>
      <Header />
      <main className="container mx-auto px-20">
        <PageTitle text="Simulação de Taxas" hasIcon />
        <FormCalculateFee />
        <TableFees tablesList={tablesList} hasButton hasFooter />
      </main>
    </>
  );
}
