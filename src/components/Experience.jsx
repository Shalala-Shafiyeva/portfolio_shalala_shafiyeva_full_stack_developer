import { useLang } from '../i18n/LanguageContext'
import { EXPERIENCE } from '../data/experience'
import Section from './Section'

export default function Experience() {
  const { t, lang, pick } = useLang()

  return (
    <Section id="experience" title={t('exp.title')}>
      <ol className="relative ml-1 border-l border-line">
        {EXPERIENCE.map((e) => (
          <li key={e.org + e.from} className="relative pb-10 pl-7 last:pb-0">
            <span
              className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full ${e.to ? 'bg-ink' : 'bg-front'}`}
              aria-hidden="true"
            />
            <p className="text-sm font-semibold text-mute">
              {e.from} – {e.to || t('exp.present')}
            </p>
            <h3 className="mt-1 text-xl font-bold">{e.org}</h3>
            <p className="font-semibold text-front">{pick(e.role)}</p>
            <ul className="mt-3 max-w-xl list-disc space-y-1.5 pl-5 leading-relaxed text-mute marker:text-line">
              {(e.bullets[lang] ?? e.bullets.en).map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
