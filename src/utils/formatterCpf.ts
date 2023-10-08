export default function formatterCpf(cpf: string | undefined) {
  if (cpf) {
    return cpf.toString().replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }
}
