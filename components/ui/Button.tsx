type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        rounded-xl
        border
        border-gray-300
        bg-white
        px-4
        py-2
        text-sm
        font-light
        text-black
        transition-all
        hover:border-[#1F4D3B]
        hover:bg-[#F8FAF9]
      "
    >
      {children}
    </button>
  );
}