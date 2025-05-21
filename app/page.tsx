import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-lg-7">
            <img
              src="/assets/energy.jpg"
              alt="Logistics & Energy"
              className="img-fluid rounded mb-4 mb-lg-0"
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">
              Optimizing Supply Chains & Powering Clean Energy
            </h1>
            <p>
              At NGX Consulting, we blend deep logistics know-how with renewable
              energy strategy to drive efficiency, cut costs, and advance your
              sustainability goals.
            </p>
            <a className="btn btn-primary" href="/contact">
              Start Your Complimentary Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action Card */}
      <div className="card text-white bg-secondary my-5 py-4 text-center">
        <div className="card-body">
          <p className="text-white m-0">
            Schedule your complimentary strategy session and unlock both
            operational efficiency and energy innovation!
          </p>
        </div>
      </div>

      {/* Services */}
      <section id="services" className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5">
          {[
            {
              title: 'Freight & Unloading Optimization',
              text:
                'Leverage data-driven processes to streamline freight handling, reduce turnaround times, and gain full visibility across your network.',
            },
            {
              title: 'Inventory Analytics & Control',
              text:
                'Implement real-time dashboards and advanced analytics to improve stock accuracy, minimize shrinkage, and accelerate inventory turnover.',
            },
            {
              title: 'Renewable Energy Strategy',
              text:
                'Develop a bespoke roadmap for solar, wind, or hybrid projects that maximizes ROI and aligns with your sustainability targets.',
            },
          ].map((svc) => (
            <div className="col-md-4 mb-5" key={svc.title}>
              <div className="card h-100">
                <div className="card-body">
                  <h2 className="card-title">{svc.title}</h2>
                  <p className="card-text">{svc.text}</p>
                </div>
                <div className="card-footer">
                  <a className="btn btn-primary btn-sm" href="/contact">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-5 bg-dark">
        <div className="container px-4 px-lg-5">
          <p className="m-0 text-center text-white">
            © {new Date().getFullYear()} NGX Consulting. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
