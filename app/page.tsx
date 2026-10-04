import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LatestBlogCard from "@/components/LatestBlogCard";
import ProfileCard from "@/components/ProfileCard";
import DevelopCard from "@/components/DevelopCard";
import SkillsCard from "@/components/SkillsCard";

// 追加した3つのコンポーネント
import ActivityMetricsCard from "@/components/ActivityMetricsCard";
import AITopicsCard from "@/components/AITopicsCard";
import WeekdayRoutineCard from "@/components/WeekdayRoutineCard";

export default function Home() {
  return (
    /* 元の画像にあった明るく清潔感のある背景 (bg-slate-50 / text-slate-800) */
    <main className="relative min-h-screen bg-slate-50 pb-16 text-slate-800">

      {/* 1. 最上部にHeaderを配置 (Sticky表示) */}
      <Header />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6 space-y-6">
        
        {/* ＝★ 2. Heroセクション ★＝ */}
        <section id="hero" className="scroll-mt-20">
          <Hero />
        </section>

        {/* ＝★ 3. プロフィール & 活動メトリクス & 今日のAIトピック ★＝ */}
        <div id="profile" className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3 scroll-mt-20">
          <div className="lg:col-span-2 flex flex-col justify-between">
            <ProfileCard />
          </div>
          <div className="flex flex-col gap-6">
            <ActivityMetricsCard />
            <AITopicsCard />
          </div>
        </div>

        {/* ＝★ 4. スキル & 開発実績 ★＝ */}
        <div id="skills" className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 scroll-mt-20">
          <SkillsCard />
          <DevelopCard />
        </div>

        {/* ＝★ 5. 最新ブログ & 平日ルーティン ★＝ */}
        <div id="blog" className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3 scroll-mt-20">
          <div className="lg:col-span-1">
            <LatestBlogCard />
          </div>
          <div className="lg:col-span-2">
            <WeekdayRoutineCard />
          </div>
        </div>

      </div>
    </main>
  );
}