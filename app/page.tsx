// app/page.tsx
import fs from 'fs'
import path from 'path'

// this is a server component, so you can read files
export default function Home() {
  // load your static HTML
  const html = fs.readFileSync(
    path.join(process.cwd(), 'public', 'index.html'),
    'utf8'
  )

  return (
    // dangerously inject the entire template
    <div dangerouslySetInnerHTML={{ __html: html }} />
  )
}
