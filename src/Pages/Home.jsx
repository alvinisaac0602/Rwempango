import React from "react";

const Home = () => {
  return (
    <div className="font-sans text-gray-800 overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581092919537-6c50d63f4f82')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Rwempango Group of Companies
            </h1>
            <p className="text-xl mb-6">
              Transforming lives through real estate, finance, and agriculture
            </p>
            <a
              href="#contact"
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-full text-lg font-semibold"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Core Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* Real Estate */}
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <img
              src="https://img.icons8.com/ios/100/real-estate.png"
              className="mx-auto mb-4 max-w-full h-auto"
              alt="Real Estate"
            />
            <h3 className="text-xl font-semibold mb-2">Real Estate</h3>
            <p>
              We deal in land sales, property management, and real estate
              investments tailored for growth.
            </p>
          </div>

          {/* Financial Services */}
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <img
              src="https://img.icons8.com/ios/100/money--v1.png"
              className="mx-auto mb-4 max-w-full h-auto"
              alt="Finance"
            />
            <h3 className="text-xl font-semibold mb-2">Financial Services</h3>
            <p>
              Our money lending services empower individuals and businesses with
              quick, reliable funding.
            </p>
          </div>

          {/* Agriculture */}
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <img
              src="https://img.icons8.com/ios/100/farm.png"
              className="mx-auto mb-4 max-w-full h-auto"
              alt="Agriculture"
            />
            <h3 className="text-xl font-semibold mb-2">Agriculture</h3>
            <p>
              We trade in a variety of agricultural products, supporting food
              security and market access.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-yellow-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
          <p className="text-lg leading-relaxed">
            Rwempango Group is a diversified company focused on empowering lives
            across Uganda through strategic investments in real estate,
            financial services, and agriculture. With integrity and innovation
            at our core, we serve individuals, SMEs, and communities with
            tailored, sustainable solutions.
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gray-900 py-12 px-6 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Partner With Us?
        </h2>
        <p className="mb-6">
          Get in touch today and explore how we can help you grow through land,
          funding, or agri-business opportunities.
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-full text-lg font-semibold"
        >
          Contact Us
        </a>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form className="space-y-6">
          <div>
            <label className="block mb-2 font-semibold">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-3 rounded"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 p-3 rounded"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Message</label>
            <textarea
              className="w-full border border-gray-300 p-3 rounded"
              rows="5"
              placeholder="How can we help?"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-full text-white font-semibold"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
