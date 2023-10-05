import FormCreditCard from "@/components/formCreditCard";
import FormLoan from "@/components/formLoan";
import FormSearchClient from "@/components/formSearchClient";
import Header from "@/components/header";
import LoanChoices from "@/components/loanChoices";
import LoanSummary from "@/components/loanSummary";
import PageTitle from "@/components/pageTitle";
import SearchClientResult from "@/components/searchClientResult";


export default function ApplyForLoan() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-20">
        <PageTitle text="Solicitar Empréstimo" hasIcon />

        <section className="flex flex-col items-center py-12">
          {/* 1ª Etapa */}
          {/* <div className="w-[47rem]">
            <FormSearchClient />
            <SearchClientResult />
          </div> */}

          {/* 2ª Etapa */}
          {/* <FormCreditCard /> */}

          {/* 3ª Etapa */}
          {/* <LoanChoices /> */}

          {/* 4ª Etapa */}
          {/* <FormLoan /> */}

          {/* 5ª Etapa */}
          {/* <LoanSummary /> */}
        </section>
      </main>
    </>
  );
}
