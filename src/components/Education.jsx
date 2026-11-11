import { useLang } from '../i18n/LanguageContext'
import { EDUCATION } from '../data/education'
import Section from './Section'
import Languages from './Languages'

export default function Education() {
  const { t, pick } = useLang()

  return (
    <Section id="education" title={t('edu.title')} tone="surface">
      <div className="space-y-10">
        <ul className="space-y-6">
          {EDUCATION.map((e) => (
            <li key={e.dates}>
              <p className="text-sm font-semibold text-mute">{e.dates}</p>
              <h3 className="mt-1 text-lg font-bold">{pick(e.org)}</h3>
              <p className="font-semibold text-front">{pick(e.title)}</p>
              {e.note && <p className="mt-2 max-w-xl leading-relaxed text-mute">{pick(e.note)}</p>}
            </li>
          ))}
        </ul>
        <Languages />
      </div>
    </Section>
  )
}
