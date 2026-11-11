// Общая обёртка: слева заголовок, справа содержимое
export default function Section({ id, title, tone = 'paper', children }) {
  return (
    <section id={id} className={`border-t border-line ${tone === 'surface' ? 'bg-surface' : ''}`}>
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[1fr_1.6fr]">
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
        <div>{children}</div>
      </div>
    </section>
  )
}
