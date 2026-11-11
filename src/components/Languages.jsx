import { useLang } from '../i18n/LanguageContext'
import { LANGUAGES } from '../data/education'

export default function Languages() {
  const { t, pick } = useLang()

  return (
    <div>
      <h3 className="mb-3 font-display text-base font-bold">{t('lang.title')}</h3>
      <ul className="flex flex-wrap gap-2">
        {LANGUAGES.map((l) => (
          <li key={l.name.en} className="rounded-md border border-line bg-paper px-3 py-1.5 text-sm">
            <span className="font-semibold">{pick(l.name)}</span> <span className="text-mute">{pick(l.level)}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
