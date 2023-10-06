import { createContext, useEffect, useState } from "react";

import { api } from "@/services/api";

export const LoanSimulationContext = createContext<ILoanSimulationProvider>(
  {} as ILoanSimulationProvider
);

export function LoanSimulationProvider({ children }: IProviderProps) {
  const [hiddenTables, setHiddenTables] = useState(true);
  const [desiredValue, setDesiredValue] = useState(0);
  const [tablesList, setTablesList] = useState<ITablesList[]>([]);
  const [tableDefault, setTableDefault] = useState<ITablesList[]>([]);
  const installments = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleDesiredValue = (value: number) => {
    if (value < 300 || value > 10000) {
      setDesiredValue(0)
      setHiddenTables(true);
    } else {
      setDesiredValue(value);
      setHiddenTables(false);
    }
  };

  const changeTableDefault = (tableName: string) => {
    const table = tablesList.filter(table => table.tableName === tableName)
    setTableDefault(table)
  }

  const getRateTableList = async () => {
    const res = await api.get("/rate_table/");
    return res.data;
  };

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
    const tableRateList: ITableRate[] = await getRateTableList();
    const data = tableRateList.map((table) => {
      const { fee_rate, name, partner_comission, id } = table;
      return {
        id: id,
        tableName: name,
        tableRate: fee_rate,
        installments: installments.map((_, i) => {
          const _installment = i + 1;
          const _installmentFee = getTotalFee(fee_rate, _installment);
          const _installmentTotalValue = getInstallmentTotalValue(_installmentFee, _installment);
          const _loanTotalValue = getLoanTotalValue(_installmentTotalValue, _installment);
          const _comissionPartner = getComissionPartner(_loanTotalValue, partner_comission)
          return {
            installment: _installment,
            installmentFee: _installmentFee,
            installmentTotalValue: _installmentTotalValue,
            loanTotalValue: _loanTotalValue,
            comissionPartner: _comissionPartner,
          };
        }),
      };
    })
    setTablesList(data)
    setTableDefault([data[0]])
  }

  useEffect(() => {
    buildTablesList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [desiredValue]);

  return (
    <LoanSimulationContext.Provider
      value={{
        handleDesiredValue,
        buildTablesList,
        changeTableDefault,
        tablesList,
        tableDefault,
        desiredValue,
        hiddenTables,
      }}
    >
      {children}
    </LoanSimulationContext.Provider>
  );
}