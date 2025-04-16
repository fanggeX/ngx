import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div>
      <Header />
      <main className="p-8 max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" className="w-full p-2 border rounded" required />
          <input type="email" name="email" placeholder="Your Email" className="w-full p-2 border rounded" required />
          <textarea name="message" placeholder="Your Message" className="w-full p-2 border rounded" rows={5} required></textarea>
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Send</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}