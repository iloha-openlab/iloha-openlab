import { common } from "./common";

export default {
    company: {
        nameJa: common.nameJa,
        nameEn: common.nameEn,
        tagline: common.tagline,
        mission: "専門的支援と長期的コミットメントにより、Open SourceおよびOpen Dataの持続可能なエコシステムを支える。",
        brandStory: "「いろは」とは、物事の基礎を意味します。ILOHA OpenLab は、Open SourceおよびOpen Dataの持続可能性は、確かな基盤と基礎の上に成り立つと考えます。私たちはツールの導入にとどまらず、その基盤となる技術の強化に取り組みます。",
        legalForm: "合同会社",
        headOffice: "東京都北区赤羽一丁目7-9 赤羽第一葉山ビル4F",
        fiscalYear: "1月1日から12月31日",
        contact: common.contact,
        linkedin: common.linkedin,
        id: common.id,
        corporateNumberUrl: `https://www.houjin-bangou.nta.go.jp/henkorireki-johoto.html?selHouzinNo=${common.id}`,
        duns: common.duns,
        businessCategory: "ソフトウェア開発・OSS活用コンサルティング業",
        industrialClassification: "情報通信業／情報サービス業／ソフトウェア業 (G391)",
        mainBusiness: "翻訳支援・地理空間情報システムの導入支援・コンサルティング、オープンソースソフトウェア支援、自社ツール・プラグインの開発",
        representative: "三浦広志",
    },
    news: {
        title: "おしらせ",
        latestNews: "最新のおしらせ",
        backToList: "一覧に戻る",
        readMore: "詳細を見る",
    },
    nav: {
        home: "ホーム",
        news: "おしらせ",
        message: "ご挨拶",
        products: "商品・サービス",
        activities: "活動紹介",
        privacy: "プライバシーポリシー",
        logoPolicy: "ロゴ使用規定",
    },
    activities: {
        title: "代表の活動紹介",
        lead: "このページでは、代表社員・三浦広志の個人としてのオープンソース・オープンデータ活動を紹介します。ILOHAオープンラボは、こうした継続的なコミュニティ活動と技術的蓄積を基盤として設立されました。",
        profile: {
            title: "プロフィール概要",
            name: "三浦 広志 / Hiroshi Miura",
            position: "ILOHAオープンラボ合同会社 代表社員",
            communityPosition: "一般社団法人 OpenStreetMap Foundation Japan 代表理事",
            specialties: "OSSエコシステム支援、翻訳支援ツール、地理空間情報システム、Pythonライブラリ開発",
            links: [
                { name: "Codeberg", url: "https://codeberg.org/miurahr" },
                { name: "GitHub", url: "https://github.com/miurahr" },
                { name: "LinkedIn", url: "https://www.linkedin.com/in/miurahr/" },
                { name: "Mastodon (OSM Town)", url: "https://en.osm.town/@miurahr" },
                { name: "Liberapay", url: "https://liberapay.com/miurahr" }
            ]
        },
        communities: {
            title: "コミュニティ役職",
            items: [
                {
                    name: "一般社団法人 OpenStreetMap Foundation Japan (OSMFJ)",
                    role: "代表理事 (Executive Director)",
                    description: "日本のOpenStreetMapコミュニティを代表する非営利法人"
                },
                {
                    name: "OmegaT プロジェクト",
                    role: "プロジェクトリード・コアコントリビューター",
                    description: "GNU GPL ライセンスのフリーソフトウェアCAT（コンピュータ支援翻訳）ツール"
                },
                {
                    name: "WeeklyOSM",
                    role: "編集・翻訳ボランティア（英語・日本語）",
                    description: "OpenStreetMapコミュニティの動向を伝える国際週刊ニュースメディア"
                }
            ]
        },
        projects: {
            title: "自作・主要メンテナンスOSSプロジェクト",
            items: [
                {
                    name: "pykakasi",
                    role: "作者・メンテナー",
                    description: "日本語（漢字・かな）をローマ字に変換するPython NLPライブラリ",
                    url: "https://codeberg.org/miurahr/pykakasi"
                },
                {
                    name: "py7zr",
                    role: "作者・メンテナー",
                    description: "Python製7zipアーカイブ実装。LZMA2・ZStd・PPMd等の圧縮アルゴリズムに対応",
                    url: "https://github.com/miurahr/py7zr"
                },
                {
                    name: "omegat-textra-plugin",
                    role: "作者",
                    description: "OmegaT向けNICT TexTra機械翻訳APIプラグイン",
                    url: "https://github.com/miurahr/omegat-textra-plugin"
                },
                {
                    name: "gradle-omegat-plugin",
                    role: "作者",
                    description: "OmegaT翻訳メモリをGradleビルドに統合するプラグイン",
                    url: "https://codeberg.org/miurahr/gradle-omegat-plugin"
                },
                {
                    name: "unihandecode",
                    role: "メンテナー",
                    description: "Unicode文字をASCIIへ変換する多言語対応ライブラリ",
                    url: "https://codeberg.org/miurahr/unihandecode"
                },
                {
                    name: "pyppmd",
                    role: "作者",
                    description: "PPM（Prediction by Partial Matching）圧縮アルゴリズムのPython実装",
                    url: "https://github.com/miurahr/pyppmd"
                },
                {
                    name: "inflate64",
                    role: "作者",
                    description: "Enhanced Deflate（Deflate64）アルゴリズムのPython実装",
                    url: "https://github.com/miurahr/inflate64"
                }
            ]
        },
        contributions: {
            title: "コントリビューション実績",
            text: "Linux カーネル、OmegaT、GDAL、OpenStreetMap エディタ（JOSM等）、LibreOffice をはじめ、数百のオープンソースプロジェクトにコントリビューションしています。"
        },
        awards: {
            title: "主な受賞・表彰",
            items: [
                {
                    title: "ICT推進月間委員会 会長賞（情報システム優良賞）（2011年）",
                    description: "震災支援プラットフォーム Sinsai.info プロジェクトへの貢献"
                },
                {
                    title: "Financial Use Case Working Group リーダーシップ表彰",
                    description: "MUFGとの共同白書プロジェクトにおけるワーキンググループ調整と白書執筆への貢献"
                }
            ]
        },
        legacyItems: {
            title: "その他の活動・外部リンク",
            items: [
                {
                    title: "Note (miurahr)",
                    url: "https://note.com/miurahr",
                    description: "Containerd/nerdctlの日本語マニュアル翻訳や、OmegaTの初心者向けガイドなどを公開しています。",
                },
                {
                    title: "HackMD OmegaT Project",
                    url: "https://hackmd.io/@omegat",
                    description: "OmegaTのドキュメンテーションプロジェクトをリードしています。",
                },
                {
                    title: "ResearchGate (Hiroshi Miura)",
                    url: "https://www.researchgate.net/profile/Hiroshi-Miura-2",
                    description: "研究業績や公開論文などを掲載しているResearchGateのプロフィールページです。",
                },
                {
                    title: "SlideShare (miurahr)",
                    url: "https://www.slideshare.net/miurahr",
                    description: "各種カンファレンスや勉強会での発表資料を公開しています。",
                }
            ]
        }
    },
    message: {
        title: "ご挨拶",
        paragraphs: [
            "ILOHAオープンラボ合同会社のウェブサイトをご覧いただき、ありがとうございます。代表の三浦広志です。",
            "「いろは」とは、物事の基礎・いちばん最初のことを意味します。この言葉を社名に冠したのは、私たちの仕事の本質がまさにそこにあると考えているからです。",
            "オープンソースソフトウェア（OSS）やオープンデータは、今や社会の重要なインフラです。しかしその持続可能性は、目に見えやすい機能や利便性だけでなく、基盤となる技術・コミュニティ・仕組みが丁寧に育てられているかどうかにかかっています。",
            "私はこれまで、OSSコミュニティの一員として開発・翻訳・教育など様々な形で関わってきました。その経験を通じて痛感したのは、「基礎をつくる仕事」の大切さと、それを専門的かつ継続的に担う存在の必要性です。ILOHA OpenLab は、その思いから生まれた会社です。",
            "派手なことはしません。でも、長く、深く、誠実に。OSSエコシステムの土台を支える仕事を、これからも続けていきます。どうぞよろしくお願いいたします。"
        ],
        representative: "代表社員　三浦広志",
        linkedin: "LinkedIn プロフィール"
    },
    products: {
        title: "商品・サービス",
        categories: [
            {
                id: "omegat",
                name: "OmegaT関連プロダクト",
                description: "OmegaTの機能を拡張するプラグインや関連ツールを提供します。",
                items: [
                    {
                        name: "OmegaT DeepL Plugin — Professional Edition",
                        description: "OmegaT用のフル機能DeepL API統合プラグインです。プロキシ認証、カスタム用語集管理、訳文の丁寧さ（formality）制御などの機能を提供します。",
                        url: common.storeUrl
                    }
                ]
            },
            {
                id: "oss",
                name: "OSSコンサルティングサービス",
                description: "オープンソース翻訳ツールや地理空間システムに関する技術コンサルティング、導入支援、受託開発を提供します。",
                items: []
            },
            {
                id: "osm",
                name: "OSM教育サービス",
                description: "OpenStreetMapを用いたマッピング技術トレーニング、GIS教育サービスを提供します。",
                items: []
            }
        ]
    },

    business: [
        "翻訳支援ソフトウェア及び関連システムの導入支援、保守、運用支援並びにコンサルティング",
        "翻訳支援ツール、業務支援ツール及び関連ソフトウェアのプラグイン、拡張機能の開発及び販売",
        "オープンソースソフトウェアに関する導入支援、技術支援、調査研究及びコンサルティング",
        "地理空間情報の収集、加工、解析及び提供サービス並びにオープンデータを活用したシステムの構築",
        "コンピュータソフトウェア及び情報システムの設計、開発、保守、運用支援",
        "情報処理、翻訳技術及びオープンデータ活用に関する教育、研修並びにセミナーの開催",
        "情報処理及び情報提供サービス",
        "前各号に附帯又は関連する一切の事業"
    ]
}