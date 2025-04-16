import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border rounded-xl shadow">Staffing Solutions</div>
          <div className="p-4 border rounded-xl shadow">IT Consulting</div>
          <div className="p-4 border rounded-xl shadow">Project Management</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}