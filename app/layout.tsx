// app/layout.tsx
import 'bootstrap/dist/css/bootstrap.min.css';   // Bootstrap from node_modules
import '../styles/template.css';                 // Your Small Business CSS
import Script from 'next/script';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'NGX Consulting',
  description: 'Data-Driven Logistics & New Energy Consulting',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* Bootstrap JS bundle */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        {/* Your custom template scripts */}
        <Script
          src="/js/scripts.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
