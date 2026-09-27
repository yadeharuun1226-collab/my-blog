import Image from "next/image";
import Card from "@/components/ui/Card";

export default function ProfileCard() {
  const profiles = [
    {
      title: "職種",
      value: "システム運用",
    },
    {
      title: "目標",
      value: "AWS Solutions Architect",
    },
    {
      title: "最近の熱中",
      value: "テニス",
    },
    {
      title: "趣味",
      value: "とにかく体を動かすこと",
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
            className="flex items-center justify-between rounded-xl border border-slate-100 p-3"
          >
            <span className="text-xs text-slate-400">{item.title}</span>
            <span className="text-sm font-medium text-slate-700">{item.value}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}