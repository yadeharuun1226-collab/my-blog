import Card from "@/components/ui/Card";

export default function SkillsCard() {
  const skills = [
    { name: "AWS", level: 80, desc: "構築・運用実務" },
    { name: "GCP", level: 60, desc: "Cloud Run / BigQuery" },
    { name: "Azure", level: 45, desc: "AZ-104 学習中" },
    { name: "保守・運用", level: 85, desc: "ネットワーク・サーバ" },
  ];

  return (
    <Card title="Skills" href="/skills">
      <div className="space-y-3.5">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group rounded-xl border border-slate-100 p-3 transition-all duration-200 hover:border-slate-200 hover:bg-slate-50/50 hover:shadow-sm"
          >
            {/* スキル名 & パーセンテージ */}
            <div className="flex items-center justify-between text-xs font-medium">
              <span className="text-slate-700 transition-colors group-hover:text-slate-900">
                {skill.name}
              </span>
              <span className="text-[10px] font-semibold text-slate-400 group-hover:text-slate-600">
                {skill.level}%
              </span>
            </div>

            {/* トーンダウンしたプログレスバー */}
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-slate-500 transition-all duration-300 ease-out group-hover:bg-slate-800"
                style={{ width: `${skill.level}%` }}
              />
            </div>

            {/* 補足説明 */}
            <p className="mt-1.5 text-[10px] text-slate-400">
              {skill.desc}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}