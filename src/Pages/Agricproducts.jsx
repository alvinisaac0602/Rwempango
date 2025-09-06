import React from "react";

const farms = [
  {
    title: "Goat Farm",
    description: `Our goat farm produces high-quality meat and milk products. 
    We practice sustainable rearing methods to ensure healthy livestock.`,
    points: [
      "Goat meat production",
      "Milk & dairy products",
      "Breeding stock available",
    ],
    image:
      "https://images.unsplash.com/photo-1574276048696-4e06a5f6d0d2?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Coffee Farm",
    description: `We cultivate premium Arabica and Robusta coffee, grown 
    under sustainable practices and available for both local and export markets.`,
    points: [
      "Arabica & Robusta varieties",
      "Bulk green beans & roasted coffee",
      "Export quality assurance",
    ],
    image:
      "https://images.unsplash.com/photo-1509043759401-136742328bb3?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Banana Plantation",
    description: `Our banana farms produce Matooke and dessert bananas, 
    supplying homes, schools, and institutions across Uganda.`,
    points: [
      "Matooke (green cooking bananas)",
      "Dessert bananas (ripe for eating)",
      "Bulk and retail supply",
    ],
    image:
      "https://images.unsplash.com/photo-1506802913710-40e2e66339c9?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Tea Farm",
    description: `We grow high-quality tea leaves for processing into 
    black and green tea. Our tea supports both local markets and export.`,
    points: [
      "Green & black tea leaves",
      "Sustainable cultivation practices",
      "Bulk export packaging",
    ],
    image:
      "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Chicken Farm",
    description: `Our poultry farm supplies chicken meat and eggs to 
    individuals, retailers, and institutions at competitive prices.`,
    points: [
      "Fresh poultry meat",
      "Egg production & supply",
      "Animal feed sales",
    ],
    image:
      "https://images.unsplash.com/photo-1600320842049-8d9e4da89338?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Sugarcane Farm",
    description: `Our sugarcane plantations provide raw sugarcane for 
    processing and supply to industries and wholesalers.`,
    points: [
      "Raw sugarcane supply",
      "Partnerships with sugar factories",
      "Bulk contracts available",
    ],
    image:
      "https://images.unsplash.com/photo-1601597111434-1a1a806325a3?auto=format&fit=crop&w=800&q=80",
  },
];

const Agricproducts = () => {
  return (
    <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto font-sans text-gray-800">
      {/* Page Heading */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-600 mb-4">
          Agriculture Products & Services
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Supporting Uganda’s food systems with sustainable farming, quality
          produce, and opportunities for trade & investment.
        </p>
      </section>

      {/* Farm Sections */}
      <div className="space-y-20">
        {farms.map((farm, index) => (
          <section
            key={index}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Alternate text/image layout */}
            <div className={`${index % 2 === 0 ? "order-1" : "order-2"}`}>
              <h2 className="text-2xl font-bold mb-4 text-yellow-600">
                {farm.title}
              </h2>
              <p className="mb-4">{farm.description}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {farm.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-block mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-full transition"
              >
                Buy from {farm.title}
              </a>
            </div>
            <div
              className={`${
                index % 2 === 0 ? "order-2" : "order-1"
              } flex justify-center`}
            >
              <img
                src={farm.image}
                alt={farm.title}
                className="rounded-lg shadow-lg max-h-80 object-cover"
              />
            </div>
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <section className="mt-24 bg-yellow-50 p-10 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-4">
          Partner With Us in Agriculture
        </h2>
        <p className="mb-6 text-gray-700">
          From livestock to plantations, we provide quality products and farming
          opportunities that feed communities and grow businesses.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-full transition"
        >
          Contact Our Agri-Team
        </a>
      </section>
    </div>
  );
};

export default Agricproducts;
