import { api } from "@/services/api";
import { createContext, useState } from "react";

export const LoanApplicationContext = createContext<ILoanApplicationProvider>(
    {} as ILoanApplicationProvider
);

export function LoanApplicationProvider({ children }: IProviderProps) {
    const [clientData, setClientData] = useState<IClient>();
    const [cardData, setCardData] = useState<ICreditCard>();
    const [loanData, setLoanData] = useState<ILoan>();
    const [step, setStep] = useState(1);
    const stepFoward = () => setStep(step + 1)
    const saveCardData = (data: ICreditCard) => setCardData(data)
    const saveLoanData = (data: ILoan) => setLoanData(data)

    const getClient = async (cpf: string) => {
        try {
            const res = await api.get(`/client?cpf=${cpf}`)
            setClientData(res.data[0])
        } catch (error) {
            console.log(error)
        }
    }

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