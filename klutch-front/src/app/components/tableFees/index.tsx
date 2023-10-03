import Button from "../button";
import TableSelectBtn from "../tableSelectBtn";
import TableSelectResult from "../tableSelectResult";

export default function TableFees() {
  const tables = [0, 1];

  const thead = [
    "Parcela",
    "Juros da Parcela",
    "Valor da Parcela",
    "Valor Total",
    "Comissão Parceiro",
  ];

  const tr = [
    "15%",
    "20%",
    "25%",
    "30%",
    "15%",
    "20%",
    "25%",
    "30%",
    "25%",
    "30%",
  ];

  return (
    <section className="pb-56">
      {tables.map((_, i) => (
        <div key={i} className="flex">
          <TableSelectBtn />

          <table className="border border-t-0 border-[#e5e5e5] w-full">
            <caption className="py-8 bg-[#f8f8f8] border border-b-0 border-[#e5e5e5] text-primary1 text-3 font-bold">
              Tabela Padrão
            </caption>

            <thead className="bg-[#f8f8f8] text-font text-2">
              <tr>
                {thead.map((header, i) => (
                  <th key={i} className="py-8">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="text-center text-font text-1">
              {tr.map((row, i) => (
                <tr key={i}>
                  <td className="py-8 border border-[#e5e5e5]">{i + 1}</td>
                  <td className="py-8 border border-[#e5e5e5]">{row}</td>
                  <td className="py-8 border border-[#e5e5e5]">R$ 1.115,00</td>
                  <td className="py-8 border border-[#e5e5e5]">R$ 1.115,00</td>
                  <td className="py-8 border border-[#e5e5e5]">R$ 1.115,00</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      <TableSelectResult />
    </section>
  );
}
