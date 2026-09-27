export default function Hero() {
  return (
    <section className="border-b border-slate-100 bg-[#F8FAF9]/80 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-8">
        {/* サブタイトル（ラベル）: 文字間隔を保ちつつ主張を少し控えめに */}
        <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#1F4D3B]/80 uppercase">
          YU PORTAL
        </p>

        {/* メインタイトル: 柔らかいダークグレー（slate-800）に変更 */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-800">
          勉強大好き。
        </h2>

        {/* 説明文: サイズを text-2xl から text-base / lg に落とし、行間をゆったり確保 */}
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
          クラウドと開発を楽しむ個人サイト。
          <br className="hidden sm:inline" />
          AWS・Azure・GCPの学習記録や開発ログをまとめています。
        </p>
      </div>
    </section>
  );
}