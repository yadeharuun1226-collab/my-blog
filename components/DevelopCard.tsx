import Image from "next/image";
import Card from "@/components/ui/Card";

export default function DevelopCard() {
  const projects = [
    {
      name: "気象予測API",
      tech: "Cloud Run × Lambda",
      img: "/images/profile_kaiyoukaihatsu.jpg", // ★ご自身の画像パスに変更してください
    },
    {
      name: "ECサイト構想",
      tech: "Next.js",
      img: "/images/profile_tennis.jpg",
    },
    {
      name: "個人ブログ",
      tech: "YU PORTAL",
      img: "/images/profile_tentsauna.jpg",
    },
    {
      name: "勉強が楽しくなるアプリ",
      tech: "be curious",
      img: "/images/profile_golf.jpg",
    },
    {
      name: "Coming Soon",
      tech: "New Project",
      img: "/images/profile_Mt.Fuji.jpg",
    },
  ];

  return (
    <Card title="Develop" href="/projects">
      <div className="space-y-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group flex items-center gap-3 rounded-xl border border-slate-100 p-2.5 transition-all duration-200 hover:border-slate-200 hover:bg-slate-50/50 hover:shadow-sm"
          >
            {/* サムネイル画像エリア */}
            <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg bg-slate-100 border border-slate-100">
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

            {/* プロジェクト名と技術スタック */}
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-medium text-slate-700 transition-colors group-hover:text-slate-900">
                {project.name}
              </p>
              <p className="mt-0.5 truncate text-[10px] text-slate-400">
                {project.tech}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}