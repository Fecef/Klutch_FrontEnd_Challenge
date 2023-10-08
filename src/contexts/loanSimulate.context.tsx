import { createContext, useEffect, useState } from "react";

import { api } from "@/services/api";
import convertCurrencyToNumber from "@/utils/convertCurrencyToNumber";
import convertNumberToCurrency from "@/utils/convertNumberToCurrency";

export const LoanSimulationContext = createContext<ILoanSimulationProvider>({} as ILoanSimulationProvider);

export function LoanSimulationProvider({ children }: { children: React.ReactNode }) {
  const [desiredValue, setDesiredValue] = useState(0);
  const [tableRateList, setTableRateList] = useState<ITableRate[]>([])
  const [tableList, setTableList] = useState<ITable[]>([]);
  const [tableName, setTableName] = useState("")
  const [table, setTable] = useState<ITable>();
  const [loanInstallments, setLoanInstallments] = useState(0)

  const installments = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleDesiredValue = (desiredValue: string) => {
    const convertedValue = convertCurrencyToNumber(desiredValue);
    const isValid = loanValidation(convertedValue);
    setDesiredValue(!isValid ? convertedValue : 0)
  };

  const handleTableSelect = (tableName: string) => setTableName(tableName)
  const handleLoanInstallments = (loanInstallments: number) => setLoanInstallments(loanInstallments)
  const loanValidation = (value: number) => (value <= 300 || value >= 10000)

  useEffect(() => {
    const getRateTableList = async () => {
      const res = await api.get("/rate_table/");
      setTableRateList(res.data)
    };

    getRateTableList()
  }, []);

  useEffect(() => {
    const getTotalFee = (feeRate: number, installment: number) => {
      const totalFee = +(feeRate * installment).toFixed(2);
      return totalFee;
    };

    const getInstallmentTotalValue = (installmentFee: number, installment: number) => {
      const installmentValue = +(desiredValue / installment).toFixed(2);
      const installmentTotalValue = installmentFee * installmentValue + installmentValue;
      return installmentTotalValue;
    };

    const getLoanTotalValue = (installmentTotalValue: number, installment: number) => {
      const loanTotalValue = installmentTotalValue * installment
      return loanTotalValue;
    };

    const getComissionPartner = (loanTotalValue: number, partner_commission: number) => {
      const totalPartnerCommission = loanTotalValue * partner_commission;
      return totalPartnerCommission
    }

    const buildTablesList = async () => {
      const tableList = tableRateList.map((table: ITableRate) => {
        return {
          id: table.id,
          tableName: table.name,
          tableRate: table.fee_rate,

          installments: installments.map((_, i) => {
            const installment = i + 1;
            const installmentFee = getTotalFee(table.fee_rate, installment);
            const installmentTotalValue = getInstallmentTotalValue(installmentFee, installment);
            const loanTotalValue = getLoanTotalValue(installmentTotalValue, installment);
            const comissionPartner = getComissionPartner(loanTotalValue, table.partner_comission)

            return {
              installment: installment,
              installmentFee: installmentFee + "%",
              installmentTotalValue: convertNumberToCurrency(installmentTotalValue),
              loanTotalValue: convertNumberToCurrency(loanTotalValue),
              comissionPartner: convertNumberToCurrency(comissionPartner)
            };
          }),
        }
      })
      setTableList(tableList)
    }

    buildTablesList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [desiredValue])


  useEffect(() => {
    const getTable = () => {
      const filteredTable = tableList.filter((table) => table.tableName === tableName);
      setTable(filteredTable[0]);
    };

    getTable();
  }, [tableList, tableName, loanInstallments]);

  return (
    <LoanSimulationContext.Provider
      value={{
        handleDesiredValue,
        handleTableSelect,
        handleLoanInstallments,
        installments,
        desiredValue,
        tableName,
        tableRateList,
        tableList,
        table
      }}
    >
      {children}
    </LoanSimulationContext.Provider>
  );
}