import React from "react";

const Realestate = () => {
  return (
    <div className="pt-24 pb-16 px-6 max-w-6xl mx-auto font-sans text-gray-800">
      {/* Page Heading */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-600 mb-4">
          Real Estate Services
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          We help you own, manage, and invest in land and properties across
          Uganda.
        </p>
      </section>

      {/* Services Overview */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1598228723793-52759ff1cfbb"
          alt="Real Estate Services"
          className="rounded-lg shadow-lg"
        />

        {/* Text Content */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Your Trusted Partner in Land & Property
          </h2>
          <p className="mb-4">
            Rwempango specializes in helping individuals and businesses buy,
            sell, and manage real estate. Whether you are looking for farmland,
            residential plots, commercial spaces, or need property
            management—our experienced team is ready to guide you.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Verified land for sale in prime locations</li>
            <li>Affordable payment plans and installment options</li>
            <li>Professional property management services</li>
            <li>Consultation on real estate investment opportunities</li>
          </ul>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Why Choose Rwempango Real Estate?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Secure Ownership</h3>
            <p>
              All land and property is thoroughly verified with clear
              documentation.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Affordable Plans</h3>
            <p>
              We offer flexible payment plans that suit your budget and
              timeline.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Expert Advice</h3>
            <p>
              We guide you through every step—from selection to final transfer.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-50 p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">
          Interested in Buying Land or Property?
        </h2>
        <p className="mb-6">
          Reach out to us for personalized support and viewing appointments.
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-full"
        >
          Contact Our Real Estate Team
        </a>
      </section>
    </div>
  );
};

export default Realestate;
