import { useContext } from "react";

import { LoanSimulationContext } from "@/contexts/loanSimulate.context";

export default function Table() {
  const { table } = useContext(LoanSimulationContext);

  if (!table) return

  return (
    <section className="pb-56 w-[120rem] mx-auto">
      <div className="flex">
        <table className="border border-t-0 border-[#e5e5e5] w-full">
          <caption className="py-8 bg-[#f8f8f8] border border-b-0 border-[#e5e5e5] text-primary1 text-3 font-bold">
            {table.tableName}
          </caption>

          <thead className="bg-[#f8f8f8] text-font text-2">
            <tr>
              <th className="py-8">Parcela</th>
              <th className="py-8">Juros da Parcela</th>
              <th className="py-8">Valor da Parcela</th>
              <th className="py-8">Valor Total</th>
              <th className="py-8">Comissão Parceiro</th>
            </tr>
          </thead>

          <tbody className="text-center text-font text-1 cursor-pointer">
            {table.installments.map((row, i) => (
              <tr key={i}>
                <td className="py-8 border border-[#e5e5e5]">{row.installment}</td>
                <td className="py-8 border border-[#e5e5e5]">{row.installmentFee}</td>
                <td className="py-8 border border-[#e5e5e5]">{row.installmentTotalValue}</td>
                <td className="py-8 border border-[#e5e5e5]">{row.loanTotalValue}</td>
                <td className="py-8 border border-[#e5e5e5]">{row.comissionPartner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
