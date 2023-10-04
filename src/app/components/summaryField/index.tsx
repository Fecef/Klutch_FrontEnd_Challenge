import IconCheck from "../icons/iconCheck";

interface ISummaryField {
  children: React.ReactNode;
}

export default function SummaryField({ children }: ISummaryField) {
  return (
    <div className="relative w-[61rem] p-8 pr-28 flex items-center justify-between text-1 text-font font-bold italic rounded-lg bg-[#e8ffe4]">
      {children}

      <div className="absolute right-8">
        <IconCheck fill="#228a95" />
      </div>
    </div>
  );
}
