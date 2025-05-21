// app/services/page.tsx
export default function ServicesPage() {
  const services = [
    {
      title: 'Freight & Unloading Optimization',
      desc:
        'Streamline your material handling with data‐backed process improvements, cutting down wait times and costs.',
    },
    {
      title: 'Inventory Analytics & Control',
      desc:
        'Implement real‐time dashboards and predictive algorithms to maintain ideal stock levels and reduce shrinkage.',
    },
    {
      title: 'Renewable Energy Strategy',
      desc:
        'Craft a tailored roadmap for solar, wind, or hybrid projects that maximize ROI and align with your green objectives.',
    },
  ]

  return (
    <section className="container px-4 px-lg-5 py-5" id="services">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row">
        {services.map((s) => (
          <div className="col-md-4 mb-4" key={s.title}>
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">{s.title}</h3>
                <p className="card-text">{s.desc}</p>
              </div>
              <div className="card-footer text-center">
                <a className="btn btn-outline-primary" href="/contact">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
