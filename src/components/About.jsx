import { useLang } from '../i18n/LanguageContext'
import Section from './Section'

export default function About() {
  const { t } = useLang()
  return (
    <Section id="about" title={t('about.title')} tone="surface">
      <div className="max-w-2xl space-y-4 text-lg leading-relaxed">
        <p>{t('about.p1')}</p>
        <p className="text-mute">{t('about.p2')}</p>
      </div>
    </Section>
  )
}
