import { useLang } from '../i18n/LanguageContext'
import { PROJECTS } from '../data/projects'
import { PROFILE } from '../data/profile'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const { t } = useLang()

  return (
    <section id="projects" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="mb-12 max-w-2xl">
          <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">{t('proj.title')}</h2>
          <p className="mt-3 text-mute">{t('proj.sub')}</p>
        </div>

        <div className="space-y-16 md:space-y-20">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} reverse={i % 2 === 1} />
          ))}

          <article className="rounded-2xl border border-dashed border-line bg-paper p-8">
            <h3 className="font-display text-xl font-bold">{t('proj.moreTitle')}</h3>
            <p className="mt-2 max-w-md text-mute">{t('proj.moreText')}</p>
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block rounded-lg bg-ink px-4 py-2.5 text-sm font-semibold text-onink hover:opacity-90">
              {t('proj.moreBtn')}
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
