export default function ContactPage() {
  return (
    <section className="max-w-xl mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-gray-600 mb-4">Let’s talk about how we can help your business grow.</p>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
        <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-lg" />
        <textarea placeholder="Your Message" rows={4} className="w-full p-3 border rounded-lg" />
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  );
}