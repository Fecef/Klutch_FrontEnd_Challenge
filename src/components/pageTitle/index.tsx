import IconFilesFolder from "../icons/iconFilesFolder";
import IconCirclePlus from "../icons/iconCirclePlus";

export default function PageTitle(props: IPageTitle) {
  return (
    <div className="flex items-center gap-8 my-24">
      {props.hasIcon && <IconCirclePlus />}

      <IconFilesFolder />

      <h1 className="text-primary1 font-bold text-7 w-[30rem] leading-[6rem]">
        {props.text}
      </h1>
    </div>
  );
}
