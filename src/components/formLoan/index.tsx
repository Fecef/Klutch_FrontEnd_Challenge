import TableFees from "../tableFees";
import IconCheck from "../icons/iconCheck";
import { useContext, useState } from "react";
import { LoanApplicationContext } from "@/contexts/loanApplication.contex";
import { useForm } from "react-hook-form";
import { LoanSimulationContext } from "@/contexts/loanSimulate.context";
import { CastBRL } from "@/utils/castBrl";

export default function FormLoan() {
  const { stepFoward, saveLoanData, loanData } = useContext(LoanApplicationContext)
  const { tablesList, tableDefault, desiredValue, handleDesiredValue, changeTableDefault } = useContext(LoanSimulationContext)
  const { register, handleSubmit } = useForm<ILoan>();
  const [selected, setSelected] = useState(false)

  const [streamType, setStreamType] = useState("");
  const [installments, setInstallments] = useState(0);
  const [loanTotalValue, setLoanTotalValue] = useState(0);
  const [installmentTotalValue, setInstallmentTotalValue] = useState("");


  const formSubmit = (data: ILoan) => {
    data.stream = streamType
    data.tableRate = tableDefault[0].tableRate;
    saveLoanData(data)
  };

  const handleClick = (streamType: string) => {
    setStreamType(streamType)
    setSelected(!selected)
  }

  const handleSelect = (i: number) => {
    changeTableDefault(tablesList[i].tableName)
  }

  const calcLoanTotalValue = () => {
    // jurosParcela = jurosTabela * qtdeParcelas
    // valorDaParcela = (valorDesjado / qtdeParcelas ) * jurosParcela
    // const feeRate = +loanData!.tableRate * installments
  }

  const calcInstallmentTotalValue = () => {
    const installmenteFee = tableDefault[0].tableRate * installments;
    const installmentValue = desiredValue / installments
    const installmentTotalValue = (installmentValue * installmenteFee) + installmentValue

    // setInstallmentTotalValue(CastBRL(installmentTotalValue))
    return CastBRL(installmentTotalValue)
  }


  return (
    <>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-[130rem] flex justify-center gap-10 mb-24"
      >
        <div className="w-[59rem] flex flex-col gap-10">
          <label className="flex items-center justify-between w-full p-6 text-primary1 text-1 font-bold italic rounded-lg bg-[#e8ffe3]">
            Valor desejado:
            <input
              className="w-[45%] bg-whiteFixed text-2 text-secondary1 font-bold italic rounded-l-lg p-8 focus:outline-none"
              type="text"
              autoComplete="off"
              placeholder="R$0,00"
              {...register("loanValue", {
                onChange: (e) => handleDesiredValue(e.target.value)
              })}
            />
          </label>

          <label className="flex items-center justify-between w-full p-6 text-primary1 text-1 font-bold italic rounded-lg bg-backGround">
            Parcelas:
            <input
              className="w-[45%] bg-whiteFixed text-2 text-secondary1 font-bold italic rounded-l-lg p-8 focus:outline-none"
              type="number"
              autoComplete="off"
              placeholder="0"
              {...register("installments", {
                onChange: (e) => setInstallments(e.target.value)
              })}
            />
          </label>

          <p className="text-primary1 text-1">Escolha o tipo de contrato:</p>

          <div className="flex w-[59rem]">
            <button
              onClick={() => handleClick("Automático")}
              className={`btn btn-lg ${selected ? "btn-whiteFixed" : "btn-primary"
                }`}
              type="button"
            >
              Automático
            </button>

            <button
              onClick={() => handleClick("Manual")}
              className={`btn btn-lg ${selected ? "btn-primary" : "btn-whiteFixed"
                }`}
              type="button"
            >
              Manual
            </button>
          </div>
        </div>

        <div className="w-[59rem] flex flex-col justify-between gap-10">
          <div className="flex flex-col gap-10">
            <label className="flex items-center justify-between w-full p-6 text-primary1 text-1 font-bold italic rounded-lg bg-[#e8ffe3]">
              Valor Total do Empréstimo:
              <input
                className="w-[45%] bg-whiteFixed text-2 text-secondary1 font-bold italic rounded-l-lg p-8 focus:outline-none"
                type="text"
                autoComplete="off"
                placeholder="R$ 0,00"
                value={loanTotalValue}
                {...register("loanTotalValue")}
              />
            </label>

            <label className="flex items-center justify-between w-full p-6 text-primary1 text-1 font-bold italic rounded-lg bg-backGround">
              Valor da parcela:
              <input
                className="w-[45%] bg-whiteFixed text-2 text-secondary1 font-bold italic rounded-l-lg p-8 focus:outline-none"
                type="text"
                autoComplete="off"
                placeholder="R$0,00"
                value={installmentTotalValue}
                {...register("installmentTotalValue")}
              />
            </label>
          </div>

          <label className="absolute translate-y-[-20rem] w-[45rem] flex items-center justify-between self-end p-6 text-primary1 text-1 font-bold italic rounded-lg bg-backGround">
            Tabela:
            <select
              className="w-[65%] bg-whiteFixed text-2 text-secondary1 font-bold italic rounded-l-lg p-8 focus:outline-none"
              {...register("tableName")}
            >
              {tablesList.map((table, i) => (
                <option
                  onClick={() => handleSelect(i)}
                  key={i}
                  value={table.tableName}
                >
                  {table.tableName}
                </option>
              ))}
            </select>
          </label>

          <button onClick={stepFoward} className="btn btn-lg btn-primary w-full" type="submit">
            <IconCheck fill="#fff" />
            Concluir
          </button>
        </div>
      </form>

      <TableFees tablesList={tableDefault} />
    </>
  );
}
