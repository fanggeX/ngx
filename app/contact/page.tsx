// app/contact/page.tsx
export default function ContactPage() {
  return (
    <section className="container px-4 px-lg-5 py-5" id="contact">
      <h2 className="text-center mb-4">Contact Us</h2>
      <p className="text-center mb-4">
        Have questions or need a tailored solution? Fill out the form below or reach out directly via email or phone.
      </p>
      <div className="row gx-4 gx-lg-5">
        {/* Contact Form */}
        <div className="col-md-6 mb-4">
          <form className="needs-validation" noValidate>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="name@example.com"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                className="form-control"
                placeholder="Subject"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                className="form-control"
                rows={5}
                placeholder="How can we assist you?"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
        {/* Contact Details and Map */}
        <div className="col-md-6">
          <div className="mb-4">
            <h5>Email</h5>
            <p>
              <a href="mailto:info@ngxconsulting.com">
                info@ngxconsulting.com
              </a>
            </p>
          </div>
          <div className="mb-4">
            <h5>Phone</h5>
            <p>
              <a href="tel:+1234567890">
                +1 (234) 567-890
              </a>
            </p>
          </div>
          <div className="mb-4">
            <h5>Address</h5>
            <p>
              9999 Bellaire Blvd<br />
              Houston, TX 77036
            </p>
          </div>
          <div className="mt-4">
            <iframe
                src="https://maps.google.com/maps?q=9999%20Bellaire%20Blvd%20Houston%2C%20TX%2077036&z=15&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
