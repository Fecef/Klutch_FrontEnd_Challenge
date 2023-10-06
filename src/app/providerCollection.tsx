"use client";

import { LoanApplicationProvider } from "@/contexts/loanApplication.contex";
import { LoanSimulationProvider } from "@/contexts/loanSimulation.context";

export default function ProviderCollection({ children }: IProviderProps) {
    return (
        <LoanSimulationProvider>
            <LoanApplicationProvider>
                {children}
            </LoanApplicationProvider>
        </LoanSimulationProvider>
    )
}