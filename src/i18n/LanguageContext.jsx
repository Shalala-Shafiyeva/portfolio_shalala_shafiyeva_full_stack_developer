import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { SUPPORTED, translations } from './translations'

const LanguageContext = createContext(null)

// Приоритет: ?lang=az в ссылке, затем сохранённый выбор, затем язык браузера
function detectLang() {
  try {
    const q = new URLSearchParams(window.location.search).get('lang')
    if (SUPPORTED.includes(q)) return q
  } catch { /* ignore */ }
  try {
    const saved = window.localStorage.getItem('lang')
    if (SUPPORTED.includes(saved)) return saved
  } catch { /* ignore */ }
  const nav = (typeof navigator !== 'undefined' && navigator.language ? navigator.language : 'en').slice(0, 2).toLowerCase()
  return SUPPORTED.includes(nav) ? nav : 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectLang)

  const setLang = useCallback((l) => {
    if (SUPPORTED.includes(l)) setLangState(l)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = translations[lang].title
    try { window.localStorage.setItem('lang', lang) } catch { /* ignore */ }
    try {
      const url = new URL(window.location.href)
      url.searchParams.set('lang', lang)
      window.history.replaceState(null, '', url)
    } catch { /* ignore */ }
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      // t('nav.about'): строка интерфейса
      t: (key) => translations[lang][key] ?? translations.en[key] ?? key,
      // pick({ en, ru, az }): выбрать значение для текущего языка
      pick: (obj) => (obj ? obj[lang] ?? obj.en : ''),
    }),
    [lang, setLang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider')
  return ctx
}
