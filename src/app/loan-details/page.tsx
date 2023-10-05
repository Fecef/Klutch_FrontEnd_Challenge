import Link from "next/link";

import Header from "@/components/header";
import IconCard from "@/components/icons/iconCard";
import IconCircleCheck from "@/components/icons/iconCircleCheck";
import IconDocument from "@/components/icons/iconDocument";
import PageTitle from "@/components/pageTitle";

export default function LoandDetails() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-20">
        <PageTitle text="Detalhe de Solicitação" />

        <section className="flex justify-center gap-24 pb-20">
          <div className="w-[58rem] flex flex-col gap-8 font-medium">
            <div className="p-6 bg-backGround rounded-lg">
              <p className="text-3 text-font">
                Solicitação gerada por{" "}
                <span className="text-2 text-primary1 font-bold">
                  Sistema CredFica
                </span>
              </p>
            </div>

            <div className="flex justify-between">
              <div className="w-[27rem] h-[28rem] flex flex-col gap-12 items-center p-6 bg-backGround rounded-lg">
                <p className="text-3 text-font">Valor Total</p>
                <p className="text-[3.6rem] text-[#31ac2b] font-bold">
                  R$ 6.000,00
                </p>
              </div>

              <div className="w-[27rem] h-[28rem] flex flex-col gap-12 items-center p-6 bg-backGround rounded-lg">
                <p className="text-3 text-font">Valor a Depositar</p>
                <p className="text-[3.6rem] text-[#31ac2b] font-bold">
                  R$ 6.000,00
                </p>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="w-[27rem] h-[28rem] flex flex-col gap-12 items-center p-6 bg-backGround rounded-lg">
                <p className="text-2 text-font">Frente do cartão</p>
                <IconDocument fill="#ef9c4b" />
                <Link className="underline text-[#2d98b4]" href="#">
                  Ver Comprovante
                </Link>
              </div>

              <div className="w-[27rem] h-[28rem] flex flex-col gap-12 items-center p-6 bg-backGround rounded-lg">
                <p className="text-2 text-font">Verso do cartão</p>
                <IconDocument fill="#ef9c4b" />
                <Link className="underline text-[#2d98b4]" href="#">
                  Ver Comprovante
                </Link>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="w-[27rem] h-[28rem] flex flex-col gap-12 items-center p-6 bg-backGround rounded-lg">
                <p className="text-2 text-font">Selfie com cartão</p>
                <IconDocument fill="#ef9c4b" />
                <Link className="underline text-[#2d98b4]" href="#">
                  Ver Comprovante
                </Link>
              </div>
            </div>
          </div>

          <div className="w-[58rem] flex flex-col gap-8 font-medium">
            <div className="p-6 bg-backGround rounded-lg">
              <p className="text-3 text-font">
                Fluxo da Solicitação:{" "}
                <span className="text-2 text-primary1 font-bold">Manual</span>
              </p>
            </div>

            <div className="w-full h-[35rem] flex flex-col gap-8 items-center p-8 bg-backGround rounded-lg text-font text-1 font-bold italic">
              <p className="text-[2rem] self-start not-italic font-normal">
                Modalidade
              </p>

              <div className="flex items-center gap-8">
                <p>Cartão de Crédito</p>
                <IconCard fill="#ef9c4b" />
              </div>

              <p>Número do cartão: 5252 0565 6526 6552</p>

              <div className="flex gap-20">
                <p>Validade: 03/27</p>
                <p>CVC: 254</p>
              </div>

              <p>
                1 parcelas de:{" "}
                <span className="text-[#31ac2b]">R$ 2.000,00</span>
              </p>

              <p>Tabela: Tabela padrão</p>
            </div>

            <div className="w-full h-[33rem] flex flex-col gap-4 p-8 bg-backGround rounded-lg text-font text-1 font-bold italic">
              <p className="text-[2rem] not-italic font-normal">
                Informações do Cliente
              </p>
              <p>Nome: Lara B Esquível</p>
              <p>CPF: 866.666.965-87</p>
              <p>Agência: 1235</p>
              <p>Banco: 029 - Banco Itaú Consignado S.A.</p>
              <p>Tipo de Conta: Popança</p>
              <p>Número da conta: 222245</p>
            </div>

            <div className="w-full h-[27rem] flex flex-col items-center gap-8 p-8 bg-[#e8f3f4] border border-dashed border-[#187680] rounded-lg text-font text-1 font-bold italic">
              <p className="text-[2rem] self-start not-italic font-normal">
                Informações Gerais:
              </p>

              <p className="text-[2rem]">Data: 09/03/2020</p>

              <div className="status-tag status-waiting">
                <IconCircleCheck fill="#fff" />
                <p>Aguardando</p>
              </div>

              <div className="flex gap-12">
                <div className="status-tag status-success w-[20rem]">
                  <IconCircleCheck fill="#fff" />
                  <p>Pré Aprovar</p>
                </div>

                <div className="status-tag status-warning w-[20rem]">
                  <IconCircleCheck fill="#fff" />
                  <p>Reprovar</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
