import { Fragment } from 'react'

const TOKEN = /("(?:[^"\\]|\\.)*"?)(\s*:)?|\b(true|false|null)\b|(-?\d+(?:\.\d+)?)/g

function highlightLine(line) {
  const out = []
  let last = 0
  let k = 0
  let m
  TOKEN.lastIndex = 0
  while ((m = TOKEN.exec(line)) !== null) {
    if (m.index > last) out.push(line.slice(last, m.index))
    if (m[1]) {
      out.push(<span key={k++} className={m[2] ? 'tk-key' : 'tk-str'}>{m[1]}</span>)
      if (m[2]) out.push(m[2])
    } else if (m[3]) {
      out.push(<span key={k++} className="tk-kw">{m[3]}</span>)
    } else {
      out.push(<span key={k++} className="tk-num">{m[4]}</span>)
    }
    last = TOKEN.lastIndex
  }
  if (last < line.length) out.push(line.slice(last))
  return out
}

// Подсветка JSON без dangerouslySetInnerHTML. Строки, начинающиеся с //, считаются комментарием.
export default function JsonView({ text }) {
  const lines = text.split('\n')
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {line.trimStart().startsWith('//') ? <span className="tk-com">{line}</span> : highlightLine(line)}
          {i < lines.length - 1 ? '\n' : null}
        </Fragment>
      ))}
    </>
  )
}
