import { useContext } from "react";

import { LoanApplicationContext } from "@/contexts/loanApplication.context";

export default function SearchClientResult() {
  const { clientData, stepFoward } = useContext(LoanApplicationContext)
  const cpfRegex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;

  return (
    <section className="text-center bg-backGround rounded-lg p-12" hidden={clientData ? false : true}>
      <div className="flex flex-col gap-8 text-5">
        <p className="text-font">Cliente encontrado:</p>
        <p className="text-secondary1">{clientData?.cpf.replace(cpfRegex, '$1.$2.$3-$4')}</p>
        <p className="text-primary1 font-bold">{clientData?.name}</p>

        <button onClick={stepFoward} className="btn btn-lg btn-primary" type="submit">
          Solicitar
        </button>
      </div>
    </section>
  );
}
