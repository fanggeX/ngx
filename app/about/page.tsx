// app/about/page.tsx
import Image from 'next/image'
import React from 'react'

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <div className="position-relative mb-5" style={{ height: '50vh' }}>
        <Image
          src="/assets/ngx.jpg" // replace with your hero image
          alt="About NGX Consulting"
          fill
          style={{ objectFit: 'cover', filter: 'brightness(0.6)' }}
          priority
        />
        <div className="position-absolute top-50 start-50 translate-middle text-center text-white px-3">
          <h1 className="display-4 fw-bold">About NGX Consulting</h1>
          <p className="lead">
            Empowering supply chains with data-driven insights and driving the clean energy revolution.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="container px-4 px-lg-5 py-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <Image
              src="/assets/log.png" // replace with mission image
              alt="Our Mission"
              width={600}
              height={400}
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="col-md-6">
            <h2 className="mb-3">Our Mission</h2>
            <p>
              At NGX Consulting, we combine advanced analytics with industry expertise to streamline global logistics operations and formulate sustainable energy strategies that propel businesses forward.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">Our Core Values</h2>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <h4>Innovation</h4>
              <p>We embrace cutting-edge technologies to deliver tailored, forward-thinking solutions.</p>
            </div>
            <div className="col-lg-4 mb-4">
              <h4>Integrity</h4>
              <p>Transparency and accountability guide every recommendation we make.</p>
            </div>
            <div className="col-lg-4 mb-4">
              <h4>Sustainability</h4>
              <p>Balancing economic performance with environmental stewardship is at our core.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
