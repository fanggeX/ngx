// app/layout.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/template.css';
import Script from 'next/script';
import Link from 'next/link';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'NGX Consulting',
  description: 'Data-Driven Logistics & New Energy Consulting',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Shared Header */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container px-5">
            <Link href="/" className="navbar-brand">NGX Consulting</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link href="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link href="/services" className="nav-link">Services</Link>
                </li>
                <li className="nav-item">
                  <Link href="/about" className="nav-link">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact" className="nav-link">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Page content */}
        {children}

        {/* Bootstrap & template JS */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
        <Script src="/js/scripts.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
