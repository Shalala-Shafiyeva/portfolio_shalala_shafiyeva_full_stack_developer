/*
  Проекты (только готовые).

  demo  : ссылка на живой сайт, он показывается прямо в портфолио во фрейме
  code  : ссылка на GitHub (пустая строка = кнопка скрыта)
  shots : необязательно. Картинка из public/ для «обложки» до запуска предпросмотра,
          например ['assets/nextcore.png']
  desc  : описание на трёх языках

  Чтобы добавить проект, скопируйте объект ниже и поменяйте поля.
*/
export const PROJECTS = [
  {
    id: 'nextcore',
    name: 'NextCore',
    status: 'live',
    tags: ['React', 'Tailwind', 'TypeScript'],
    // ЗАМЕНИТЕ описание на реальное: что это за проект и что в нём можно попробовать
    desc: {
      en: 'A React web application, published as a frontend demo that runs on static data.',
      ru: 'Веб-приложение на React, опубликованное как фронтенд-демо на статических данных.',
      az: 'React ilə hazırlanmış veb tətbiq, statik verilənlər üzərində işləyən frontend demo kimi yerləşdirilib.',
    },
    demo: 'https://nextcore.az',
    code: '',
    shots: [],
    mobile: true,
  },
  {
    id: 'unifurniture',
    name: 'UniFurniture',
    status: 'live',
    tags: ['React', 'E-commerce', 'Vercel', 'Coders Caravan'],
    desc: {
      en: 'An e-commerce platform for furniture, built during the Coders Caravan bootcamp.',
      ru: 'E-commerce платформа для мебели, созданная в рамках буткемпа Coders Caravan.',
      az: 'Coders Caravan bootcamp çərçivəsində hazırlanmış mebel e-ticarət platforması.',
    },
    demo: 'https://unifurniture-iota.vercel.app/',
    code: 'https://github.com/Shalala-Shafiyeva/UniFurniture',
    shots: [],
    mobile: false,
  },
  {
    id: 'quizlab',
    name: 'QuizLab',
    status: 'live',
    tags: ['React', 'Laravel', 'Tailwind'],
    desc: {
      en: 'An e-commerce platform for furniture, built during the Coders Caravan bootcamp.',
      ru: 'E-commerce платформа для мебели, созданная в рамках буткемпа Coders Caravan.',
      az: 'Coders Caravan bootcamp çərçivəsində hazırlanmış mebel e-ticarət platforması.',
    },
    demo: 'http://quiz.vusal.website/',
    // code: 'https://github.com/Shalala-Shafiyeva/quiz_app',
    shots: [],
    mobile: true,
  },
]
