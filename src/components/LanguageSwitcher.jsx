import { useLang } from '../i18n/LanguageContext'
import { SUPPORTED } from '../i18n/translations'

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useLang()

  return (
    <div className="flex rounded-lg border border-line bg-surface p-0.5 text-xs font-bold" role="group" aria-label={t('lang.label')}>
      {SUPPORTED.map((code) => {
        const active = code === lang
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            className={`rounded-md px-2.5 py-1.5 ${active ? 'bg-ink text-onink' : 'text-mute hover:text-ink'}`}
          >
            {code.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}
