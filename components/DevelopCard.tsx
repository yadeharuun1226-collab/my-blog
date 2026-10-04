"use client";

import { useState } from "react";
import Image from "next/image";
import Card from "@/components/ui/Card";

// プロジェクト情報の型定義
type Project = {
  id: string;
  name: string;
  tech: string;
  img: string;
  description: string;
  features: string[];
  plannedManDays: number; // 予定工数 (人日)
  spentManDays: number;   // 消化工数 (人日)
  status: "In Progress" | "Completed" | "Planning";
  demoUrl?: string;
  githubUrl?: string;
};

export default function DevelopCard() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "weather-api",
      name: "気象予測API",
      tech: "Cloud Run × Lambda",
      img: "/images/profile_kaiyoukaihatsu.jpg",
      plannedManDays: 20,
      spentManDays: 20,
      status: "Completed",
      description:
        "気象データを定期的に取得し、機械学習モデルで解析・予測結果を返すサーバーレスAPIです。",
      features: [
        "Cloud Run によるコンテナ型マイクロサービス構成",
        "AWS Lambda による定期バッチ処理・データ収集",
        "レスポンス速度 100ms 以下の高速データ提供",
      ],
    },
    {
      id: "ec-concept",
      name: "ECサイト構想",
      tech: "Next.js",
      img: "/images/profile_tennis.jpg",
      plannedManDays: 15,
      spentManDays: 10,
      status: "In Progress",
      description:
        "モダンなフロントエンド技術を活用した、高速かつアクセシブルなECプラットフォームのプロトタイプです。",
      features: [
        "Next.js App Router による高速レンダリング",
        "Tailwind CSS によるレスポンシブデザイン",
        "決済フローおよびカート機能の基本設計",
      ],
    },
    {
      id: "yu-portal",
      name: "個人ブログ (YU PORTAL)",
      tech: "Next.js / TypeScript",
      img: "/images/profile_tentsauna.jpg",
      plannedManDays: 12,
      spentManDays: 9,
      status: "In Progress",
      description:
        "自身の経歴・スキル・開発成果物・ブログ記事を一元管理・発信する個人ポータルサイトです。",
      features: [
        "Qiita API 連携による最新記事自動取得",
        "洗練されたカード型ダッシュボードUI",
        "Vercel による自動デプロイパイプライン構築",
      ],
    },
    {
      id: "be-curious",
      name: "勉強が楽しくなるアプリ",
      tech: "be curious",
      img: "/images/profile_golf.jpg",
      plannedManDays: 25,
      spentManDays: 5,
      status: "In Progress",
      description:
        "学習の進捗や習慣化をサポートし、日常の学びを楽しく継続させるWebアプリケーションです。",
      features: [
        "直感的な学習ログ記録と可視化機能",
        "モチベーションを高めるゲーミフィケーション要素",
      ],
    },
    {
      id: "coming-soon",
      name: "Coming Soon",
      tech: "New Project",
      img: "/images/profile_Mt.Fuji.jpg",
      plannedManDays: 10,
      spentManDays: 0,
      status: "Planning",
      description: "新しいアイデアを検証・開発中のプロジェクトです。近日公開予定！",
      features: ["新規技術スタックの検証", "開発者向けツールの構築"],
    },
  ];

  return (
    <>
      <Card title="Develop" href="/projects">
        <div className="space-y-3">
          {projects.map((project) => {
            const progressPercent = Math.min(
              100,
              Math.round((project.spentManDays / project.plannedManDays) * 100)
            );

            return (
              <button
                key={project.id}
                type="button"
                onClick={() => setSelectedProject(project)}
                className="group flex w-full flex-col gap-2 rounded-xl border border-slate-100 p-2.5 text-left transition-all duration-200 hover:border-slate-200 hover:bg-slate-50/50 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
              >
                <div className="flex w-full items-center gap-3">
                  {/* サムネイル画像 */}
                  <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg border border-slate-100 bg-slate-100">
                    {project.img ? (
                      <Image
                        src={project.img}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-[10px] text-slate-400">
                        IMG
                      </div>
                    )}
                  </div>

                  {/* タイトルと工数 */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="truncate text-xs font-medium text-slate-700 transition-colors group-hover:text-slate-900">
                        {project.name}
                      </p>
                      <span className="text-[10px] font-medium text-slate-500">
                        {project.spentManDays}/{project.plannedManDays} 人日 ({progressPercent}%)
                      </span>
                    </div>
                    <p className="mt-0.5 truncate text-[10px] text-slate-400">
                      {project.tech}
                    </p>
                  </div>
                </div>

                {/* ★ 工数進捗バー（作成途中＝緑、作成後＝ブルー系） */}
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <div
                    className={`h-full transition-all duration-300 rounded-full ${
                      project.status === "Completed"
                        ? "bg-indigo-600" // 作成後：シックなインディゴブルー
                        : project.status === "In Progress"
                        ? "bg-emerald-500" // 作成途中：鮮やかなエメラルドグリーン
                        : "bg-slate-300" // 計画中：ニュートラルグレー
                    }`}
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </Card>

      {/* --- 概要モーダル --- */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl border border-slate-100 bg-white p-6 shadow-xl transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 閉じるボタン */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
            >
              ✕
            </button>

            {/* ヘッダー */}
            <div className="flex items-start gap-4">
              <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl border border-slate-100 bg-slate-100">
                {selectedProject.img && (
                  <Image
                    src={selectedProject.img}
                    alt={selectedProject.name}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="pr-6">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-slate-800">
                    {selectedProject.name}
                  </h3>
                  {/* ステータスバッジ（モーダル内） */}
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                      selectedProject.status === "Completed"
                        ? "bg-indigo-50 text-indigo-700 border border-indigo-200/60"
                        : selectedProject.status === "In Progress"
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200/60"
                        : "bg-slate-100 text-slate-600 border border-slate-200"
                    }`}
                  >
                    {selectedProject.status === "Completed"
                      ? "完了"
                      : selectedProject.status === "In Progress"
                      ? "進行中"
                      : "計画中"}
                  </span>
                </div>
                <span className="mt-1 inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600">
                  {selectedProject.tech}
                </span>
              </div>
            </div>

            {/* モーダル内 工数進捗バー */}
            {(() => {
              const modalProgress = Math.min(
                100,
                Math.round(
                  (selectedProject.spentManDays / selectedProject.plannedManDays) * 100
                )
              );
              return (
                <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50 p-3 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-600">開発工数進捗</span>
                    <span className="font-bold text-slate-700">
                      {selectedProject.spentManDays} / {selectedProject.plannedManDays}{" "}
                      <span className="text-[10px] font-normal text-slate-500">人日</span>
                      <span className="ml-1.5 text-slate-500">({modalProgress}%)</span>
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200/80">
                    <div
                      className={`h-full transition-all duration-500 rounded-full ${
                        selectedProject.status === "Completed"
                          ? "bg-indigo-600"
                          : selectedProject.status === "In Progress"
                          ? "bg-emerald-500"
                          : "bg-slate-400"
                      }`}
                      style={{ width: `${modalProgress}%` }}
                    />
                  </div>
                </div>
              );
            })()}

            {/* 概要 */}
            <p className="mt-4 text-xs leading-relaxed text-slate-600">
              {selectedProject.description}
            </p>

            {/* 主な特徴 */}
            {selectedProject.features && selectedProject.features.length > 0 && (
              <div className="mt-4 rounded-xl bg-slate-50 p-3">
                <p className="text-[11px] font-semibold text-slate-500">
                  主な特徴・概要
                </p>
                <ul className="mt-2 space-y-1.5 text-xs text-slate-600">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-slate-400">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* アクションボタン */}
            {(selectedProject.githubUrl || selectedProject.demoUrl) && (
              <div className="mt-6 flex items-center justify-end gap-3 pt-2">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-50"
                  >
                    GitHub
                  </a>
                )}
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-slate-800 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-slate-900"
                  >
                    デモを見る
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}