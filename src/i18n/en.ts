import { common } from "./common";

export default {
    company: {
        nameEn: common.nameEn,
        nameJa: common.nameJa,
        tagline: common.tagline,
        mission: "Engineering sustainable Open Source and Open Data ecosystems through professional support and long-term commitment.",
        brandStory: "“ILOHA” is derived from the Japanese concept of イロハ — the fundamentals. We believe that sustainable Open Source and Open Data ecosystems require strong foundations, thoughtful engineering, and long-term commitment. ILOHA OpenLab LLC works at the structural level — not only implementing tools, but strengthening the foundations they depend on.",
        positioning: "ILOHA OpenLab LLC provides professional engineering support for Open Source and Open Data ecosystems. We specialize in translation technology (OmegaT), Geospatial tools(OpenStreetMap), plugin development, and advanced technical training. Based in Japan, collaborating across Europe and APAC.",
        legalForm: "Limited Liability Company",
        headOffice: "Akabane First Hayama Bldg. 4F, 1-7-9, Akabane, Kita-ku, Tokyo, Japan",
        fiscalYear: "January 1 – December 31",
        contact: common.contact,
        linkedin: common.linkedin,
        id: common.id,
        duns: common.duns,
        businessCategory: "Software development and OSS consulting services",
        industrialClassification: "Information and communications / Information services / Software (G391)",
        mainBusiness: "Consulting and implementation support for translation and geospatial systems, Open-source software support, Development of in-house tools and plugins",
        representative: "Hiroshi Miura",
    },
    news: {
        title: "News",
        latestNews: "Latest News",
        backToList: "Back to List",
        readMore: "Read more",
    },
    nav: {
        home: "Home",
        news: "News",
        products: "Products & Services",
        privacy: "Privacy Policy",
        logoPolicy: "Logo Usage Policy",
    },
    products: {
        title: "Products & Services",
        categories: [
            {
                id: "omegat",
                name: "OmegaT Related Products",
                description: "We provide plugins and related tools to extend OmegaT's functionality.",
                items: [
                    {
                        name: "OmegaT DeepL Plugin — Professional Edition",
                        description: "A fully-featured DeepL API integration for OmegaT, providing proxy authentication, custom glossary management, formality control, and more for professional translators and enterprise teams.",
                        url: common.storeUrl
                    }
                ]
            },
            {
                id: "oss",
                name: "OSS Consulting Services",
                description: "Technical consulting, implementation support, and custom development for open-source translation tools and geospatial systems.",
                items: []
            },
            {
                id: "osm",
                name: "OSM Educational Services",
                description: "Mapping technic training with OpenStreetMap, and GIS educational services.",
                items: []
            }
        ]
    },

    business: [
        "Provision of implementation support, maintenance, operational support, and consulting services for translation support software and related systems.",
        "Development of plugins, extensions, and related software for translation and business support tools.",
        "Implementation support, technical support, research, and consulting services related to open-source software.",
        "Collection, processing, analysis, and provision of geospatial information and development of systems utilizing open data such as OpenStreetMap.",
        "Design, development, maintenance, and operational support of software and information systems.",
        "Education, training, and seminars related to information processing, translation technologies, and the utilization of open data.",
        "Information processing services and information provision services.",
        "Any and all businesses incidental or related to the foregoing."
    ]
}