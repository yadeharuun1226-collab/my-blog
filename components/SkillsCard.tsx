import Link from "next/link";

type SkillCategorySummary = {
  category: string;
  skills: string[];
};

export default function SkillsCard() {
  // 詳細ページ (/skills) と同じ4カテゴリ構造に統一
  const skillSummaries: SkillCategorySummary[] = [
    {
      category: "Cloud & Infrastructure",
      skills: ["AWS", "GCP", "Terraform", "Docker"],
    },
    {
      category: "Backend & Data",
      skills: ["Python", "Node.js", "PostgreSQL", "FastAPI"],
    },
    {
      category: "Frontend",
      skills: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "DevOps & Tools",
      skills: ["Git", "GitHub Actions", "Linux", "Bash"],
    },
  ];

  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <div>
        {/* ヘッダー領域 */}
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-800">Skills</h2>
          <span className="text-[10px] font-medium text-slate-400">
            Tech Stack
          </span>
        </div>
        <p className="mt-1 text-xs text-slate-500">
          実務・検証プロジェクトで扱っている主要技術領域
        </p>

        {/* スキルカテゴリ（4領域） */}
        <div className="mt-4 space-y-3">
          {skillSummaries.map((item, idx) => (
            <div key={idx} className="rounded-xl bg-slate-50/80 p-3">
              <span className="text-[11px] font-semibold text-slate-500">
                {item.category}
              </span>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {item.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="rounded-md border border-slate-200/60 bg-white px-2 py-0.5 text-[10px] font-medium text-slate-700 shadow-2xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 詳細ページへの導線 */}
      <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[10px] text-slate-400">
          経験年数・活用実績・認定資格
        </span>
        <Link
          href="/skills"
          className="text-xs font-semibold text-slate-600 transition-colors hover:text-slate-900"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}