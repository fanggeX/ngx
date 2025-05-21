// app/layout.tsx
export const metadata = { title: 'NGX Consulting' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* load your template JS */}
        <script src="/js/scripts.js"></script>
      </body>
    </html>
  )
}
