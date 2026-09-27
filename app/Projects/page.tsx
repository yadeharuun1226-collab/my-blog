import Link from "next/link";
import Image from "next/image";

type ProjectDetail = {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  img: string;
  description: string;
  architecturePoints: string[];
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
};

export default function ProjectsPage() {
  const projects: ProjectDetail[] = [
    {
      id: "weather-api",
      title: "気象予測API",
      subtitle: "Cloud Run × Lambda による自動解析パイプライン",
      period: "2026.01 - 2026.03",
      img: "/images/profile_kaiyoukaihatsu.jpg",
      description:
        "気象データを定期的に自動収集し、機械学習モデルを用いて解析・予測結果を即座に提供するサーバーレスAPIサービスです。インフラはすべて Terraform でコード化しています。",
      architecturePoints: [
        "Cloud Run を利用した低コストかつスケーラブルなAPI配信",
        "AWS Lambda によるスケジュール実行型のデータパッチ処理",
        "Terraform によるマルチクラウド（AWS/GCP）インフラの統一管理",
      ],
      techStack: ["Cloud Run", "AWS Lambda", "Terraform", "Python", "Docker"],
      githubUrl: "https://github.com",
      demoUrl: "https://example.com",
    },
    {
      id: "ec-concept",
      title: "ECサイト構想",
      subtitle: "Next.js App Router を活用したモダンECプロトタイプ",
      period: "2026.02 - 開発中",
      img: "/images/profile_tennis.jpg",
      description:
        "高速なページ遷移と快適なUXを実現するモダンなECプラットフォームのプロトタイプです。カート機能や決済フローのバックエンド連携を検証しています。",
      architecturePoints: [
        "Next.js App Router による高速なレンダリングパフォーマンス",
        "Tailwind CSS を利用した完全レスポンシブ UI 設計",
        "Stripe API 連携による安全な決済処理フローのプロトタイピング",
      ],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe API"],
      githubUrl: "https://github.com",
    },
    {
      id: "yu-portal",
      title: "個人ブログ (YU PORTAL)",
      subtitle: "Qiita API 連携対応ダッシュボード型ポートフォリオ",
      period: "2026.02 - 運用中",
      img: "/images/profile_tentsauna.jpg",
      description:
        "自身の開発実績、保有スキル、Qiitaで執筆した最新技術記事をリアルタイムに集約・表示する個人ポータルサイトです。カード型ダッシュボードUIとスピーディーなモーダルプレビューを採用しています。",
      architecturePoints: [
        "Next.js App Router による高速なページレンダリングと ISR 活用",
        "Qiita API v2 との連動による最新記事の自動同期",
        "Tailwind CSS によるデザイン統一とレスポンシブ対応",
      ],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Qiita API"],
      githubUrl: "https://github.com",
    },
    {
      id: "be-curious",
      title: "勉強が楽しくなるアプリ",
      subtitle: "習慣化とモチベーション維持をサポートするWebアプリ",
      period: "2026.03 - 開発中",
      img: "/images/profile_golf.jpg",
      description:
        "毎日の学習進捗を直感的に記録・可視化し、ゲーミフィケーション要素を取り入れることで楽しく学習を継続できるようにサポートするアプリケーションです。",
      architecturePoints: [
        "直感的なUI/UXによるスムーズな学習ログの記録",
        "データビジュアライゼーションによる成長の可視化",
        "レスポンシブ対応でスマートフォンからも快適に利用可能",
      ],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      id: "coming-soon",
      title: "Coming Soon",
      subtitle: "新規プロジェクト企画・検証中",
      period: "2026.04 - 準備中",
      img: "/images/profile_Mt.Fuji.jpg",
      description:
        "新たな技術スタックの検証および開発者向けツールの構築に向けた新規プロジェクトです。コンセプト設計および環境構築を進めています。",
      architecturePoints: [
        "新規クラウドアソシエイト技術の検証",
        "自動化および開発効率向上ツールの開発",
      ],
      techStack: ["AWS", "Docker", "Go"],
    },
  ];

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
            Projects
          </h1>
          <p className="mt-1 text-xs text-slate-500">
            これまで構築したアプリケーションやインフラ構成、検証プロジェクトの一覧です。
          </p>
        </header>

        {/* プロジェクト一覧 */}
        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:border-slate-200 hover:shadow-md"
            >
              <div className="flex flex-col gap-6 md:flex-row">
                {/* 左側：サムネイル画像 */}
                <div className="relative h-48 w-full flex-shrink-0 overflow-hidden rounded-xl border border-slate-100 bg-slate-100 md:w-64">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* 右側：詳細内容 */}
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-bold text-slate-800">
                        {project.title}
                      </h2>
                      <span className="text-[10px] text-slate-400">
                        {project.period}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs font-medium text-slate-500">
                      {project.subtitle}
                    </p>

                    <p className="mt-3 text-xs leading-relaxed text-slate-600">
                      {project.description}
                    </p>

                    {/* 設計ポイント */}
                    <div className="mt-4 rounded-xl bg-slate-50/80 p-3">
                      <p className="text-[11px] font-semibold text-slate-500">
                        設計の工夫・ポイント
                      </p>
                      <ul className="mt-1.5 space-y-1 text-xs text-slate-600">
                        {project.architecturePoints.map((pt, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-slate-400">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* タグと外部リンク */}
                  <div className="mt-5 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="rounded-md border border-slate-200/60 bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 text-xs font-medium">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-600 hover:text-slate-900 underline underline-offset-4"
                        >
                          GitHub →
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg bg-slate-800 px-3 py-1.5 text-white transition-colors hover:bg-slate-900"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}