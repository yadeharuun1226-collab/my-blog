import Card from "@/components/ui/Card";

type RoutineStep = {
  time: string;
  label: string;
  description: string;
  tag?: string;
};

export default function WeekdayRoutineCard() {
  const schedule: RoutineStep[] = [
    {
      time: "06:30 - 08:20",
      label: "Morning Routine & 朝活",
      description: "起床・朝食後、技術ニュース（AI Topic等）のチェックや朝のインプット、英語学習など。",
      tag: "Input",
    },
    {
      time: "08:45 - 17:30",
      label: "Core Work（システム開発・運用）",
      description: "パナソニック デジタルにて製品情報システムの開発・オンプレ運用保守・改修業務。",
      tag: "Work",
    },
    {
      time: "17:30 - 19:00",
      label: "Overtime / Skill Up",
      description: "業務残業（月平均約25h）または業務後の技術ドキュメント・整理。",
      tag: "Work / Dev",
    },
    {
      time: "19:00 - 20:00",
      label: "Refresh / Get Energy",
      description: "帰宅・シャワー・晩御飯",
      tag: "Refresh / Rest",
    },

    {
      time: "20:00 - 22:30",
      label: "Study & Output（Studyplus）",
      description: "資格勉強・個人開発・Qiita記事執筆など。月約40時間の学習を継続記録。",
      tag: "Study 40h/m",
    },
    {
      time: "22:30 - 23:00",
      label: "Night Workout / Refresh",
      description: "大阪城ナイトロードバイク or 駅伝に向けたジムラン",
      tag: "Sports / Sauna",
    },
    {
      time: "23:00 - 24:00",
      label: "Relax & Bedtime",
      description: "入浴・読書（小説で右脳回復）をして就寝。",
      tag: "Reset",
    },
  ];

  return (
    <Card title="Weekday Routine">
      <div className="space-y-3">
        <p className="text-[11px] text-slate-500">
          業務・学習・アクティビティを自律的にコントロールする平日のタイムライン
        </p>

        <div className="relative border-l border-slate-200 ml-2.5 space-y-4 py-1">
          {schedule.map((item, idx) => (
            <div key={idx} className="relative pl-5 group">
              {/* タイムラインのポインター */}
              <span className="absolute -left-[4.5px] top-1 h-2 w-2 rounded-full border border-white bg-slate-400 group-hover:bg-slate-800 transition-colors" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5">
                <span className="text-[11px] font-bold text-slate-800">
                  {item.time} — {item.label}
                </span>
                {item.tag && (
                  <span className="self-start sm:self-auto rounded-md bg-slate-100 px-1.5 py-0.5 text-[9px] font-medium text-slate-600">
                    {item.tag}
                  </span>
                )}
              </div>
              <p className="mt-0.5 text-[11px] leading-relaxed text-slate-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}