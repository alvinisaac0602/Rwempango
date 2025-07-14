import React from "react";

const Contact = () => {
  return (
    <div className="pt-24 pb-16 px-6 max-w-5xl mx-auto font-sans text-gray-800">
      {/* Page Heading */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-600 mb-4">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          We’d love to hear from you. Whether you have a question, want to
          invest, or need support — we’re here.
        </p>
      </section>

      {/* Form + Contact Info */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
          <div>
            <label className="block mb-2 font-semibold">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-3 rounded"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 p-3 rounded"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full border border-gray-300 p-3 rounded"
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-full"
          >
            Send Message
          </button>
        </form>

        {/* Company Info */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <p className="mb-4 text-gray-600">
            Our team is available Monday to Saturday to assist you with real
            estate, financial services, or agricultural support.
          </p>

          <div className="space-y-4 text-sm">
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@rwempango.com"
                className="text-yellow-600 hover:underline"
              >
                info@rwempango.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong> +256 700 000 000
            </p>
            <p>
              <strong>Location:</strong> Kampala, Uganda
            </p>
            <p>
              <strong>Working Hours:</strong> Mon–Sat: 8:00am – 6:00pm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
