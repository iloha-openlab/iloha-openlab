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
        corporateNumberUrl: `https://www.houjin-bangou.nta.go.jp/en/henkorireki-johoto.html?selHouzinNo=${common.id}`,
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
        message: "Message",
        products: "Products & Services",
        activities: "Activities",
        privacy: "Privacy Policy",
        logoPolicy: "Logo Usage Policy",
    },
    activities: {
        title: "Representative's Activities",
        lead: "This page introduces the personal open-source and open-data activities of Hiroshi Miura, Representative of ILOHA OpenLab LLC. ILOHA OpenLab was founded on the foundation of this long-term community involvement and technical expertise.",
        profile: {
            title: "Profile Overview",
            name: "Hiroshi Miura",
            position: "Representative, ILOHA OpenLab LLC",
            communityPosition: "Executive Director, OpenStreetMap Foundation Japan",
            specialties: "OSS Ecosystem Support, Translation Tools, Geospatial Information Systems, Python Library Development",
            links: [
                { name: "Codeberg", url: "https://codeberg.org/miurahr" },
                { name: "GitHub", url: "https://github.com/miurahr" },
                { name: "LinkedIn", url: "https://www.linkedin.com/in/miurahr/" },
                { name: "Mastodon (OSM Town)", url: "https://en.osm.town/@miurahr" },
                { name: "Liberapay", url: "https://liberapay.com/miurahr" }
            ]
        },
        communities: {
            title: "Community Roles",
            items: [
                {
                    name: "OpenStreetMap Foundation Japan (OSMFJ)",
                    role: "Executive Director",
                    description: "A non-profit organization representing the OpenStreetMap community in Japan."
                },
                {
                    name: "OmegaT Project",
                    role: "Project Lead & Core Contributor",
                    description: "Free software CAT (Computer-Aided Translation) tool under the GNU GPL license."
                },
                {
                    name: "WeeklyOSM",
                    role: "Editor/Translator (English/Japanese)",
                    description: "International weekly news outlet reporting on the OpenStreetMap community."
                }
            ]
        },
        projects: {
            title: "Original & Maintained OSS Projects",
            items: [
                {
                    name: "pykakasi",
                    role: "Author & Maintainer",
                    description: "Python NLP library for converting Japanese text (Kanji/Kana) to Romaji.",
                    url: "https://codeberg.org/miurahr/pykakasi"
                },
                {
                    name: "py7zr",
                    role: "Author & Maintainer",
                    description: "Python implementation of 7zip archive. Supports LZMA2, ZStd, PPMd, etc.",
                    url: "https://github.com/miurahr/py7zr"
                },
                {
                    name: "omegat-textra-plugin",
                    role: "Author",
                    description: "NICT TexTra machine translation API plugin for OmegaT.",
                    url: "https://github.com/miurahr/omegat-textra-plugin"
                },
                {
                    name: "gradle-omegat-plugin",
                    role: "Author",
                    description: "Plugin to integrate OmegaT translation memory into Gradle builds.",
                    url: "https://codeberg.org/miurahr/gradle-omegat-plugin"
                },
                {
                    name: "unihandecode",
                    role: "Maintainer",
                    description: "Multilingual library to decode Unicode characters to ASCII.",
                    url: "https://codeberg.org/miurahr/unihandecode"
                },
                {
                    name: "pyppmd",
                    role: "Author",
                    description: "Python implementation of PPM (Prediction by Partial Matching) compression algorithm.",
                    url: "https://github.com/miurahr/pyppmd"
                },
                {
                    name: "inflate64",
                    role: "Author",
                    description: "Python implementation of Enhanced Deflate (Deflate64) algorithm.",
                    url: "https://github.com/miurahr/inflate64"
                }
            ]
        },
        contributions: {
            title: "Contribution Highlights",
            text: "Contributed to hundreds of open-source projects, including the Linux kernel, OmegaT, GDAL, OpenStreetMap editors (JOSM and others), and LibreOffice."
        },
        awards: {
            title: "Awards & Recognitions",
            items: [
                {
                    title: "ICT Promotion Month Committee Chairman's Award (2011)",
                    description: "For contributions to the earthquake disaster support platform Sinsai.info project."
                },
                {
                    title: "Financial Use Case Working Group Leadership Award",
                    description: "For contributions to working group coordination and white paper authorship in the joint white paper project with MUFG."
                }
            ]
        },
        legacyItems: {
            title: "Other Activities & External Links",
            items: [
                {
                    title: "Note (miurahr)",
                    url: "https://note.com/miurahr",
                    description: "Publishes Japanese translations of Containerd/nerdctl manuals and OmegaT beginner's guides.",
                },
                {
                    title: "HackMD OmegaT Project",
                    url: "https://hackmd.io/@omegat",
                    description: "Leading the OmegaT documentation project.",
                },
                {
                    title: "ResearchGate (Hiroshi Miura)",
                    url: "https://www.researchgate.net/profile/Hiroshi-Miura-2",
                    description: "ResearchGate profile page showcasing research achievements and publications.",
                },
                {
                    title: "SlideShare (miurahr)",
                    url: "https://www.slideshare.net/miurahr",
                    description: "Presentation materials from various conferences and meetups.",
                }
            ]
        }
    },
    message: {
        title: "A Message from the Representative",
        paragraphs: [
            "Thank you for visiting the website of ILOHA OpenLab LLC. I'm Hiroshi Miura, the representative of the company.",
            "The name \"ILOHA\" comes from the Japanese word iroha — meaning the fundamentals, the very beginning of things. We chose this name because it captures the essence of what we do.",
            "Open Source Software and Open Data have become critical infrastructure for modern society. Yet their sustainability depends not just on visible features or convenience, but on whether the underlying technologies, communities, and structures are carefully and consistently nurtured.",
            "Throughout my career as a member of the OSS community — contributing to development, localization, and education — I came to deeply appreciate the importance of foundational work, and the need for someone to take that work seriously over the long term. ILOHA OpenLab was founded with exactly that in mind.",
            "We won't chase the flashy or the fleeting. Instead, we commit to working steadily, deeply, and with integrity — supporting the foundations of open ecosystems for the long haul. We hope you'll join us on that journey."
        ],
        representative: "Hiroshi Miura, Representative, ILOHA OpenLab LLC",
        linkedin: "LinkedIn Profile"
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