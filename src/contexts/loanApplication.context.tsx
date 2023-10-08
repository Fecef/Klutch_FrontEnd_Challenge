import { api } from "@/services/api";
import convertCurrencyToNumber from "@/utils/convertCurrencyToNumber";
import normalizeCpf from "@/utils/normalizeCpf";
import { createContext, useEffect, useState } from "react";

export const LoanApplicationContext = createContext<ILoanApplicationProvider>({} as ILoanApplicationProvider);

export function LoanApplicationProvider({ children }: { children: React.ReactNode }) {
    const [clientData, setClientData] = useState<IClient>()
    const [cardData, setCardData] = useState<ICreditCard>()
    const [loanData, setLoanData] = useState<ILoan>()
    const [loanDetail, setLoanDetail] = useState()
    const [requestSolicitation, setRequestSolicitation] = useState(false)
    const [step, setStep] = useState(1)
    const stepFoward = () => setStep(step + 1)

    const saveCardData = (data: ICreditCard) => setCardData(data)
    const saveLoanData = (data: ILoan) => {
        setLoanData(data)
        setRequestSolicitation(!requestSolicitation)
    }

    const getClient = async (cpf: string) => {
        const normalizedCpf = normalizeCpf(cpf)

        try {
            const res = await api.get(`/client?cpf=${normalizedCpf}`)
            setClientData(res.data[0])
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const createSolicitation = async () => {
            if (!loanData) return

            const data = {
                installments: loanData?.installments,
                installment_value: convertCurrencyToNumber(loanData?.installmentTotalValue),
                loan_to_get: convertCurrencyToNumber(loanData?.loanValue),
                loan_to_pay: convertCurrencyToNumber(loanData?.loanTotalValue),
                stream: loanData?.stream,
                modality: cardData?.modality,
                client: clientData?.id,
                rate_table: loanData?.tableRateId,
            }

            try {
                const res = await api.post("/solicitation/", data)
                setLoanDetail(res.data)
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
                cardData,
                loanData,
                step,
            }}
        >
            {children}
        </LoanApplicationContext.Provider>
    );
}