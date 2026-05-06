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
        store: "ストア",
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
            title: "コミュニティ・教育活動",
            items: [
                {
                    name: "神戸情報大学院大学 (Kobe Institute of Computing)",
                    role: "非常勤講師 (Adjunct Professor)",
                    period: "2005年4月 – 2008年3月",
                    description: "オペレーティングシステム、オープンソースソフトウェア（Linuxカーネル等）の講義を担当"
                },
                {
                    name: "青山学院大学 地球社会共生学部 (GSC)",
                    role: "非常勤講師",
                    period: "2026年 – 現在",
                    description: "オープンソースや地理空間情報に関する教育を担当"
                },
                {
                    name: "一般社団法人 OpenStreetMap Foundation Japan (OSMFJ)",
                    role: "代表理事 (Executive Director)",
                    period: "2010年 – 現在",
                    description: "日本のOpenStreetMapコミュニティを代表する非営利法人"
                },
                {
                    name: "OmegaT プロジェクト",
                    role: "プロジェクトリード・コアコントリビューター",
                    period: "2016年 – 現在 (リード: 2023年 – 現在)",
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
                    name: "aqtinstall",
                    role: "作者・メンテナー",
                    description: "マルチプラットフォーム対応の非公式 Qt CLI インストーラー。CI環境等での利用に最適化",
                    url: "https://github.com/miurahr/aqtinstall"
                },
                {
                    name: "pykakasi",
                    role: "作者・メンテナー",
                    description: "日本語（漢字・かな）をローマ字に変換するPython NLPライブラリ",
                    url: "https://github.com/miurahr/pykakasi"
                },
                {
                    name: "py7zr",
                    role: "作者・メンテナー",
                    description: "Python製7zipアーカイブ実装。LZMA2・ZStd・PPMd等の圧縮アルゴリズムに対応",
                    url: "https://github.com/miurahr/py7zr"
                },
                {
                    name: "omegat-textra-plugin",
                    role: "作者・メンテナー",
                    description: "OmegaT向けNICT TexTra機械翻訳APIプラグイン",
                    url: "https://github.com/miurahr/omegat-textra-plugin"
                },
                {
                    name: "gradle-omegat-plugin",
                    role: "作者・メンテナー",
                    description: "OmegaT翻訳メモリをGradleビルドに統合するプラグイン",
                    url: "https://codeberg.org/miurahr/gradle-omegat-plugin"
                },
                {
                    name: "unihandecode",
                    role: "作者・メンテナー",
                    description: "Unicode文字をASCIIへ変換する多言語対応ライブラリ",
                    url: "https://github.com/miurahr/unihandecode"
                },
                {
                    name: "pyppmd",
                    role: "作者・メンテナー",
                    description: "PPM（Prediction by Partial Matching）圧縮アルゴリズムのPython実装",
                    url: "https://github.com/miurahr/pyppmd"
                },
                {
                    name: "inflate64",
                    role: "作者・メンテナー",
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
                    title: "情報化月間推進会議 議長賞（情報システム優良賞）（2011年）",
                    description: "震災支援プラットフォーム Sinsai.info プロジェクトの貢献"
                },
                {
                    title: "第12回（平成30年度）日本地図学会特別賞（2018年）",
                    description: "OpenStreetMapを通じた市民参加による地図作りへの貢献（OSMFJとして受賞）"
                },
                {
                    title: "Financial Use Case Working Group 貢献表彰（IOWNグローバルフォーラム、2025年）",
                    description: "MUFGとの共同白書プロジェクトにおけるワーキンググループ調整と白書執筆への貢献"
                }
            ]
        },
        publications: {
            title: "著書・翻訳",
            items: [
                {
                    title: "インフラデザインパターン－安定稼動に導く127の設計方式－",
                    publisher: "技術評論社",
                    year: "2014年",
                    role: "共著者"
                },
                {
                    title: "詳解Linuxカーネル第1版",
                    publisher: "オライリー・ジャパン",
                    year: "2001年",
                    role: "訳者（一部担当）"
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
        visitStore: "オンラインストアはこちら",
        categories: [
            {
                id: "omegat",
                name: "OmegaT関連プロダクト",
                description: "OmegaTの機能を拡張するプラグインや関連ツールを提供します。",
                items: [
                    {
                        name: "OmegaT with Premium DeepL Connector",
                        description: "プロの翻訳者や企業チーム向けに設計された、OmegaT 用のフル機能 DeepL API 統合プラグインです。プロキシ認証、カスタム用語集管理、訳文の丁寧さ（formality）制御などの機能を提供します。注意：本プラグインの利用には DeepL API アカウントが必要です。deepl.com が提供する無料または有料の DeepL API キーは含まれていません。別途 deepl.com での登録が必要です。",
                        variations: [
                            {
                                name: "Windows パッケージ",
                                description: "Windows 11 用 署名済みOmegaT インストーラー、プレミアム DeepL プラグイン、高解像度ディスプレイ対応Javaランタイム、およびセットアップマニュアルのセット。"
                            },
                            {
                                name: "Mac パッケージ",
                                description: "Apple CPU 用に公証済みの OmegaT DMG、プレミアム DeepL プラグイン、高解像度ディスプレイ対応Javaランタイム、およびセットアップマニュアルのセット。"
                            },
                            {
                                name: "プラグインのみ",
                                description: "DeepL プラグインおよびセットアップマニュアル。"
                            }
                        ],
                        pricing: [
                            { name: "早期アクセス版", price: "15 EUR", description: "ベータ版アクセスおよび正式版、先着100名様" },
                            { name: "プロフェッショナル版", price: "25 EUR", description: "正式版" },
                            { name: "プラグインのみ", price: "10 EUR", description: "DeepL プラグインのみベータ版および正式版" }
                        ],
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
                name: "OSM教育・GIS導入支援",
                description: "OpenStreetMapを用いたマッピング技術トレーニング、GIS教育サービスを提供します。青山学院大学でのGIS・オープンデータ教育の経験に基づき、OSSを活用した実践的な地理空間情報ハンドリングの講習を提供します。",
                activitiesLink: "代表の活動紹介はこちら",
                items: [
                    {
                        name: "地理空間情報・OSS活用講習・コンサルティング",
                        description: "GIS（地理情報システム）やオープンデータの利活用、OSSツールの導入に関する教育・支援サービスです。お客様のニーズに合わせたカリキュラムを提案いたします。",
                        variations: [
                            {
                                name: "単発講義・セミナー",
                                description: "特定のテーマ（OSMマッピング、QGIS基礎、オープンデータ活用等）に絞った1回からの講義・実習。"
                            },
                            {
                                name: "教材・テキスト作成",
                                description: "組織内の教育や研修に利用するための、OSS・GIS・オープンデータに関する専門的なテキスト・マニュアルの執筆。"
                            },
                            {
                                name: "フルコース講習",
                                description: "基礎から応用まで体系的に学ぶ、複数回にわたる継続的な教育プログラムの提供。"
                            }
                        ],
                        pricing: [
                            { name: "価格", price: "お見積り", description: "ご要望の内容、期間、規模に応じて個別にご提案いたします。" }
                        ]
                    }
                ]
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