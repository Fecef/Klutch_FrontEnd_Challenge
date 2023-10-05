export default function TableSelectResult({ field }: { field: IHighlitedField }) {
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center items-center gap-16 bg-primary1 text-whiteFixed text-4 font-bold py-8">
      <p>Nome: {field.tableName}</p>
      <p>Parcelas: {field.installment}</p>
      <p>Valor da Parcela: {field.installmentTotalValue}</p>

      <button className="btn btn-md btn-secondary" type="button">
        Avançar
      </button>
    </div>
  );
}
