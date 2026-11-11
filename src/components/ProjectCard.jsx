import { useLang } from '../i18n/LanguageContext'
import LivePreview from './LivePreview'

export default function ProjectCard({ project: p, reverse = false }) {
  const { t, pick } = useLang()
  const host = p.demo.replace(/^https?:\/\//, '').replace(/\/$/, '')

  return (
    <article className={`grid items-start gap-8 lg:gap-12 ${reverse ? 'lg:grid-cols-[1fr_1.35fr]' : 'lg:grid-cols-[1.35fr_1fr]'}`}>
      <div className={reverse ? 'lg:order-2' : ''}>
        <LivePreview project={p} />
      </div>

      <div className="lg:pt-12">
        {/* <span className="inline-flex items-center gap-2 rounded-full border border-front/40 px-3 py-1 text-xs font-semibold text-front">
          <span className="h-1.5 w-1.5 rounded-full bg-front" />
          {t('proj.status')}
        </span> */}
        <h3 className="mt-4 font-display text-3xl font-bold tracking-tight">{p.name}</h3>
        <a href={p.demo} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-sm font-semibold text-mute hover:text-ink">
          {host} ↗
        </a>
        <p className="mt-4 max-w-md leading-relaxed">{pick(p.desc)}</p>

        <p className="mt-5 max-w-md border-l-4 border-front pl-4 text-sm leading-relaxed text-mute">{t('proj.demoNote')}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((tag) => (
            <li key={tag} className="rounded-md border border-line px-2.5 py-1 text-xs font-semibold text-mute">
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href={p.demo} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-ink px-4 py-2.5 text-sm font-semibold text-onink hover:opacity-90">
            {t('proj.open')}
          </a>
          {p.code && (
            <a href={p.code} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-ink px-4 py-2.5 text-sm font-semibold hover:bg-paper">
              {t('proj.code')}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
