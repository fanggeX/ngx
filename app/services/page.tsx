export default function ServicesPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-10">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 border rounded-xl hover:shadow-lg">
          <h2 className="font-semibold text-xl mb-2">Digital Strategy</h2>
          <p className="text-gray-600">We help define business goals and deliver scalable tech solutions.</p>
        </div>
        <div className="p-6 border rounded-xl hover:shadow-lg">
          <h2 className="font-semibold text-xl mb-2">Web Development</h2>
          <p className="text-gray-600">Custom website and app development with modern frameworks.</p>
        </div>
        <div className="p-6 border rounded-xl hover:shadow-lg">
          <h2 className="font-semibold text-xl mb-2">Cloud Integration</h2>
          <p className="text-gray-600">We migrate, optimize, and manage cloud infrastructure.</p>
        </div>
      </div>
    </section>
  );
}