export default function normalizeCpf(cpf: string) {
    return cpf.replace(/[.-]/g, '');
}