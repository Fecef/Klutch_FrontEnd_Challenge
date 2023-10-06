import { useContext } from "react";
import IconCard from "../icons/iconCard";
import SummaryField from "../summaryField";
import { LoanApplicationContext } from "@/contexts/loanApplication.contex";
import Link from "next/link";

export default function LoanSummary() {
  const { cardData, clientData, loanData } = useContext(LoanApplicationContext)

  return (
    <div className="flex flex-col items-center gap-12">
      <h2 className="text-primary1 text-6 font-bold">
        Solicitação Realizada com Sucesso!
      </h2>
      <h3 className="text-primary1 text-3 self-start">Resumo da Solicitação</h3>

      <div className="flex gap-8">
        <SummaryField>
          <p>{cardData?.owner}</p>
          <p>{clientData?.phone}</p>
        </SummaryField>

        <SummaryField>
          <p className="text-primary1">Taxa de Juros</p>
          <p className="text-secondary1 text-4 not-italic">{loanData?.tableRate + "%"}</p>
        </SummaryField>
      </div>

      <div className="flex gap-8">
        <SummaryField>
          <IconCard fill="#ef9c4b" />
          <p>{cardData?.cvc}</p>
          <p className="text-black font-bold not-italic">VISA</p>
          <p>{cardData?.validity}</p>
          <div className="w-[20%]"></div>
        </SummaryField>

        <SummaryField>
          <p className="text-primary1">Parcelas:</p>
          <p className="text-secondary1 text-4 not-italic">{loanData?.installments}</p>
        </SummaryField>
      </div>

      <div className="flex gap-8">
        <SummaryField>
          <p className="text-primary1">Valor desejado:</p>
          <p className="text-[#31ac2b] text-4 not-italic">{loanData?.loanValue}</p>
        </SummaryField>

        <SummaryField>
          <p className="text-primary1">Valor da Parcela:</p>
          <p className="text-[#31ac2b] text-4 not-italic">{loanData?.installmentTotalValue}</p>
        </SummaryField>
      </div>

      <SummaryField>
        <p className="text-primary1">Valor Total do Empréstimo:</p>
        <p className="text-[#31ac2b] text-4 not-italic">{loanData?.loanTotalValue}</p>
      </SummaryField>

      <Link href="/loan-details" className="btn btn-primary btn-lg" type="submit">
        Detalhe da Solicitação
      </Link>

      <small className="text-primary1">
        O CredtFica avaliará a solicitação.
      </small>
    </div>
  );
}
