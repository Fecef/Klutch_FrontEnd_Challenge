import { api } from "@/services/api";
import convertCurrencyToNumber from "@/utils/convertCurrencyToNumber";
import normalizeCpf from "@/utils/normalizeCpf";
import { createContext, useEffect, useState } from "react";

export const LoanApplicationContext = createContext<ILoanApplicationProvider>({} as ILoanApplicationProvider);

export function LoanApplicationProvider({ children }: { children: React.ReactNode }) {
    const [clientData, setClientData] = useState<IClient>()
    const [clientNotFound, setClientNotFound] = useState(true)
    const [cardData, setCardData] = useState<ICreditCard>()
    const [loanData, setLoanData] = useState<ILoan>()
    const [requestSolicitation, setRequestSolicitation] = useState(false)
    const [step, setStep] = useState(1)
    const stepFoward = () => { setStep(step + 1) }

    const saveCardData = (data: ICreditCard) => setCardData(data)
    const saveLoanData = (data: ILoan) => {
        setLoanData(data)
        setRequestSolicitation(!requestSolicitation)
    }

    const getClient = async (cpf: string) => {
        const normalizedCpf = normalizeCpf(cpf)
        const res = await api.get(`/client?cpf=${normalizedCpf}`)

        if (res.data.length) {
            setClientNotFound(true)
            return setClientData(res.data[0])
        }
        return setClientNotFound(false)
    }

    useEffect(() => {
        const createSolicitation = async () => {
            if (!loanData) return

            const data = {
                installments: loanData.installments,
                installment_value: convertCurrencyToNumber(loanData.installmentTotalValue),
                loan_to_get: convertCurrencyToNumber(loanData.loanValue),
                loan_to_pay: convertCurrencyToNumber(loanData.loanTotalValue),
                stream: loanData.stream,
                modality: cardData?.modality,
                client: clientData?.id,
                rate_table: loanData.tableRateId,
            }

            try {
                await api.post("/solicitation/", data)
                stepFoward()
            } catch (error) {
                console.log("Solicitation with this client already exists.");
            }
        }

        createSolicitation()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [requestSolicitation])


    return (
        <LoanApplicationContext.Provider
            value={{
                getClient,
                saveCardData,
                saveLoanData,
                stepFoward,
                clientData,
                clientNotFound,
                cardData,
                loanData,
                step,
            }}
        >
            {children}
        </LoanApplicationContext.Provider>
    );
}