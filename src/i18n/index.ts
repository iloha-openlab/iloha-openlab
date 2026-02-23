type Lang = "en" | "ja";

import en from "./en";
import ja from "./ja";

const dictionaries = { en, ja };

export function getDictionary(lang: Lang) {
    return dictionaries[lang];
}