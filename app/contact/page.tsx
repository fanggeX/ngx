// app/contact/page.tsx
export default function ContactPage() {
  return (
    <section className="container px-4 px-lg-5 py-5" id="contact">
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row gx-4 gx-lg-5">
        {/* Form */}
        <div className="col-md-6 mb-4">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input id="name" className="form-control" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input id="email" type="email" className="form-control" placeholder="you@email.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" className="form-control" rows={5} placeholder="How can we help?" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        {/* Info */}
        <div className="col-md-6">
          <h5>Email</h5>
          <p><a href="mailto:info@ngxconsulting.com">info@ngxconsulting.com</a></p>
          <h5>Phone</h5>
          <p><a href="tel:+1234567890">+123-456-789</a></p>
          <h5>Address</h5>
          <p>9999 Bellaire Blvd<br/>Houston, TX 77036</p>
        </div>
      </div>
    </section>
  )
}
