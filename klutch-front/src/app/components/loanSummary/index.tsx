import IconCard from "../icons/iconCard";
import SummaryField from "../summaryField";

export default function LoanSummary() {
  return (
    <div className="flex flex-col items-center gap-12">
      <h2 className="text-primary1 text-6 font-bold">
        Solicitação Realizada com Sucesso!
      </h2>
      <h3 className="text-primary1 text-3 self-start">Resumo da Solicitação</h3>

      <div className="flex gap-8">
        <SummaryField>
          <p>João Paulo Guedes</p>
          <p>71 9988-7766</p>
        </SummaryField>

        <SummaryField>
          <p className="text-primary1">Taxa de Juros</p>
          <p className="text-secondary1 text-4 not-italic">12%</p>
        </SummaryField>
      </div>

      <div className="flex gap-8">
        <SummaryField>
          <IconCard fill="#ef9c4b" />
          <p>4327</p>
          <p className="text-black font-bold not-italic">VISA</p>
          <p>02/24</p>
          <div className="w-[20%]"></div>
        </SummaryField>

        <SummaryField>
          <p className="text-primary1">Parcelas:</p>
          <p className="text-secondary1 text-4 not-italic">12</p>
        </SummaryField>
      </div>

      <div className="flex gap-8">
        <SummaryField>
          <p className="text-primary1">Valor desejado:</p>
          <p className="text-[#31ac2b] text-4 not-italic">R$ 7.200,00</p>
        </SummaryField>

        <SummaryField>
          <p className="text-primary1">Valor da Parcela:</p>
          <p className="text-[#31ac2b] text-4 not-italic">R$ 433,33</p>
        </SummaryField>
      </div>

      <SummaryField>
        <p className="text-primary1">Valor Total do Empréstimo:</p>
        <p className="text-[#31ac2b] text-4 not-italic">R$ 7.200,00</p>
      </SummaryField>

      <button className="btn btn-primary btn-lg" type="submit">
        Detalhe da Solicitação
      </button>

      <small className="text-primary1">
        O CredtFica avaliará a solicitação.
      </small>
    </div>
  );
}
