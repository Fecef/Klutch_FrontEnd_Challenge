import * as yup from "yup";

export const schemaSolicitation = yup.object().shape({
  tableName: yup.string().required(),
  installments: yup.number().required(),
  installmentTotalValue: yup.string(),
  loanValue: yup.string().required(),
  loanTotalValue: yup.string(),
});