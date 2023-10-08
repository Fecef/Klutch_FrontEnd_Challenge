import IconHambMenu from "../icons/iconHambMenu/indes";
import IconKlutchLogo from "../icons/iconKlutchLogo";

export default function Header() {
  return (
    <header className="flex justify-between bg-primary1 px-4 py-4">
      <div className="cursor-pointer">
        <IconHambMenu />
      </div>

      <IconKlutchLogo />
      <div></div>
    </header>
  );
}
