"use client";

import FormCalculateFee from "../components/formCalculateFee";
import TableList from "../components/tableList";
import Header from "../components/header";
import PageTitle from "../components/pageTitle";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-20">
        <PageTitle text="Simulação de Taxas" hasIcon />
        <FormCalculateFee />
        <TableList />
      </main>
    </>
  );
}
