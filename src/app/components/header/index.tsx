import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between bg-primary1 px-4 py-4">
      <div className="cursor-pointer">
        <Image
          src="/icons8-hamburger-menu.svg"
          width={35}
          height={0}
          alt="Menu"
        />
      </div>

      <Image src="/Grupo 290.svg" width={150} height={0} alt="Logo" />
      <div></div>
    </header>
  );
}
