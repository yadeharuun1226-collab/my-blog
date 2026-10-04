import Link from "next/link";
import Image from "next/image";

type HobbyStory = {
  id: string;
  title: string;
  period: string;
  badge: string;
  img: string;
  content: string[];
  quote?: string;
};

export default function ProfilePage() {
  // 原文の表現とエピソードを100%活かしたデータ構造
  const hobbyStories: HobbyStory[] = [
    {
      id: "tennis",
      title: "テニス — 切っても切り離せない存在",
      period: "5歳 〜 現在",
      badge: "実業団・全国大会参戦",
      img: "/images/profile_tennis.jpg",
      content: [
        "5歳から始めていままで、ずっと続けていて、自分にとって切っても切り離せない存在。",
        "大学時代に一番熱心に打ち込み、『チームとしてのテニス』を学び、楽しみを再実感した。",
        "いまでも実業団のテニスチームに属しており、全国大会にも参戦。主力メンバーとして、テニスを生業とする人を相手にしのぎを削っている。",
      ],
    },
    {
      id: "table-tennis",
      title: "卓球 — 講義室の机から始まったムーブメント",
      period: "大学院1年 〜 現在",
      badge: "目標：大会で一勝",
      img: "/images/profile_kaiyoukaihatsu.jpg",
      content: [
        "大学の研究室の同期メンバーと、研究室の机で始めたのがきっかけ。卓球台には講義室の机を6つほど組み合わせたものに本物のネットとNittakuのピンポン玉、ラケットは元卓球部のメンバーが持ち寄ったものを交代で使っていた。これが次第に本格化し、最後には他の学科を巻き込んだ大会を開催するほどとなった。",
        "会社に入ってからはマイラケットを購入し、会社の同期（元卓球部複数人）を誘って近くの卓球クラブで練習している。目標は大会に出場して一勝すること。",
        "テニスとの違いは、回転の影響を受けやすく、回転を読んで面の角度を合わせないといけないところ。奥が深く難しい。それが楽しい。",
      ],
    },
    {
      id: "golf",
      title: "ゴルフ — 即ハマり、即コース、即会員",
      period: "2026年8月 〜 現在",
      badge: "江坂会員",
      img: "/images/profile_golf.jpg",
      content: [
        "最近始めたゴルフ。高校の友人に教えてもらい、2度ほど打ちっぱなしで練習した後、コースをまわった。これがまた面白い。",
        "練習を重ねるほどクラブがまっすぐボールにあたる感覚がつかめてきて、ドライバーで打った時にまっすぐの軌道を描いた時の快感は何にも代えがたい。",
        "最近はひとりで打ちっぱなしに行き練習するほどで、江坂にあるゴルフセンターの会員になるほど打ち込んでいる。",
      ],
    },
    {
      id: "jogging",
      title: "ジョギング — 熾烈な社内枠争いと轟音",
      period: "2025年 〜 現在",
      badge: "社内枠奪取へ",
      img: "/images/profile_Mt.Fuji.jpg",
      content: [
        "会社の年に一度の行事で駅伝大会が開催される（毎年2月）。昨年は参加せずに応援のみしていたが、なんとグループ会社含め全体の2位という結果に。",
        "しびれるレースを見た後、『来年は自分も出場する！』と意気込み、週に2,3度、仕事終わりに練習している。",
        "2位になったチームに食い込むには、社内の参加メンバーのうち上位6名に入らないといけない。この熾烈な争いを勝ち抜くべく、ジムのランニングマシンで轟音を鳴らしている。",
      ],
    },
    {
      id: "swimming",
      title: "プール — トライアスロン挑戦と至高のラーメン",
      period: "月2回ペース",
      badge: "750m無休憩へ",
      img: "/images/profile_tentsauna.jpg",
      content: [
        "月に2度ほど、会社の先輩・同期に誘われて泳いでいる。もともと泳ぐのはそれほど得意ではないが、いつかトライアスロンに参加したいという目標があり、750mを休憩なしで泳げるように練習している。",
        "練習後にきまって訪れる豚骨ラーメン屋『神虎』は、これまでたべた豚骨ラーメンの中で一番うまい。黒トララーメンとチャーハンの組み合わせは外せない。",
        "プールは体全身を使う上けがも少なく、また、ラーメンのうまさを引き立たせる味付けの役目も果たしている。至高だ。",
      ],
      quote: "ラーメンのうまさを引き立たせる味付けの役目も果たしている。至高だ。",
    },
    {
      id: "cycling",
      title: "サイクリング — ビワイチ・アワイチから大阪城へ",
      period: "大学3年 〜 現在",
      badge: "愛車で夜間疾走",
      img: "/images/profile_kaiyoukaihatsu.jpg",
      content: [
        "大学3年のころ、部活の同期と先輩とともに琵琶湖を一周した。はじめて乗るロードバイクは、そのサドルの高さに苦戦しつつも風を切る快感にとりこ。湖岸を眺めながらのサイクリングは気持ちいいうえに、走った後の達成感が半端じゃない。",
        "びわこ一周（いわゆる”びわいち”）の1年後にはあわじ一周”あわいち”も達成し、その後に自前のロードバイクを購入した。",
        "平日21時ごろ、仕事でたまったストレスを発散するために、大阪城のまわりをかけまわり、大阪城ランナーを追い抜きまくりリズミカルに立ちこぎする。",
      ],
    },
    {
      id: "sauna",
      title: "サウナ・岩盤浴 — 左脳の解放と滝つぼの整い",
      period: "Routine",
      badge: "右脳を取り戻す",
      img: "/images/profile_tentsauna.jpg",
      content: [
        "サウナはいわずもがな気持ちいい。頭の中が左脳優勢になったとき、左脳を空っぽにする。行きつけの鶴橋ののべはの湯は、岩盤浴内で読書することができ、小説を読んで右脳を取り戻す。",
        "最近行った、滝つぼテントサウナは良すぎた。自分たちで薪をくべてサウナを沸かせて、石を組み立ててそこに炭をほうりこんで、組み立てた石の上に網をおいてBBQをする。",
        "サウナ後の整い水風呂として、小さい滝つぼがある。頭から滝を浴びて、十分に冷えたからだを運び、サウナチェアで全身を天に昇らせたら完成。お盆休みの初日はこれに決まりだ。",
      ],
      quote: "頭から滝を浴びて、十分に冷えたからだを運び、サウナチェアで全身を天に昇らせたら完成。",
    },
    {
      id: "live-music",
      title: "音楽ライブ — 泥臭いロックと富士山の情景",
      period: "高校2年 〜 現在",
      badge: "年間15回参戦",
      img: "/images/profile_Mt.Fuji.jpg",
      content: [
        "幅広く邦ロック・パンクロックをたしなむ私。ここ最近はしばらく、熱くてかっこよくてくさいロックが大好きだ。特に、10-FEETやマキシマム ザ ホルモン、ハルカミライというバンドが好き。昨年は15回ほどライブやフェスに繰り出し、音楽を全身で浴びる。音楽からは人生の歩き方を多く学んだ。",
        "8月に参戦した、SWEET LOVE SHOWERというライブが、いままでで一番気持ちい最高のライブだった。",
        "ステージの背後には富士山がくっきりみえ、空気も澄んでいて音が響き渡る。皆が思うように体を揺らし耳を傾け、おいしい屋台めしを食らい、ステージの移動でもステップを踏んで楽しむ。これからも大好きなバンドを聞き続けたい。",
      ],
      quote: "ステージの背後には富士山がくっきりみえ、空気も澄んでいて音が響き渡る。",
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
            About & Profile
          </h1>
          <p className="mt-1 text-xs text-slate-500">
            仕事も趣味も「経験」を重視し、自ら動いて思考・吸収する個人のバックグラウンドです。
          </p>
        </header>

        <div className="space-y-8">
          {/* 1. メインプロフィールカード */}
          <section className="overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 mx-auto md:mx-0">
                <Image
                  src="/images/profile_Mt.Fuji.jpg"
                  alt="Profile Avatar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <h2 className="text-xl font-bold text-slate-800">YU</h2>
                    <p className="text-xs font-medium text-slate-500 mt-0.5">
                      Cloud / Backend / Application Engineer
                    </p>
                  </div>
                  <span className="self-center md:self-auto rounded-full bg-slate-100 px-3 py-1 text-[10px] font-semibold text-slate-600">
                    Location: Japan
                  </span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  何事も自ら体験し、全身で吸収することを大切にしています。5歳からのテニスで培った「チームとしての勝負強さ」をはじめ、講義室の机を並べた卓球大会の主催、即コースに出て会員化したゴルフ、夜間のロードバイクや滝つぼテントサウナまで。自発的に面白さを生み出し、タフに挑戦し続けるスタイルです。
                </p>
              </div>
            </div>
          </section>

          {/* 2. プロフィールの目的（3つの軸） */}
          <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="text-base font-bold text-slate-800">
              Personal Identity
            </h3>
            <p className="mt-0.5 text-xs text-slate-500">
              行動の根底にある3つのスタンス
            </p>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4">
                <h4 className="text-xs font-bold text-slate-800">
                  幅広く好奇心旺盛
                </h4>
                <p className="mt-2 text-[11px] leading-relaxed text-slate-600">
                  球技・ラン・水泳・サウナ・ロックフェスまで、少しでも興味を持ったら垣根なく飛び込み、奥深さを探求します。
                </p>
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4">
                <h4 className="text-xs font-bold text-slate-800">
                  経験重視と高い吸収力
                </h4>
                <p className="mt-2 text-[11px] leading-relaxed text-slate-600">
                  即コースに出て打ち込むゴルフや、未経験からのトライアスロン挑戦など、「まずはやってみる」ことで即座に自分の糧にします。
                </p>
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4">
                <h4 className="text-xs font-bold text-slate-800">
                  活発で自立した巻き込み力
                </h4>
                <p className="mt-2 text-[11px] leading-relaxed text-slate-600">
                  机を繋げて卓球大会を主催したり、駅伝の社内枠争いを目指すなど、自ら動き周囲を巻き込んで環境を作ります。
                </p>
              </div>
            </div>
          </section>

          {/* 3. エピソード＆趣味（原文の質感を生かしたカード表示） */}
          <section className="space-y-6">
            <h3 className="text-base font-bold text-slate-800">
              Interests & Real Stories
            </h3>

            <div className="space-y-6">
              {hobbyStories.map((story) => (
                <article
                  key={story.id}
                  className="overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:border-slate-200 hover:shadow-md"
                >
                  <div className="flex flex-col gap-6 md:flex-row">
                    {/* 左側：サムネイル */}
                    <div className="relative h-44 w-full flex-shrink-0 overflow-hidden rounded-xl border border-slate-100 bg-slate-100 md:w-56">
                      <Image
                        src={story.img}
                        alt={story.title}
                        fill
                        className="object-cover"
                      />
                      <span className="absolute top-2.5 left-2.5 rounded-md bg-slate-900/80 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-xs">
                        {story.badge}
                      </span>
                    </div>

                    {/* 右側：文脈・ストーリー（文章表現をそのまま尊重） */}
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-sm font-bold text-slate-800">
                            {story.title}
                          </h4>
                          <span className="text-[10px] text-slate-400">
                            {story.period}
                          </span>
                        </div>

                        <div className="mt-3 space-y-2 text-xs leading-relaxed text-slate-600">
                          {story.content.map((paragraph, pIdx) => (
                            <p key={pIdx}>{paragraph}</p>
                          ))}
                        </div>
                      </div>

                      {story.quote && (
                        <div className="mt-4 rounded-xl bg-slate-50 border border-slate-100 p-2.5 text-[11px] font-medium italic text-slate-600">
                          “ {story.quote} ”
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}