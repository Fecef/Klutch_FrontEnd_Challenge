import { LoanApplicationContext } from "@/contexts/loanApplication.contex";
import { useContext } from "react";

export default function LoanChoices() {
  const { stepFoward } = useContext(LoanApplicationContext)
  return (
    <div className="flex flex-col items-center gap-12">
      <h2 className="text-5 text-primary1">Escolha a modalidade:</h2>

      <button onClick={stepFoward} className="btn btn-lg btn-primary" type="submit">
        Cartão de Crédito
      </button>

      <span className="text-5 text-font">Ou</span>

      <div className="flex flex-col">
        <button className="btn btn-lg btn-primary" disabled>
          Cartão Consignado
        </button>

        <span className="text-2 text-font self-end">Em Breve</span>
      </div>
    </div>
  );
}
