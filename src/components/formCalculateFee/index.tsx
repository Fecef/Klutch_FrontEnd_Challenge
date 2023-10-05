"use client";

import { LoanSimulationContext } from "@/contexts/LoanSimulation.context";
import { useContext } from "react";
import { useForm } from "react-hook-form";

export default function FormCalculateFee() {
  const { handleDesiredValue } = useContext(LoanSimulationContext);
  const { register, handleSubmit } = useForm<IFeeCalc>();
  const formSubmit = (data: IFeeCalc) => handleDesiredValue(+data.value);

  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className="text-center w-full mb-24"
    >
      <h2 className="text-primary1 text-6 font-bold">Valor Desejado</h2>

      <div className="flex justify-center gap-12 mt-8">
        <input
          className="bg-backGround text-center text-font rounded-lg w-[31%] text-4 focus:outline-none"
          type="text"
          placeholder="R$0,00"
          autoComplete="off"
          {...register("value")}
        />

        <button className="btn btn-md btn-secondary" type="submit">
          Calcular
        </button>
      </div>
    </form>
  );
}
