import { LoanApplicationContext } from "@/contexts/loanApplication.contex";
import { useContext } from "react";

export default function SearchClientResult() {
  const { clientData, stepFoward } = useContext(LoanApplicationContext)

  return (
    <section className="text-center bg-backGround rounded-lg p-12" hidden={clientData ? false : true}>
      <div className="flex flex-col gap-8 text-5">
        <p className="text-font">Cliente encontrado:</p>
        <p className="text-secondary1">{clientData?.cpf}</p>
        <p className="text-primary1 font-bold">{clientData?.name}</p>

        <button onClick={stepFoward} className="btn btn-lg btn-primary" type="submit">
          Solicitar
        </button>
      </div>
    </section>
  );
}
