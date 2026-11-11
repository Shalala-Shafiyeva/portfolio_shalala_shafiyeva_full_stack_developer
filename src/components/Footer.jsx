import { useLang } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="border-t border-white/10 bg-night text-sm text-white/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 md:px-8">
        <p>© {new Date().getFullYear()} Shalala Shafiyeva</p>
        <a href="#top" className="font-semibold text-white hover:underline">{t('footer.top')}</a>
      </div>
    </footer>
  )
}
