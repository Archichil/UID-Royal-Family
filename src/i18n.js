import i18next from "i18next";
import {initReactI18next} from "react-i18next";

import enTranslations from "./translation/en.json";
import ruTranslations from "./translation/ru.json";

i18next
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: "ru",
        defaultNS: "ns1",
        resources: {
            en: {
                ns1: enTranslations,
            },
            ru: {
                ns1: ruTranslations,
            },
        },
    });

export default i18next;