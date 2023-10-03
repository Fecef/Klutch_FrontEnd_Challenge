import InputCalculateFee from "./components/inputCalculateFee";
import TableFees from "./components/tableFees";
import Header from "./components/header";
import PageTitle from "./components/pageTitle";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-20">
        <PageTitle text="Simulação de Taxas" hasIcon />
        <InputCalculateFee />
        <TableFees />
      </main>
    </>
  );
}
