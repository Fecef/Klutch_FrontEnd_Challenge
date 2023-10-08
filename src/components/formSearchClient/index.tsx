import { useContext } from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";

import { LoanApplicationContext } from "@/contexts/loanApplication.context";

export default function FormSearchClient() {
  const { getClient } = useContext(LoanApplicationContext)
  const { register, handleSubmit } = useForm<{ cpf: string }>();

  const formSubmit = (data: { cpf: string }) => getClient(data.cpf);

  return (
    <form onSubmit={handleSubmit(formSubmit)} className="text-center mb-24">
      <h2 className="text-primary1 text-5">Busque o Cliente</h2>

      <div className="flex justify-center mt-8">
        <label className="hidden" htmlFor="cpf">CPF</label>
        <InputMask
          className="max-w-[71%] input-search"
          id="cpf"
          type="text"
          placeholder="000.000.000-00"
          autoComplete="off"
          required
          mask="999.999.999-99"
          {...register("cpf")}
        />

        <button className="btn btn-md btn-primary" type="submit">
          Buscar
        </button>
      </div>
    </form>
  );
}
