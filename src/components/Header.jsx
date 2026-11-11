import { useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'

const LINKS = ['about', 'experience', 'projects', 'skills', 'contact']

export default function Header() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3 md:px-8">
        <a href="#top" className="font-display text-sm font-bold tracking-tight" aria-label="Shalala Shafiyeva">
          SS
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-mute md:flex" aria-label="Main">
          {LINKS.map((id) => (
            <a key={id} href={`#${id}`} className="hover:text-ink">
              {t(`nav.${id}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={t('nav.menu')}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface md:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="flex flex-col border-t border-line px-5 py-2 md:hidden" aria-label="Mobile">
          {LINKS.map((id) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="py-2.5 text-sm font-semibold text-mute hover:text-ink">
              {t(`nav.${id}`)}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
