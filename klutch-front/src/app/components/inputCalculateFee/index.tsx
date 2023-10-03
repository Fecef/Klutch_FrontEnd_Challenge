import Button from "../button";

export default function InputCalculateFee() {
  return (
    <form className="text-center w-full mb-24">
      <h2 className="text-primary1 text-6 font-bold">Valor Desejado</h2>

      <div className="flex justify-center gap-12 mt-8">
        <input
          className="bg-backGround text-center text-font rounded-lg w-[31%] text-4 focus:outline-none"
          type="text"
          placeholder="R$0,00"
          autoComplete="off"
        />

        <Button text="Calcular" theme="orange" isSubmit />
      </div>
    </form>
  );
}
