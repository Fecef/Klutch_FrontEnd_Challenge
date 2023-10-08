export default function convertCurrencyToNumber(currencyValue: string) {
  const numericValue = currencyValue.replace(/[^\d,]/g, "").replace(",", ".");
  return parseFloat(numericValue);
}
