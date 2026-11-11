import { useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { PROFILE } from '../data/profile'
import { asset } from '../utils/asset'
import ApiConsole from './ApiConsole'

export default function Hero() {
  const { t } = useLang()
  const [photoOk, setPhotoOk] = useState(false)

  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-12 md:px-8 md:pb-24 md:pt-20 lg:grid-cols-[1.05fr_1fr]">
      <div>
        <div className="mb-6 flex items-center gap-4">
          <div className={`h-16 w-16 shrink-0 overflow-hidden rounded-full border border-line bg-surface ${photoOk ? '' : 'hidden'}`}>
            <img
              src={asset(PROFILE.photo)}
              alt=""
              onLoad={() => setPhotoOk(true)}
              onError={() => setPhotoOk(false)}
              className="h-full w-full object-cover"
            />
          </div>
          {/* <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-semibold text-mute">
            <span className="h-2 w-2 rounded-full bg-front" />
            {t('hero.status')}
          </p> */}
        </div>

        <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]">
          Shalala
          <br />
          Shafiyeva
        </h1>
        <p className="mt-4 font-display text-base font-medium text-mute sm:text-lg">{t('hero.role')}</p>
        <p className="mt-6 max-w-xl text-lg leading-relaxed">{t('hero.tagline')}</p>
        <p className="mt-3 max-w-xl leading-relaxed text-mute">{t('hero.sub')}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-onink hover:opacity-90">
            {t('hero.cta1')}
          </a>
          <a href="#contact" className="rounded-lg border border-ink px-5 py-3 text-sm font-semibold hover:bg-surface">
            {t('hero.cta2')}
          </a>
        </div>
      </div>

      <ApiConsole />
    </section>
  )
}
