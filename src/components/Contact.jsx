import { useLang } from '../i18n/LanguageContext'
import { PROFILE } from '../data/profile'

export default function Contact() {
  const { t } = useLang()

  const items = [
    { label: PROFILE.email, href: `mailto:${PROFILE.email}`, primary: true },
    { label: PROFILE.phone, href: PROFILE.phoneHref },
    { label: 'GitHub', href: PROFILE.github, external: true },
    PROFILE.linkedin ? { label: 'LinkedIn', href: PROFILE.linkedin, external: true } : null,
  ].filter(Boolean)

  return (
    <section id="contact" className="border-t border-line bg-night text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl">{t('contact.title')}</h2>
        <div className="mt-10 flex flex-wrap gap-3">
          {items.map((i) => (
            <a
              key={i.label}
              href={i.href}
              {...(i.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className={`rounded-lg px-5 py-3 text-sm font-semibold ${i.primary ? 'bg-white text-night hover:bg-white/90' : 'border border-white/40 hover:bg-white/10'}`}
            >
              {i.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
