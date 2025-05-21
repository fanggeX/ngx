import Link from 'next/link'

const services = [
  {
    title: 'Freight & Unloading Optimization',
    desc:
      'Leverage data-driven processes to streamline freight handling, reduce turnaround times, and gain full visibility across your network.',
  },
  {
    title: 'Inventory Analytics & Control',
    desc:
      'Implement real-time dashboards and advanced analytics to improve stock accuracy, minimize shrinkage, and accelerate inventory turnover.',
  },
  {
    title: 'Renewable Energy Strategy',
    desc:
      'Develop a bespoke roadmap for solar, wind, or hybrid projects that maximizes ROI and aligns with your sustainability targets.',
  },
]

export default function ServicesPage() {
  return (
    <section className="container px-4 px-lg-5 py-5" id="services">
      <h2 className="text-center mb-4">Our Services</h2>
      <p className="text-center mb-4">
        Discover how NGX Consulting can transform your operations with our tailored solutions.
      </p>
      <div className="row gx-4 gx-lg-5">
        {services.map(({ title, desc }) => (
          <div className="col-md-4 mb-4" key={title}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{desc}</p>
              </div>
              <div className="card-footer text-center border-0 bg-white">
                <Link href="/contact" className="btn btn-primary">
                  Schedule a Free Consultation
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
