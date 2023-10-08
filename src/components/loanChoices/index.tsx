import { useContext } from "react";

import { LoanApplicationContext } from "@/contexts/loanApplication.context";

export default function LoanChoices() {
  const { stepFoward, cardData } = useContext(LoanApplicationContext)

  const handleClick = (e: any) => {
    cardData!.modality = e.target.textContent
    stepFoward()
  }

  return (
    <div className="flex flex-col items-center gap-12">
      <h2 className="text-5 text-primary1">Escolha a modalidade:</h2>

      <button onClick={handleClick} className="btn btn-lg btn-primary">
        Cartão de Crédito
      </button>

      <span className="text-5 text-font">Ou</span>

      <div className="flex flex-col">
        <button onClick={handleClick} className="btn btn-lg btn-primary" disabled>
          Cartão Consignado
        </button>

        <span className="text-2 text-font self-end">Em Breve</span>
      </div>
    </div>
  );
}
