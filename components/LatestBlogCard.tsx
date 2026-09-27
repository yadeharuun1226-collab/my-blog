import Card from "@/components/ui/Card";

type QiitaItem = {
  id: string;
  title: string;
  url: string;
  created_at: string;
};

async function getLatestQiitaPosts(): Promise<QiitaItem[]> {
  const QIITA_USER_ID = "yadeharuun1226-collab"; // ★ご自身のQiitaユーザー名

  try {
    const res = await fetch(
      `https://qiita.com/api/v2/users/${QIITA_USER_ID}/items?page=1&per_page=6`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) throw new Error("Failed to fetch");
    return await res.json();
  } catch (error) {
    console.error("Qiita API Error:", error);
    return [];
  }
}

export default async function LatestBlogCard() {
  const posts = await getLatestQiitaPosts();

  return (
    <Card title="Latest Blog" href="https://qiita.com/YOUR_QIITA_NAME">
      <div className="space-y-2.5">
        {posts.length > 0 ? (
          posts.map((post) => {
            const formattedDate = new Date(post.created_at)
              .toLocaleDateString("ja-JP", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })
              .replace(/\//g, ".");

            return (
              <a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-slate-100 px-3 py-2.5 transition-all duration-200 hover:border-slate-200 hover:bg-slate-50/50 hover:shadow-sm"
              >
                {/* Qiita バッジ */}
                <div className="flex h-8 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-[#55C500]/10 text-[10px] font-bold text-[#55C500]">
                  Qiita
                </div>

                {/* タイトルと日付 */}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-medium text-slate-700 transition-colors group-hover:text-slate-900">
                    {post.title}
                  </p>
                  <p className="mt-0.5 text-[10px] text-slate-400">
                    {formattedDate}
                  </p>
                </div>
              </a>
            );
          })
        ) : (
          <p className="py-4 text-center text-xs text-slate-400">
            記事を取得できませんでした
          </p>
        )}
      </div>
    </Card>
  );
}