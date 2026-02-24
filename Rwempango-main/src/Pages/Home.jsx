import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Real Estate Solutions",
    text: "Explore land sales, property management & real estate investments.",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1500&q=80",
    link: "/realestate",
  },
  {
    id: 2,
    title: "Financial Services",
    text: "Loans, credit, insurance & advisory tailored for businesses and individuals.",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?auto=format&fit=crop&w=1500&q=80",
    link: "/finance",
  },
  {
    id: 3,
    title: "Agriculture & Farming",
    text: "Trading crops, livestock & empowering farmers with fair market access.",
    image:
      "https://images.unsplash.com/photo-1608889177118-bd5d63b10a75?auto=format&fit=crop&w=1500&q=80",
    link: "/agriculture",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-sans text-gray-800 overflow-x-hidden">
      {/* Hero Slideshow */}
      <section className="relative h-screen w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 bg-opacity-60 flex items-center justify-center">
              <div className="text-center text-white px-6 max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {slides[current].title}
                </h1>
                <p className="text-xl mb-6">{slides[current].text}</p>
                <a
                  href={slides[current].link}
                  className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-full text-lg font-semibold transition"
                >
                  Learn More
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="absolute bottom-6 w-full flex justify-center space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === current ? "bg-yellow-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* --- Services Sections --- */}
      {/* Real Estate Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1598228723793-52759ff1cfbb?auto=format&fit=crop&w=1500&q=80"
          alt="Real Estate"
          className="rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4 text-yellow-600">
            Real Estate Services
          </h2>
          <p className="mb-4 text-gray-700">
            We help individuals and businesses invest, buy, sell, and manage
            properties with ease. Our expertise ensures secure ownership,
            flexible plans, and professional guidance.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Residential, commercial, and industrial property sales</li>
            <li>Leasing and rental management</li>
            <li>Property development and investment consulting</li>
            <li>Legal documentation and valuation support</li>
          </ul>
        </div>
      </section>

      {/* Financial Services Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-yellow-600">
            Financial Services
          </h2>
          <p className="mb-4 text-gray-700">
            We provide reliable financial solutions for individuals, SMEs, and
            corporate clients. Our services ensure access to capital, wealth
            management, and risk mitigation.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Loans & credit (personal, business, mortgage)</li>
            <li>Wealth management & portfolio advisory</li>
            <li>Insurance solutions (property, casualty, vehicle)</li>
            <li>Corporate advisory: mergers, acquisitions, restructuring</li>
          </ul>
        </div>
        <img
          src="https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?auto=format&fit=crop&w=1500&q=80"
          alt="Finance"
          className="rounded-lg shadow-lg"
        />
      </section>

      {/* Agriculture Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1608889177118-bd5d63b10a75?auto=format&fit=crop&w=1500&q=80"
          alt="Agriculture"
          className="rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4 text-yellow-600">
            Agriculture & Farming
          </h2>
          <p className="mb-4 text-gray-700">
            Supporting Uganda's agriculture by trading high-quality crops and
            livestock. We connect farmers to markets and offer products like
            coffee, tea, bananas, goats, poultry, and sugarcane.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Goat, chicken, and livestock farming products</li>
            <li>Coffee, tea, banana, and sugarcane plantations</li>
            <li>Market access and agri-business consulting</li>
            <li>Farmer training and empowerment programs</li>
          </ul>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-yellow-50 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          Rwempango Group is a diversified company transforming lives across
          Uganda through strategic investments in Real Estate, Finance, and
          Agriculture. We provide sustainable solutions, innovative practices,
          and trusted services for individuals, SMEs, and communities.
        </p>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16 px-6 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Partner With Us?
        </h2>
        <p className="mb-6">
          Get in touch today and explore how we can help you grow through land,
          funding, or agriculture opportunities.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-full text-lg font-semibold transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default Home;
