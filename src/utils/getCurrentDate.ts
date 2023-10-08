export default function getCurrentDate() {
  const currentDate = new Date().toLocaleDateString("pt-BR");
  return currentDate;
}
