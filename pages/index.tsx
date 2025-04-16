import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroBanner />
      <section className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Welcome to NGX Consulting Inc</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          We provide expert consulting solutions to help your business thrive and achieve goals.
        </p>
      </section>
      <Footer />
    </div>
  );
}