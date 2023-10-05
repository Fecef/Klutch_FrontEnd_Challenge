interface IProviderProps {
  children: React.ReactNode;
}

interface ILoanSimulationProvider {
  handleDesiredValue: (data: number) => void;
  desiredValue: number;
  hiddenTables: boolean;
  tablesList: ITablesList[];
}

interface ITableRate {
  id: string;
  name: string;
  fee_rate: number;
  partner_comission: number;
}

interface ITablesList {
  tableName: string;
  installments: IInstallments[];
}

interface IInstallments {
  installment: number;
  installmentFee: number;
  installmentTotalValue: number;
  loanTotalValue: number;
  comissionPartner: number;
}

interface IHighlitedField {
  tableName: string;
  installment: number;
  installmentTotalValue: string;
}

interface IFeeCalc {
  value: string;
}