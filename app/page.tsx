import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="relative h-[90vh] bg-cover bg-center flex items-center justify-center text-white text-center" style={{ backgroundImage: 'url(/hero.jpg)' }}>
        <div className="bg-black/50 absolute inset-0"></div>
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl font-bold mb-6">Transforming Ideas into Digital Reality</h1>
          <p className="text-xl mb-8">We partner with forward-thinking companies to build scalable and elegant digital solutions.</p>
          <Link href="/contact" className="inline-block bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">Start a Project</Link>
        </div>
      </section>

      <section className="py-20 px-4 text-center bg-white">
        <h2 className="text-4xl font-bold mb-10">Our Expertise</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <div className="p-6 rounded-xl shadow-lg border hover:shadow-xl">
            <Image src="/icons/strategy.svg" alt="Strategy" width={64} height={64} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Strategy & Consulting</h3>
            <p className="text-gray-600">We define the roadmap to success by combining tech with business goals.</p>
          </div>
          <div className="p-6 rounded-xl shadow-lg border hover:shadow-xl">
            <Image src="/icons/development.svg" alt="Development" width={64} height={64} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Design & Development</h3>
            <p className="text-gray-600">From concept to code, we create user-focused web and mobile applications.</p>
          </div>
          <div className="p-6 rounded-xl shadow-lg border hover:shadow-xl">
            <Image src="/icons/cloud.svg" alt="Cloud" width={64} height={64} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cloud & DevOps</h3>
            <p className="text-gray-600">Scale faster with automated infrastructure and modern cloud architecture.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-blue-50 text-center">
        <h2 className="text-4xl font-bold mb-6">Let’s Build Together</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Whether you're a startup or an enterprise, we help you innovate, accelerate, and grow in the digital era.</p>
        <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Get in Touch
        </Link>
      </section>
    </>); }