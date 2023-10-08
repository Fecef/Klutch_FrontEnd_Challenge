export default function formatterPhone(phone: string | undefined) {
    if (phone) {
        return phone.toString().replace(/(\d{2})(\d)(\d{4})(\d{4})/, '($1) $2-$3-$4');
    }
}