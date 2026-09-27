import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LatestBlogCard from "@/components/LatestBlogCard";
import ProfileCard from "@/components/ProfileCard";
import DevelopCard from "@/components/DevelopCard";
import SkillsCard from "@/components/SkillsCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50/60 text-slate-700 antialiased">
      {/* ページ最上部のヘッダー */}
      <Header />

      {/* メインコンテンツエリア */}
      <main>
        <Hero />

        {/* カード一覧エリア（スマホ: 1列 / タブレット: 2列 / PC: 4列） */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <LatestBlogCard />
            <ProfileCard />
            <DevelopCard />
            <SkillsCard />
          </div>
        </section>
      </main>
    </div>
  );
}