import Link from "next/link";

type SkillItem = {
  name: string;
  level: "Advanced" | "Intermediate" | "Basic";
  experience: string; // 使用年数・実績
  description: string;
};

type SkillCategory = {
  id: string;
  categoryName: string;
  description: string;
  skills: SkillItem[];
};

export default function SkillsPage() {
  const skillCategories: SkillCategory[] = [
    {
      id: "cloud-infrastructure",
      categoryName: "Cloud & Infrastructure",
      description: "クラウド環境の構築・運用および Infrastructure as Code による自動化",
      skills: [
        {
          name: "AWS",
          level: "Intermediate",
          experience: "実務 / 個人開発（1年〜）",
          description: "Lambda, CloudFront, S3, ECS などを活用したサーバーレスアーキテクチャの構築および運用経験。",
        },
        {
          name: "GCP",
          level: "Intermediate",
          experience: "実務 / 個人開発（1年〜）",
        description: "Cloud Run を中心としたコンテナデプロイ環境の自動化、BigQuery を利用したデータ解析パイプラインの構築。",
        },
        {
          name: "Terraform",
          level: "Intermediate",
          experience: "個人開発・検証",
          description: "AWS / GCP リソースのコード化（IaC）。モジュール化によるマルチクラウドインフラの再現性向上を実践。",
        },
        {
          name: "Docker",
          level: "Intermediate",
          experience: "実務 / 個人開発",
          description: "マルチステージビルドを用いた軽量なコンテナイメージの作成、ローカル開発環境（docker-compose）の標準化。",
        },
      ],
    },
    {
      id: "backend",
      categoryName: "Backend & Data",
      description: "API開発、ビジネスロジック実装、データ処理パイプライン",
      skills: [
        {
          name: "Python",
          level: "Advanced",
          experience: "実務 / 研究（2年〜）",
          description: "気象データ等の自動解析処理、機械学習モデルの組み込み、FastAPI / Flask を使用したバックエンドAPI開発。",
        },
        {
          name: "Node.js / Express",
          level: "Intermediate",
          experience: "個人開発",
          description: "RESTful API の設計・実装およびサードパーティAPI（Qiita, Stripe等）との統合処理。",
        },
        {
          name: "SQL (PostgreSQL / BigQuery)",
          level: "Intermediate",
          experience: "実務 / 個人開発",
          description: "テーブル設計、複雑なクエリによる集計・分析、インデックス最適化によるクエリパフォーマンスの向上。",
        },
      ],
    },
    {
      id: "frontend",
      categoryName: "Frontend",
      description: "モダンWebフレームワークを用いたレスポンシブかつ高パフォーマンスなUI開発",
      skills: [
        {
          name: "Next.js (App Router)",
          level: "Intermediate",
          experience: "個人開発（ポートフォリオ・EC構築）",
          description: "App Router の思想に基づいた設計、ISR/Server Components を活用した高速なページ表示の実装。",
        },
        {
          name: "TypeScript",
          level: "Intermediate",
          experience: "個人開発",
          description: "厳格な型定義によるコード品質の担保、APIレスポンスの型安全性向上、保守性の高いコンポーネント設計。",
        },
        {
          name: "Tailwind CSS",
          level: "Advanced",
          experience: "実務 / 個人開発",
          description: "ユーティリティファーストでの高速なUI実装、レスポンシブデザインおよび共通コンポーネント化の推進。",
        },
        {
          name: "HTML5 / CSS3",
          level: "Advanced",
          experience: "実務 / 個人開発（2年〜）",
          description: "セマンティックなHTML構造化、アクセシビリティへの配慮、Flexbox / Grid による自由度の高いレイアウト設計。",
        },
      ],
    },
    {
      id: "tools-certifications",
      categoryName: "DevOps, Tools & Certifications",
      description: "開発プロセスを支えるツール類と保有資格・認定知識",
      skills: [
        {
          name: "Git / GitHub",
          level: "Advanced",
          experience: "日常利用",
          description: "Pull Request をベースとしたチーム開発フロー、GitHub Actions による CI/CD ワークフローの構築・自動化。",
        },
        {
          name: "Linux / Shell Script",
          level: "Intermediate",
          experience: "実務 / 個人開発",
          description: "Bash / Zsh での各種タスク自動化スクリプト作成、サーバー環境構築およびログ解析。",
        },
        {
          name: "Certification List",
          level: "Advanced",
          experience: "クラウド / IPA",
          description: "AWS 9資格(AIF,CLF,SAA,DVA,COA,SAP,DOP,SCS,DEA)、GCP 2資格(GCL,ACE)、Azure 2資格(AZ-900,AZ-104)、OCI Foundations Associate、応用情報技術者",
        },

      ],
    },
  ];

  // レベルに応じたバッジスタイルの判定
  const getLevelBadge = (level: SkillItem["level"]) => {
    switch (level) {
      case "Advanced":
        return "bg-emerald-50 text-emerald-700 border-emerald-200/80";
      case "Intermediate":
        return "bg-sky-50 text-sky-700 border-sky-200/80";
      case "Basic":
        return "bg-slate-100 text-slate-600 border-slate-200";
    }
  };

  return (
    <main className="min-h-screen bg-slate-50/60 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* トップへ戻るリンク */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 transition-colors hover:text-slate-900"
        >
          ← Back to Dashboard
        </Link>

        {/* ページタイトル */}
        <header className="mt-4 mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-slate-800">
            Skills & Expertise
          </h1>
          <p className="mt-1 text-xs text-slate-500">
            これまでの実務・検証プロジェクトで培った技術スタックと保有スキルの一覧です。
          </p>
        </header>

        {/* スキルカテゴリ一覧 */}
        <div className="space-y-8">
          {skillCategories.map((category) => (
            <section
              key={category.id}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-lg font-bold text-slate-800">
                  {category.categoryName}
                </h2>
                <p className="mt-0.5 text-xs text-slate-500">
                  {category.description}
                </p>
              </div>

              {/* スキルグリッド */}
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col justify-between rounded-xl border border-slate-100 bg-slate-50/50 p-4 transition-all hover:bg-slate-50 hover:border-slate-200/80"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-sm font-bold text-slate-800">
                          {skill.name}
                        </h3>
                        <span
                          className={`rounded-md border px-2 py-0.5 text-[10px] font-semibold ${getLevelBadge(
                            skill.level
                          )}`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <p className="mt-1 text-[11px] font-medium text-slate-400">
                        {skill.experience}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-slate-600">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}