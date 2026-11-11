import { useMemo, useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { useTypewriter } from '../hooks/useTypewriter'
import { PROFILE } from '../data/profile'
import { SKILLS } from '../data/skills'
import { PROJECTS } from '../data/projects'
import JsonView from './JsonView'

// Ответы «API», собранные из тех же данных, что и остальной сайт
const ENDPOINTS = {
  developer: () => ({
    name: PROFILE.name,
    role: 'Full-stack Developer',
    location: 'Baku, Azerbaijan',
    languages: ['az', 'ru', 'en'],
    open_to_work: true,
  }),
  stack: () => ({
    frontend: [...SKILLS.front, ...SKILLS.state],
    backend: SKILLS.back,
    tools: SKILLS.tools,
  }),
  projects: () =>
    PROJECTS.map((p) => ({
      name: p.name,
      status: p.status === 'wip' ? 'in_progress' : 'completed',
      live: p.demo || null,
    })),
}

export default function ApiConsole() {
  const { t } = useLang()
  const [key, setKey] = useState('developer')

  const text = useMemo(() => '// 200 OK\n' + JSON.stringify(ENDPOINTS[key](), null, 2), [key])
  const shown = useTypewriter(text, true)
  const typing = shown.length < text.length

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-night text-[#E6EBF5] shadow-xl shadow-black/10">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </div>
        <p className="text-xs font-semibold text-white/60">{t('console.title')}</p>
      </div>

      <div className="flex flex-wrap gap-2 border-b border-white/10 px-4 py-3" role="tablist">
        {Object.keys(ENDPOINTS).map((k) => {
          const active = k === key
          return (
            <button
              key={k}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setKey(k)}
              className={`code rounded-md px-2.5 py-1.5 text-xs ${active ? 'bg-white/15 text-white' : 'text-white/60 hover:text-white'}`}
            >
              <span className="tk-kw">GET</span> /{k}
            </button>
          )
        })}
      </div>

      <p className="px-4 pb-2 pt-3 text-xs text-white/50">{t('console.hint')}</p>
      <pre
        className={`code min-h-[19rem] overflow-x-auto px-4 pb-5 pt-1 ${typing ? 'caret' : ''}`}
        tabIndex={0}
        aria-label={text}
      >
        <JsonView text={shown} />
      </pre>
    </div>
  )
}
