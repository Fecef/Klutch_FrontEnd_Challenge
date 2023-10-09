import { useContext } from "react";

import { LoanApplicationContext } from "@/contexts/loanApplication.context";

export default function SearchClientResult() {
  const { clientData, clientNotFound, stepFoward } = useContext(LoanApplicationContext)
  const cpfRegex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;

  if (!clientNotFound) {
    return (
      <div className="border border-primary1 mt-14 w-[50rem] p-14 mx-auto rounded-lg">
        <p className="text-1 text-primary1">
          Cliente não <span className="text-secondary1 font-bold">encontrado.</span>
        </p>
        <p className="text-1 text-primary1">Verifique se digitou o CPF corretamente.</p>
      </div>
    )
  }

  return (
    <section className="text-center bg-backGround rounded-lg p-12 animate__animated animate__faster animate__fadeInUp" hidden={clientData ? false : true}>
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
