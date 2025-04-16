import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      <Header />
      <main className="p-8 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">About NGX Consulting Inc</h1>
        <p>
          NGX Consulting Inc is a Houston-based firm delivering strategic staffing and consulting services
          across multiple industries. Our experienced team ensures client success by offering tailored solutions.
        </p>
      </main>
      <Footer />
    </div>
  );
}