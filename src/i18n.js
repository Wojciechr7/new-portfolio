import i18n from "i18next";
//import LanguageDetector from "i18next-browser-languagedetector";

i18n.init({
    // we init with resources
    resources: {
        en: {
            translations: {
                "About me": "About me",
                "About me hello": "Hello, my name is Robert, ",
                "About me description": "I'm studying informatics at University of Warmia and Mazury in Olsztyn. I'm generally interested in programming and everything similar like microcontrolers.",
                "Familiar technologies": "Familiar technologies",
                "Drop Me A Message": "Drop Me A Message",
                "Name": "Name",
                "Email Address": "Email Address",
                "Write Me A Message": "Write Me A Message",
                "Name is required": "Name is required",
                "Email is required": "Email is required: e@a.z",
                "Message is required": "Message is required"
            }
        },
        pl: {
            translations: {
                "About me": "O mnie",
                "About me hello": "Witam, nazywam się Robert, ",
                "About me description": "Studiuję informatykę na Uniwersytecie Warmińsko-Mazurskim w Olsztynie. Interesuję się programowaniem i pokrewnymi dziedzinami np. mikrokontrolery.",
                "Familiar technologies": "Ulubione technologie",
                "Drop Me A Message": "Napisz Wiadomość",
                "Name": "Imię",
                "Email Address": "Adres Email",
                "Write Me A Message": "Twoja Wiadomość",
                "Name is required": "Pole imię jest wymagane",
                "Email is required": "Pole email jest wymagane: e@a.z",
                "Message is required": "Wpisz wiadomość"
            }
        }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ","
    },

    react: {
        wait: true
    }
});

export default i18n;