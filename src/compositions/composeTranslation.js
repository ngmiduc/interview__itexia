import i18next from "i18next"

import LanguageDetector from "i18next-browser-languagedetector"

i18next.use(LanguageDetector).init({
  lng: "en",
  debug: true,
  resources: {
    en: {
      translation: {
        key: "hello world"
      }
    }
  }
})

const composeTranslation = () => {
  return {
    t: i18next.t,
    language: i18next.language,
    changeLanguage: i18next.changeLanguage
  }
}

export default composeTranslation
