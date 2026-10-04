import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden rounded-2xl min-h-[280px] sm:min-h-[340px] flex items-end shadow-sm">
      {/* 1. 富士山のパノラマ背景画像 */}
      <Image
        src="/images/HeroBack_MtFuji.jpg"
        alt="Mount Fuji Background"
        fill
        className="object-cover object-[75%_center] sm:object-[70%_center] transition-transform duration-700 hover:scale-[1.02]"
        priority
      />

      {/* 2. 暗めのグラデーションで背景とテキストのコントラストを最適化 */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent sm:bg-gradient-to-r sm:from-slate-950/90 sm:via-slate-950/50 sm:to-transparent" />

      {/* 3. 左側のテキストコンテンツ */}
      <div className="relative z-10 w-full p-5 sm:p-8 space-y-2.5 max-w-xl">
        {/* ステータスタグ */}
        <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md px-3 py-0.5 text-[11px] font-medium text-white border border-white/20 shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Cloud Engineer & Active Life
        </div>

        {/* メインキャッチコピー (2行目も白寄りの色に変更) */}
        <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold tracking-tight text-white leading-snug drop-shadow">
          自律的に学び、泥臭く動き抜く。<br />
          <span className="text-slate-100 font-medium">技術と体躯のポートフォリオ。</span>
        </h1>

        {/* 補足テキスト (文字色を明るくしてドロップシャドウを追加) */}
        <p className="text-[11px] sm:text-xs text-slate-100 font-normal leading-relaxed max-w-lg drop-shadow">
          IT未経験からスタートし、クラウドアーキテクチャの探求とハードなアクティビティを両立。圧倒的な行動量で未知の課題に挑みます。
        </p>

        {/* クイックバッジ (背景の可読性維持のため bg-black/50 に微調整) */}
        <div className="flex flex-wrap gap-1.5 pt-1 text-[11px] font-medium text-white">
          <span className="rounded-md bg-black/50 backdrop-blur-md px-2.5 py-1 border border-white/15">
            ⚡ Cloud Certs: <strong className="text-white">13 Titles</strong>
          </span>
          <span className="rounded-md bg-black/50 backdrop-blur-md px-2.5 py-1 border border-white/15">
            ⏱ Study: <strong className="text-white">~40h / mo</strong>
          </span>
          <span className="rounded-md bg-black/50 backdrop-blur-md px-2.5 py-1 border border-white/15">
            🎾 Sports: <strong className="text-white">Tennis / Cycle / Sauna</strong>
          </span>
        </div>
      </div>
    </section>
  );
}