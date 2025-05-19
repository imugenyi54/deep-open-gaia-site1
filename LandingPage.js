export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">DEEP OPEN GAIA</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 mb-8">
          The Global AI Venture Studio Building the Future of Finance, Logistics, Commerce, Education, and Healthcare.
        </p>
        <a
          href="mailto:contact@deepopengaia.com"
          className="bg-white text-black font-bold px-6 py-3 rounded-full shadow hover:bg-gray-200"
        >
          Partner With Us
        </a>
      </section>

      {/* Portfolio Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-20">
        {[
          { name: "ZUZUPA", desc: "E-commerce meets logistics with smart lockers for Africa and beyond." },
          { name: "ZOAPA", desc: "Fintech for smart living — mobile payments, saving, lending & investing." },
          { name: "TRAXCHAIN", desc: "AI + Blockchain + IoT-powered logistics ecosystem for freight automation." },
          { name: "ROUPAY", desc: "Secure digital payments, escrow, and cross-border transactions made simple." },
          { name: "Edu-Africa AI", desc: "AI-powered learning for African youth and education innovation." },
          { name: "MedAccess Pods", desc: "Micro-clinics and AI-assisted health access pods for underserved regions." },
          { name: "MPrint Labs", desc: "Rapid prototyping and smart hardware built for the next billion." },
        ].map((venture, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-2">{venture.name}</h2>
            <p className="text-gray-400 text-sm">{venture.desc}</p>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 border-t border-gray-700">
        <h2 className="text-3xl font-bold mb-4">Let’s Build the Future, Together.</h2>
        <p className="text-gray-400 mb-6">We’re raising $2M–$5M to launch Africa’s next tech empire. Get in early.</p>
        <form
          className="flex flex-col items-center gap-4 max-w-md mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you for joining. We’ll be in touch!");
          }}
        >
          <input
            type="email"
            placeholder="Your email address"
            required
            className="px-4 py-2 rounded-lg w-full text-black"
          />
          <button
            type="submit"
            className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-300"
          >
            Join the Investor List
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} DEEP OPEN GAIA • All rights reserved • <a href="https://deepopengaia.com" className="underline text-gray-400 hover:text-white">deepopengaia.com</a>
      </footer>
    </div>
  );
}