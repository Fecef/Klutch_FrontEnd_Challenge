import convertCurrencyToNumber from "@/utils/convertCurrencyToNumber";
import * as yup from "yup";

export const schemaSolicitation = yup.object().shape({
  tableName: yup.string().required(),
  installments: yup.number().required(),
  loanValue: yup.string().test(
    (value) => {
      if (value) {
        const numericValue = convertCurrencyToNumber(value);
        return numericValue > 300 && numericValue < 10000;
      }
      return false;
    }
  ).required(),
});
