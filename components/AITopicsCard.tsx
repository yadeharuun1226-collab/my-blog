import Card from "@/components/ui/Card";

type TopicItem = {
  title: string;
  url: string;
  date: string;
  source: string;
};

// RSSフィード等から最新ニュースを取得する関数（例）
async function getAITopics(): Promise<TopicItem[]> {
  try {
    // ITmedia AI+ 等のRSSから取得、またはQiita/ZennのAIトレンドを取得
    // 24時間（86400秒）キャッシュして1日1回更新
    const res = await fetch(
      "https://qiita.com/api/v2/tags/ai/items?page=1&per_page=4",
      { next: { revalidate: 86400 } }
    );
    if (!res.ok) throw new Error("Failed");
    const data = await res.json();

    return data.map((item: any) => ({
      title: item.title,
      url: item.url,
      date: new Date(item.created_at).toLocaleDateString("ja-JP", {
        month: "2-digit",
        day: "2-digit",
      }),
      source: "Qiita AI",
    }));
  } catch (error) {
    // キャッチ時のフォールバックデータ
    return [
      {
        title: "最新のLLMアーキテクチャ動向とマルチモーダルAIの進化",
        url: "#",
        date: "Today",
        source: "AI News",
      },
      {
        title: "Next.js 15 & AI SDK で作るリアルタイムエージェント構築",
        url: "#",
        date: "Today",
        source: "Tech News",
      },
    ];
  }
}

export default async function AITopicsCard() {
  const topics = await getAITopics();

  return (
    <Card title="Today's AI Topics">
      <div className="space-y-2.5">
        <p className="text-[11px] text-slate-500">
          デイリーでキャッチアップしているAI・最新技術トピック
        </p>
        <div className="space-y-2">
          {topics.slice(0, 4).map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-slate-100 p-2.5 transition-all hover:border-slate-200 hover:bg-slate-50/50"
            >
              <div className="min-w-0 flex-1 pr-3">
                <p className="truncate text-xs font-medium text-slate-700 transition-colors group-hover:text-slate-900">
                  {item.title}
                </p>
                <div className="mt-1 flex items-center gap-2 text-[10px] text-slate-400">
                  <span className="rounded-md bg-slate-100 px-1.5 py-0.5 font-medium text-slate-600">
                    {item.source}
                  </span>
                  <span>{item.date}</span>
                </div>
              </div>
              <span className="text-xs text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-slate-600">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </Card>
  );
}