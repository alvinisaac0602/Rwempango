import React from "react";

const Agricproducts = () => {
  return (
    <div className="pt-24 pb-16 px-6 max-w-6xl mx-auto font-sans text-gray-800">
      {/* Page Heading */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-600 mb-4">
          Agriculture Products & Services
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Supporting Uganda’s food systems through quality agricultural products
          and trade.
        </p>
      </section>

      {/* Overview Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1608889177118-bd5d63b10a75"
          alt="Agriculture"
          className="rounded-lg shadow-lg"
        />

        {/* Text Content */}
        <div>
          <h2 className="text-2xl font-bold mb-4">From Farm to Market</h2>
          <p className="mb-4">
            Rwempango is actively involved in the sourcing, packaging, and
            distribution of high-quality agricultural products. We connect
            farmers to markets, ensuring fair trade, sustainable practices, and
            reliable supply chains.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Fresh produce supply (fruits, vegetables, grains)</li>
            <li>Agribusiness consulting and market access</li>
            <li>Bulk buying and contract farming opportunities</li>
            <li>Farmer training and empowerment programs</li>
          </ul>
        </div>
      </section>

      {/* Products Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Our Key Products
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Maize & Beans</h3>
            <p>
              Staple grains sourced from trusted farmers and delivered in bulk
              or retail.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Fruits & Vegetables</h3>
            <p>
              Seasonal fruits and vegetables grown organically and distributed
              fresh.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Livestock Products</h3>
            <p>
              Eggs, poultry, and animal feeds supplied to both individuals and
              institutions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-yellow-50 p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">
          Partner With Us in Agriculture
        </h2>
        <p className="mb-6">
          Whether you're a farmer, wholesaler, or retailer — we have solutions
          to help you grow.
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-full"
        >
          Contact Our Agri-Team
        </a>
      </section>
    </div>
  );
};

export default Agricproducts;
