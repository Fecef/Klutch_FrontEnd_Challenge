export function currentDate() {
  const currentDate = new Date().toLocaleDateString("pt-BR");
  return currentDate;
}
