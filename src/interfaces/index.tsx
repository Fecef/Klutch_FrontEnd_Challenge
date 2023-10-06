interface IProviderProps {
  children: React.ReactNode;
}

interface ILoanSimulationProvider {
  handleDesiredValue: (data: number) => void;
  buildTablesList: () => void;
  changeTableDefault: (tableName: string) => void;
  desiredValue: number;
  hiddenTables: boolean;
  tablesList: ITablesList[];
  tableDefault: ITablesList[];
}

interface ILoanApplicationProvider {
  getClient: (cpf: string) => void;
  saveCardData: (data: ICreditCard) => void;
  saveLoanData: (data: ILoan) => void;
  stepFoward: () => void;
  clientData: IClient | undefined;
  cardData: ICreditCard | undefined;
  loanData: ILoan | undefined;
  step: number;
}

interface IClient {
  id: string;
  name: string;
  phone: string;
  cpf: string;
  bank: IBank;
}

interface ISearchCpf {
  cpf: string;
}

interface ICreditCard {
  owner: string;
  number: string;
  validity: string;
  cvc: string;
}

interface ILoan {
  tableName: string;
  tableRate: number;
  installments: number;
  installmentTotalValue: number;
  loanValue: number;
  loanTotalValue: number;
  stream: string;
}

interface IBank {
  id: string;
  name: string;
  type: string;
  agency: string;
  number: string;
}

interface ITableRate {
  id: string;
  name: string;
  fee_rate: number;
  partner_comission: number;
}

interface ITablesList {
  id: string;
  tableName: string;
  tableRate: number;
  installments: IInstallments[];
}

interface ITable {
  tablesList: ITablesList[];
  alwaysShow?: boolean;
  hasButton?: boolean;
  hasFooter?: boolean;
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