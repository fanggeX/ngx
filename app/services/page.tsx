// app/services/page.tsx
import React from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      icon: '🚚',
      title: 'Freight & Unloading Optimization',
      desc:
        'Leverage data-driven processes to streamline freight handling, reduce turnaround times, and gain full visibility across your network.',
    },
    {
      icon: '📊',
      title: 'Inventory Analytics & Control',
      desc:
        'Implement real-time dashboards and advanced analytics to improve stock accuracy, minimize shrinkage, and accelerate inventory turnover.',
    },
    {
      icon: '🌞',
      title: 'Renewable Energy Strategy',
      desc:
        'Develop a bespoke roadmap for solar, wind, or hybrid projects that maximizes ROI and aligns with your sustainability targets.',
    },
  ];

  return (
    <section className="container px-4 px-lg-5 py-5" id="services">
      <h2 className="text-center mb-5">Our Services</h2>
      <div className="row gx-4 gx-lg-5">
        {services.map((s) => (
          <div className="col-md-4 mb-4" key={s.title}>
            <div className="feature-card">
              <div className="icon">{s.icon}</div>
              <h4 className="mb-3">{s.title}</h4>
              <p>{s.desc}</p>
              <Link href="/contact" className="btn-gradient btn-sm mt-3">
                Book a Free Consultation
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
