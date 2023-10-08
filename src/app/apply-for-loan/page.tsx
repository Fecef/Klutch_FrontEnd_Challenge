"use client"

import { useContext } from "react";

import { LoanApplicationContext } from "@/contexts/loanApplication.context";
import FormCreditCard from "@/components/formCreditCard";
import FormLoan from "@/components/formLoan";
import FormSearchClient from "@/components/formSearchClient";
import Header from "@/components/header";
import LoanChoices from "@/components/loanChoices";
import LoanSummary from "@/components/loanSummary";
import PageTitle from "@/components/pageTitle";
import SearchClientResult from "@/components/searchClientResult";

export default function ApplyForLoan() {
  const { step } = useContext(LoanApplicationContext)

  return (
    <>
      <Header />
      <main className="container mx-auto px-20">
        <PageTitle text="Solicitar Empréstimo" hasIcon />

        <section className="flex flex-col items-center py-12">
          <div hidden={step !== 1} className="w-[47rem]">
            <FormSearchClient />
            <SearchClientResult />
          </div>

          <div hidden={step !== 2}>
            <FormCreditCard />
          </div>

          <div hidden={step !== 3}>
            <LoanChoices />
          </div>

          <div hidden={step !== 4}>
            <FormLoan />
          </div>

          <div hidden={step !== 5}>
            <LoanSummary />
          </div>
        </section>
      </main>
    </>
  );
}
