export default function convertCurrencyToNumber(currencyValue: string | undefined) {
  if (currencyValue) {
    const numericValue = currencyValue.replace(/[^\d,]/g, "").replace(",", ".");
    return parseFloat(numericValue);
  }
}
