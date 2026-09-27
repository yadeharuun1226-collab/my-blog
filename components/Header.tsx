import Button from "./ui/Button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8">
        {/* ロゴ: 太さを semibold に落とし、濃いグレー（slate-800）にして柔らかな印象へ */}
        <h1 className="text-xl font-semibold tracking-tight text-slate-800">
          yadeharu
        </h1>

        <Button>
          Menu
        </Button>
      </div>
    </header>
  );
}