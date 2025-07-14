import React from "react";

const Finance = () => {
  return (
    <div className="pt-24 pb-16 px-6 max-w-6xl mx-auto font-sans text-gray-800">
      {/* Page Heading */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-600 mb-4">
          Financial Services
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Empowering individuals and businesses through flexible and reliable
          financial support.
        </p>
      </section>

      {/* Services Overview */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1605902711622-cfb43c4437d1"
          alt="Finance Services"
          className="rounded-lg shadow-lg"
        />

        {/* Text Content */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Quick & Transparent Money Lending
          </h2>
          <p className="mb-4">
            Rwempango offers short and medium-term loans designed to support
            small businesses, farmers, and individuals in need of urgent
            capital. We aim to remove the barriers that prevent access to
            traditional banking.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>No collateral required for small loans</li>
            <li>Fast approval — within 24 hours</li>
            <li>Flexible repayment periods</li>
            <li>Transparent terms & no hidden charges</li>
          </ul>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Why Choose Rwempango Finance?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Fast Access</h3>
            <p>
              Loans approved and disbursed quickly to address your urgent needs.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Flexible Terms</h3>
            <p>
              Custom loan plans designed to match your income and repayment
              ability.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Trusted Partner</h3>
            <p>
              Serving communities with integrity, fairness, and financial
              inclusion at heart.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-yellow-50 p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Need a Loan Today?</h2>
        <p className="mb-6">
          Talk to our team to find the best loan option for your needs.
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-full"
        >
          Apply Now
        </a>
      </section>
    </div>
  );
};

export default Finance;
