import Link from "next/link";

export default function RowSelect({ selectedRow }: { selectedRow: ISelectedRow }) {
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center items-center gap-16 bg-primary1 text-whiteFixed text-4 font-bold py-8">
      <p>Nome: {selectedRow.tableName}</p>
      <p>Parcelas: {selectedRow.installment}</p>
      <p>Valor da Parcela: {selectedRow.installmentTotalValue}</p>

      <Link href="/apply-for-loan" className="btn btn-md btn-secondary" type="button">
        Avançar
      </Link>
    </div>
  );
}
