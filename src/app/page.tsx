"use client";

import FormCalculateFee from "../components/formCalculateFee";
import TableFees from "../components/tableFees";
import Header from "../components/header";
import PageTitle from "../components/pageTitle";
import { LoanSimulationProvider } from "@/contexts";

export default function Home() {
  return (
    <>
      <LoanSimulationProvider>
        <Header />
        <main className="container mx-auto px-20">
          <PageTitle text="Simulação de Taxas" hasIcon />
          <FormCalculateFee />
          <TableFees hasButton />
        </main>
      </LoanSimulationProvider>
    </>
  );
}
