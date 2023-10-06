interface Props {
  highlightedTable: boolean
}

export default function TableSelectBtn({ highlightedTable }: Props) {

  return (
    <div className="flex flex-col justify-center border border-[#e5e5e5] px-10">
      <div className="flex justify-center items-center border border-[#b5b5b5] rounded-full  w-20 h-20">
        <div className={`${highlightedTable ? "bg-[#b5b5b5]" : ""} border border-[#b5b5b5] rounded-full  w-12 h-12`}></div>
      </div>
    </div>
  );
}
