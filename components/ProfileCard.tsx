import Image from "next/image";
import Card from "@/components/ui/Card";

export default function ProfileCard() {
  const profiles = [
    {
      title: "職種",
      value: "システム開発・オンプレ運用保守 (Java / Asteria)",
    },
    {
      title: "目標",
      value: "AWS Solutions Architect / クラウドエンジニア",
    },
    {
      title: "保有資格",
      value: "AWS SAP/DOP/SCS, ACE, AZ-900 他13種",
    },
    {
      title: "注力技術",
      value: "Next.js / TypeScript / マルチクラウド構想",
    },
    {
      title: "最近の熱中",
      value: "テニス（実業団・大会出場）/ 卓球 / 筋トレ",
    },
    {
      title: "趣味",
      value: "大阪城ナイトロードバイク / 延羽の湯（サウナ）",
    },
    {
      title: "モットー",
      value: "とにかく体を動かす＆自律的に学び続ける",
    },
  ];

  return (
    <Card title="Profile" href="/profile">
      {/* 上部に大きめのアバター画像を配置してアイキャッチにする */}
      <div className="mb-6 flex flex-col items-center justify-center rounded-xl bg-slate-50 p-4">
        <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-white shadow-sm">
          {/* 画像を用意するまでのダミー画像（Unsplash等） */}
          <Image
            src="/images/profile_yadeharu.jpg"
            alt="yadeharu Profile"
            fill
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-xs font-medium text-slate-500">yadeharu</p>
      </div>

      <div className="space-y-3">
        {profiles.map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-between gap-4 rounded-xl border border-slate-100 p-3"
          >
            <span className="text-xs shrink-0 text-slate-400">{item.title}</span>
            <span className="text-sm font-medium text-slate-700 text-right">{item.value}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}