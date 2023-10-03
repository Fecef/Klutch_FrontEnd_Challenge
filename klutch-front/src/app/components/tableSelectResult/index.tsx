import Button from "../button";

export default function TableSelectResult() {
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center items-center gap-16 bg-primary1 text-whiteFixed text-4 font-bold py-8">
      <p>Nome: Tabela Padrão</p>
      <p>Parcelas: 2</p>
      <p>Valor da Parcela: R$1.115,00</p>

      <Button text="Avançar" theme="orange" />
    </div>
  );
}
