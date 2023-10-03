interface IButton {
  text: string;
  theme: "green" | "orange";
  isSubmit?: boolean;
}

export default function Button({ text, theme, isSubmit }: IButton) {
  let color = "";

  if (theme === "orange") color = "bg-secondary1 hover:bg-secondary2";
  if (theme === "green") color = "bg-primary1 hover:bg-primary2";

  return (
    <button
      className={`${color} duration-200 text-whiteFixed font-bold text-1 py-2 px-12 rounded-lg`}
      type={isSubmit ? "submit" : "button"}
    >
      {text}
    </button>
  );
}
