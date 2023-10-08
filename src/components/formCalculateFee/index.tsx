"use client";
import { useContext } from "react";
import CurrencyInput from 'react-currency-input-field';

import { useForm } from "react-hook-form";
import { LoanSimulationContext } from "@/contexts/loanSimulate.context";

export default function FormCalculateFee() {
  const { handleDesiredValue } = useContext(LoanSimulationContext);
  const { register, handleSubmit } = useForm<{ desiredValue: string }>();

  const formSubmit = ({ desiredValue }: { desiredValue: string }) => handleDesiredValue(desiredValue);

  return (
    <form onSubmit={handleSubmit(formSubmit)} className="text-center w-full mb-24">
      <h2 className="text-primary1 text-6 font-bold">Valor Desejado</h2>
      <div className="flex justify-center gap-4 mt-8">
        <label htmlFor="desiredValue" hidden></label>
        <CurrencyInput
          className="w-[44rem] text-center input-search"
          placeholder="R$ 0,00"
          autoComplete="off"
          type="text"
          id="desiredValue"
          prefix="R$ "
          allowNegativeValue={false}
          {...register("desiredValue")}
        />;

        <button className="btn btn-md btn-secondary" type="submit">
          Calcular
        </button>
      </div>
    </form>
  );
}
