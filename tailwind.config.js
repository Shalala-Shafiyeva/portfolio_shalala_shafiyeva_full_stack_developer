// Цвета берутся из CSS-переменных (см. src/index.css), поэтому светлая и тёмная темы
// переключаются одним классом "dark" на <html>.
const c = (name) => `rgb(var(--${name}) / <alpha-value>)`

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: c('paper'),       // фон страницы
        surface: c('surface'),   // фон «карточек» и чередующихся секций
        ink: c('ink'),           // основной текст и главные кнопки
        onink: c('onink'),       // текст на кнопках цвета ink
        line: c('line'),         // границы
        mute: c('mute'),         // второстепенный текст
        front: c('front'),       // акцент фронтенда
        back: c('back'),         // акцент бэкенда
        onaccent: c('onaccent'), // текст на фоне front/back
        night: '#101B34',        // всегда тёмные блоки (консоль, контакты)
      },
      fontFamily: {
        display: ['Unbounded', 'Manrope', 'system-ui', 'sans-serif'],
        sans: ['Manrope', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
