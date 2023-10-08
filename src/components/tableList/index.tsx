import { useContext, useState } from "react";

import { LoanSimulationContext } from "@/contexts/loanSimulate.context";
import TableSelectBtn from "../tableSelectBtn";
import RowSelect from "../rowSelect";

export default function TableList() {
  const { desiredValue, tableList } = useContext(LoanSimulationContext);
  const [highlightedRow, setHighlightedRow] = useState(-1);
  const [highlightedTable, setHighlightedTable] = useState("")
  const [selectedRow, setSelectedRow] = useState<ISelectedRow>({} as ISelectedRow)

  const handleClick = (tableName: string, row: IInstallments) => {
    setSelectedRow({
      tableName: tableName,
      installment: row.installment,
      installmentTotalValue: row.installmentTotalValue
    })
  }

  return (
    <section className="pb-56 w-[120rem] mx-auto" hidden={!desiredValue}>
      {tableList.map((table) => (
        <div key={table.id} className="flex">
          <TableSelectBtn highlightedTable={highlightedTable === table.tableName} />

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
              {table.installments.map((row, j) => (
                <tr
                  key={j}
                  className={highlightedRow === j && highlightedTable === table.tableName ? "bg-[#efdf484d]" : ""}
                  onMouseDown={() => {
                    setHighlightedTable(table.tableName)
                    setHighlightedRow(j)
                    handleClick(table.tableName, row)
                  }}
                >
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
      ))}

      <RowSelect selectedRow={selectedRow} />
    </section>
  );
}
