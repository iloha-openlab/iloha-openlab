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
        description: "代表・三浦広志のオープンソースコミュニティにおける活動や公開コンテンツを紹介します。",
        items: [
            {
                title: "Note (miurahr)",
                url: "https://note.com/miurahr",
                description: "Containerd/nerdctlの日本語マニュアル翻訳や、OmegaTの初心者向けガイドなどを公開しています。",
            },
            {
                title: "GitHub (miurahr)",
                url: "https://github.com/miurahr",
                description: "多くのリポジトリを公開しており、GitHub A+ランクの評価を得ています。",
            },
            {
                title: "HackMD OmegaT Project",
                url: "https://hackmd.io/@omegat",
                description: "OmegaTのドキュメンテーションプロジェクトをリードしています。",
            },
            {
                title: "OmegaT Project",
                url: "https://www.omegat.org/",
                description: "オープンソースの翻訳支援ツールOmegaTのLead Developerを務めています。",
            },
            {
                title: "OpenStreetMap Foundation Japan",
                url: "https://www.osmf.jp/",
                description: "OpenStreetMapの普及を支援する一般社団法人オープンストリートマップ・ファウンデーション・ジャパンの活動に参画しています。",
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