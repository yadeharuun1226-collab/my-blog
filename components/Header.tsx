"use client";

export default function Header() {
  // メニュー項目定義
  const navItems = [
    { label: "Top / Hero", href: "#hero" },
    { label: "Profile & Activity", href: "#profile" },
    { label: "Skills & Development", href: "#skills" },
    { label: "Blog & Routine", href: "#blog" },
  ];

  // スムーズスクロール処理
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);

    if (elem) {
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 80; // ヘッダーオフセット

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* ロゴ / サイト名 */}
        <span className="text-base font-bold text-slate-800 tracking-tight cursor-pointer">
          yadeharu
        </span>

        {/* 最初から表示されているナビゲーションメニュー */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="text-xs font-medium text-slate-600 hover:text-slate-900 py-1 px-2.5 rounded-md hover:bg-slate-100/80 transition"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}