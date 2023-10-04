import Image from "next/image";

export default function FormCreditCard() {
  return (
    <form>
      {/*  Lado esquerdo */}
      <div className="flex gap-20 mx-auto">
        <section className="w-full flex flex-col gap-8">
          <p className="text-center text-primary1 text-1">
            Insira os dados do Cartão:
          </p>

          <div className="flex items-center relative">
            <input
              className="input-creditCard"
              type="text"
              placeholder="Nome no Cartão"
              autoComplete="off"
            />
          </div>

          <div className="flex items-center relative">
            <input
              className="input-creditCard"
              type="text"
              placeholder="0000000000000000"
              autoComplete="off"
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
            <input
              className="input-creditCard"
              type="text"
              placeholder="Data de Validade"
              autoComplete="off"
            />
          </div>

          <div className="flex items-center relative">
            <input
              className="input-creditCard"
              type="text"
              placeholder="CVC"
              autoComplete="off"
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
