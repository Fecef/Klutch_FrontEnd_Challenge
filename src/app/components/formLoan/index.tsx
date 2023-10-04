import TableFees from "../tableFees";
import IconCheck from "../icons/iconCheck";

export default function FormLoan() {
  return (
    <>
      <form className="w-[130rem] flex justify-center gap-10 mb-24">
        <div className="w-[59rem] flex flex-col gap-10">
          <label className="flex items-center justify-between w-full p-6 text-primary1 text-1 font-bold italic rounded-lg bg-[#e8ffe3]">
            Valor desejado:
            <input
              className="w-[45%] bg-whiteFixed text-2 text-secondary1 font-bold italic rounded-l-lg p-8 focus:outline-none"
              type="text"
              autoComplete="off"
              value="R$ 1.000,00"
            />
          </label>

          <label className="flex items-center justify-between w-full p-6 text-primary1 text-1 font-bold italic rounded-lg bg-backGround">
            Parcelas:
            <input
              className="w-[45%] bg-whiteFixed text-2 text-secondary1 font-bold italic rounded-l-lg p-8 focus:outline-none"
              type="number"
              autoComplete="off"
              value="3"
            />
          </label>

          <p className="text-primary1 text-1">Escolha o tipo de contrato:</p>

          <div className="flex w-[59rem]">
            <button className="btn btn-lg btn-primary" type="button">
              Automático
            </button>

            <button className="btn btn-lg btn-primary" type="button">
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
                value="R$ 1.000,00"
              />
            </label>

            <label className="flex items-center justify-between w-full p-6 text-primary1 text-1 font-bold italic rounded-lg bg-backGround">
              Valor da parcela:
              <input
                className="w-[45%] bg-whiteFixed text-2 text-secondary1 font-bold italic rounded-l-lg p-8 focus:outline-none"
                type="text"
                autoComplete="off"
                value="R$ 1.000,00"
              />
            </label>
          </div>

          <button className="btn btn-lg btn-primary w-full" type="submit">
            <IconCheck fill="#fff" />
            Concluir
          </button>
        </div>
      </form>

      <TableFees />
    </>
  );
}
