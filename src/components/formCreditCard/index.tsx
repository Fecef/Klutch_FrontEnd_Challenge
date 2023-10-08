import Image from "next/image";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import InputMask from 'react-input-mask';

import { LoanApplicationContext } from "@/contexts/loanApplication.context";

export default function FormCreditCard() {
  const { stepFoward, saveCardData } = useContext(LoanApplicationContext);
  const { register, handleSubmit, setValue } = useForm<ICreditCard>();

  const inputNumbers = /[^A-Za-z\s\W]/g
  const removeNumbers = (input: string) => input.replace(inputNumbers, "")

  const formSubmit = (data: ICreditCard) => {
    saveCardData(data)
    stepFoward()
  };

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      {/*  Lado esquerdo */}
      <div className="flex gap-20 mx-auto">
        <section className="w-full flex flex-col gap-8">
          <p className="text-center text-primary1 text-1">
            Insira os dados do Cartão:
          </p>

          <div className="flex items-center relative">
            <label htmlFor="owner" hidden>Titular da Conta</label>
            <input
              className="input-creditCard"
              type="text"
              placeholder="Titular da Conta"
              autoComplete="off"
              required
              {...register("owner", {
                onChange: (e) => setValue("owner", removeNumbers(e.target.value))
              })}
            />
          </div>

          <div className="flex items-center relative">
            <label htmlFor="cardNumber" hidden>Número do Cartão</label>
            <InputMask
              className="input-creditCard"
              id="cardNumber"
              mask="9999 9999 9999 9999"
              placeholder="Número do Cartão"
              autoComplete="off"
              required
              maskChar=""
              {...register("number")}
            />

            <span className="absolute right-5">
              <Image
                src="/img/visacard.png"
                alt="Visa Card"
                width={50}
                height={0}
              />
            </span>
          </div>

          <div className="flex items-center relative">
            <label htmlFor="validity" hidden>Data de Validade</label>
            <InputMask
              className="input-creditCard"
              id="validity"
              mask="99/99"
              placeholder="Data de Validade"
              autoComplete="off"
              required
              {...register("validity")}
            />
          </div>

          <div className="flex items-center relative">
            <label htmlFor="cvc" hidden>CVC</label>
            <InputMask
              className="input-creditCard"
              id="cvc"
              mask="9999"
              placeholder="CVC"
              autoComplete="off"
              required
              maskChar=""
              {...register("cvc")}
            />
          </div>
        </section>

        {/*  Lado direito */}
        <section className="w-full flex flex-col gap-8">
          <p className="text-center text-primary1 text-1">
            Faça o upload dos anexos do cartão:
          </p>

          <div className="flex items-center relative">
            <input
              className="input-creditCard"
              type="text"
              placeholder="Cartão de Crédito (Frente)"
              autoComplete="off"
            />

            <span className="cursor-pointer text-font text-[1.8rem] italic underline absolute right-5">
              Adicionar
            </span>
          </div>

          <div className="flex items-center relative">
            <input
              className="input-creditCard"
              type="text"
              placeholder="Cartão de Crédito (Verso)"
              autoComplete="off"
            />

            <span className="cursor-pointer text-font text-[1.8rem] italic underline absolute right-5">
              Adicionar
            </span>
          </div>

          <div className="flex items-center relative">
            <input
              className="input-creditCard"
              type="text"
              placeholder="Selfie com Cartão de Crédito"
              autoComplete="off"
            />

            <span className="cursor-pointer text-font text-[1.8rem] italic underline absolute right-5">
              Adicionar
            </span>
          </div>

          <div className="flex items-center relative">
            <p className="text-primary1 text-1">
              Atenção: As fotos devem estar legíveis, com todas as informações
              visíveis do cartão.
            </p>
          </div>
        </section>
      </div>

      <button className="btn btn-lg btn-primary mx-auto my-24" type="submit">
        Continuar
      </button>
    </form>
  );
}
