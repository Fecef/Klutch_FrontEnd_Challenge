import { api } from "@/services/api";
import { createContext, useEffect, useState } from "react";

export const LoanSimulationContext = createContext<ILoanSimulationProvider>(
  {} as ILoanSimulationProvider
);

export function LoanSimulationProvider({ children }: IProviderProps) {
  const [hiddenTables, setHiddenTables] = useState(true);
  const [desiredValue, setDesiredValue] = useState(0);
  const [tablesList, setTablesList] = useState<ITablesList[]>([]);

  const handleDesiredValue = (value: number) => {
    if (value < 300 || value > 10000) {
      return setHiddenTables(true);
    }
    setDesiredValue(value);
    setHiddenTables(false);
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

  useEffect(() => {
    async function getTables() {
      const res = await api.get("/rate_table/");
      const installments = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const tableRateList: ITableRate[] = res.data;

      const data = tableRateList.map((table) => {
        const { fee_rate, name, partner_comission } = table;
        return {
          tableName: name,
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
      });
      setTablesList(data)
    }
    getTables();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [desiredValue]);

  return (
    <LoanSimulationContext.Provider
      value={{
        handleDesiredValue,
        tablesList,
        desiredValue,
        hiddenTables,
      }}
    >
      {children}
    </LoanSimulationContext.Provider>
  );
}
