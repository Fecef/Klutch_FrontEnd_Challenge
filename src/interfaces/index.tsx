interface ILoanSimulationProvider {
  handleDesiredValue: (value: string) => void;
  handleTableSelect: (tableName: string) => void;
  handleLoanInstallments: (loanInstallments: number) => void;
  desiredValue: number;
  tableName: string;
  tableRateList: ITableRate[];
  tableList: ITable[];
  table: ITable | undefined;
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

interface ICreditCard {
  owner: string;
  number: string;
  validity: string;
  cvc: string;
  modality: string;
}

interface ILoan {
  tableRate?: number;
  tableRateId?: string;
  tableName: string;
  installments: number;
  installmentTotalValue?: string;
  loanValue: string;
  loanTotalValue?: string;
  stream?: string;
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

interface ITable {
  id: string;
  tableName: string;
  tableRate: number;
  installments: IInstallments[];
}

interface IInstallments {
  installment: number;
  installmentFee: string;
  installmentTotalValue: string;
  loanTotalValue: string;
  comissionPartner: string;
}

interface ISelectedRow {
  tableName: string;
  installment: number;
  installmentTotalValue: string;
}
interface IPageTitle {
  text: string;
  hasIcon?: boolean;
}