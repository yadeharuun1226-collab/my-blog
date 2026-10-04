import Card from "@/components/ui/Card";

export default function ActivityMetricsCard() {
  const metrics = [
    {
      label: "Study Time (Studyplus)",
      value: "1,450+ hrs",
      detail: "資格・技術学習の積算",
    },
    {
      label: "Git Commits",
      value: "850+ /yr",
      detail: "個人開発 & 実証コード",
    },
    {
      label: "Qiita Articles",
      value: "15+ posts",
      detail: "技術アウトプット",
    },
    {
      label: "Live & Festival",
      value: "15 times/yr",
      detail: "ロックフェス・ライブ参戦",
    },
  ];

  return (
    <Card title="Activity Metrics">
      <div className="grid grid-cols-2 gap-3">
        {metrics.map((item, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-slate-100 bg-slate-50/60 p-3"
          >
            <span className="text-[10px] font-semibold text-slate-400">
              {item.label}
            </span>
            <p className="mt-1 text-base font-bold text-slate-800">
              {item.value}
            </p>
            <p className="mt-0.5 text-[10px] text-slate-500">{item.detail}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}