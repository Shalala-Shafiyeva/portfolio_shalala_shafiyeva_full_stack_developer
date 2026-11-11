import { useLang } from '../i18n/LanguageContext'
import { SKILLS } from '../data/skills'
import Section from './Section'

const GROUPS = [
  { key: 'front', border: 'border-front' },
  { key: 'state', border: 'border-front' },
  { key: 'back', border: 'border-back' },
  { key: 'tools', border: 'border-ink' },
]

export default function Skills() {
  const { t } = useLang()

  return (
    <Section id="skills" title={t('skills.title')}>
      <div className="space-y-8">
        {GROUPS.map((g) => (
          <div key={g.key} className={`border-l-4 pl-5 ${g.border}`}>
            <h3 className="mb-3 text-sm font-bold">{t(`skills.${g.key}`)}</h3>
            <ul className="flex flex-wrap gap-2">
              {SKILLS[g.key].map((s) => (
                <li key={s} className="rounded-md border border-line bg-surface px-3 py-1.5 text-sm font-semibold">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
