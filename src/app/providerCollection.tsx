"use client";

import { LoanApplicationProvider } from "@/contexts/loanApplication.context";
import { LoanSimulationProvider } from "@/contexts/loanSimulate.context";

export default function ProviderCollection({ children }: IProviderProps) {
    return (
        <LoanSimulationProvider>
            <LoanApplicationProvider>
                {children}
            </LoanApplicationProvider>
        </LoanSimulationProvider>
    )
}