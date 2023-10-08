import { useContext, useState } from "react";
import { useForm, useWatch } from "react-hook-form";

import IconCheck from "../icons/iconCheck";
import { LoanApplicationContext } from "@/contexts/loanApplication.context";
import { LoanSimulationContext } from "@/contexts/loanSimulate.context";
import CurrencyInput from "react-currency-input-field";
import Table from "../table";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaSolicitation } from "./schema";

export default function FormLoan() {
  const { saveLoanData } = useContext(LoanApplicationContext)
  const { desiredValue, table, tableList, handleDesiredValue, handleTableSelect, handleLoanInstallments } = useContext(LoanSimulationContext)
  const { register, handleSubmit, getValues, formState: { errors } } = useForm<ILoan>({ resolver: yupResolver(schemaSolicitation) })

  const [selected, setSelected] = useState(false)
  const [modality, setModality] = useState("Automático")

  const installment = getValues("installments")
  const installmentTotalValue = table?.installments[installment - 1].installmentTotalValue
  const loanTotalValue = table?.installments[installment - 1].loanTotalValue

  const handleSelect = (tableName: string) => handleTableSelect(tableName)
  const handleClick = (streamType: string) => {
    setModality(streamType)
    setSelected(!selected)
  }

  const formSubmit = (data: ILoan) => {
    data.tableName = table!.tableName
    data.tableRate = table!.tableRate
    data.tableRateId = table!.id
    data.stream = modality
    data.installmentTotalValue = installmentTotalValue
    data.loanTotalValue = loanTotalValue

    saveLoanData(data);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-[130rem] flex justify-center gap-10 mb-24"
      >
        <div className="w-[59rem] flex flex-col gap-10">
          <label className="label-loan bg-[#e8ffe3]">
            Valor desejado:
            <CurrencyInput
              className="w-[45%] input-loan"
              defaultValue={desiredValue}
              placeholder="R$ 0,00"
              autoComplete="off"
              type="text"
              id="desiredValue"
              prefix="R$ "
              allowNegativeValue={false}
              {...register("loanValue", {
                onChange: (e) => handleDesiredValue(e.target.value || "0")
              })}
            />
          </label>
          <h1>{errors.loanValue?.message}</h1>

          <label className="label-loan bg-backGround">
            Parcelas:
            <input
              className="w-[45%] input-loan"
              defaultValue={1}
              type="number"
              autoComplete="off"
              placeholder="1"
              min={1}
              max={10}
              onKeyDown={(e) => e.preventDefault()}
              {...register("installments", {
                onChange: (e) => handleLoanInstallments(e.target.value)
              })}
            />
          </label>

          <div className="flex w-[59rem]">
            <button
              onClick={() => handleClick("Automático")}
              className={`${selected ? "btn-whiteFixed" : "btn-primary"} btn btn-lg`}
              type="button"
            >
              Automático
            </button>

            <button
              onClick={() => handleClick("Manual")}
              className={`${selected ? "btn-primary" : "btn-whiteFixed"} btn btn-lg`}
              type="button"
            >
              Manual
            </button>
          </div>
        </div>

        <div className="w-[59rem] flex flex-col justify-between gap-10">
          <div className="flex flex-col gap-10">
            <label className="label-loan bg-[#e8ffe3]">
              Valor Total do Empréstimo:
              <input
                className="w-[45%] input-loan"
                type="text"
                autoComplete="off"
                placeholder="R$ 0,00"
                value={loanTotalValue || ""}
                readOnly
              />
            </label>

            <label className="label-loan bg-backGround">
              Valor da parcela:
              <input
                className="w-[45%] input-loan"
                type="text"
                autoComplete="off"
                placeholder="R$0,00"
                value={installmentTotalValue || ""}
                readOnly
              />
            </label>
          </div>

          <label className={`${errors.tableName ? "bg-black" : ""} absolute translate-y-[-20rem] w-[45rem] self-end label-loan bg-backGround`}>
            Tabela:
            <select
              className="w-[65%] input-loan bg-whiteFixed disabled:opacity-40"
              disabled={desiredValue === 0}
              {...register("tableName")}
            >
              <option value="">Selecionar</option>
              {tableList.map((table, i) => (
                <option onClick={(e: any) => handleSelect(e.target.textContent)} key={i} value={table.tableName}>
                  {table.tableName}
                </option>
              ))}
            </select>
          </label>

          <button className="btn btn-lg btn-primary w-full" type="submit">
            <IconCheck fill="#fff" />
            Concluir
          </button>
        </div>
      </form >

      <Table />
    </>
  );
}
