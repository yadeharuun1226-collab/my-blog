"use client";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(false); // メニューを閉じる

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

        {/* Menu ボタン */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 active:scale-95 cursor-pointer"
          aria-label="Toggle Menu"
        >
          {/* 外部ライブラリ不要のインラインSVGアイコン */}
          {isOpen ? (
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
          <span>Menu</span>
        </button>
      </div>

      {/* 開閉するドロップダウンメニュー */}
      {isOpen && (
        <div className="border-t border-slate-100 bg-white/95 backdrop-blur-md shadow-lg">
          <nav className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-end gap-2 sm:gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-xs font-medium text-slate-600 hover:text-slate-900 py-2 sm:py-1 px-2 rounded-md hover:bg-slate-100/60 sm:hover:bg-transparent transition"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}