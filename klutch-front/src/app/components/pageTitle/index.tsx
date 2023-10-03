import Image from "next/image";

interface IPageTitle {
  text: string;
  hasIcon?: boolean;
}

export default function PageTitle({ text, hasIcon }: IPageTitle) {
  return (
    <div className="flex gap-8 my-24">
      {hasIcon && (
        <Image src="Grupo 270.svg" alt="Saiba mais" width={60} height={0} />
      )}

      <Image
        src="_ionicons_svg_md-filing-3.svg"
        alt=""
        width={100}
        height={0}
      />

      <h1 className="text-primary1 font-bold text-7 w-[30rem] leading-[6rem]">
        {text}
      </h1>
    </div>
  );
}
