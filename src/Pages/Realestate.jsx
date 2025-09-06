import React from "react";

const services = [
  {
    title: "Property Sales & Purchases",
    description: `We assist clients in buying and selling residential, commercial, 
    and industrial properties. From negotiations to transfer of ownership, 
    we ensure secure and transparent transactions.`,
    points: [
      "Residential, commercial & industrial property sales",
      "Secure documentation & title transfers",
      "End-to-end transaction support",
    ],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Property Leasing & Rentals",
    description: `We connect landlords with tenants while ensuring smooth rental 
    processes. Our team drafts rental agreements, manages renewals, and ensures 
    compliance with tenancy laws.`,
    points: [
      "Tenant sourcing for houses, apartments, shops & offices",
      "Rental agreement drafting & renewals",
      "Tenant-landlord liaison",
    ],
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Property Management",
    description: `Our property management services keep your real estate investment 
    profitable and hassle-free. We handle day-to-day operations while you enjoy 
    passive income.`,
    points: [
      "Rent collection & tenant screening",
      "Maintenance & repairs",
      "Dispute resolution",
      "Maximizing occupancy rates",
    ],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Real Estate Investment Consulting",
    description: `We provide expert advisory on where and how to invest in real estate. 
    Our market research, risk assessments, and ROI analysis help clients make informed 
    decisions.`,
    points: [
      "Investment strategy & location advisory",
      "Market research & trends",
      "Risk assessment & ROI analysis",
    ],
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Property Development",
    description: `We also engage in real estate development, creating modern 
    residential estates, commercial malls, and office blocks. We sell or lease 
    completed projects to clients.`,
    points: [
      "Residential estates & apartments",
      "Commercial malls & office blocks",
      "Sales & leasing of completed projects",
    ],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mortgage & Financing Assistance",
    description: `We guide clients through the financing process by partnering with 
    banks and financial institutions, making it easier to acquire property loans.`,
    points: [
      "Home loan & mortgage guidance",
      "Bank/financial institution partnerships",
      "Affordable financing solutions",
    ],
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Land Acquisition & Sales",
    description: `We help clients acquire land for farming, construction, or 
    investment. Our team handles subdivision, titling, and verification processes.`,
    points: [
      "Verified farmland & construction plots",
      "Subdivision & titling",
      "Legal verification & due diligence",
    ],
    image:
      "https://images.unsplash.com/photo-1505842465776-3d90f616310d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Valuation & Appraisal",
    description: `Our valuation experts determine the accurate market value of 
    properties for sales, loans, insurance, and taxation purposes.`,
    points: [
      "Sales & purchase valuation",
      "Loan & insurance appraisals",
      "Taxation-related valuations",
    ],
    image:
      "https://images.unsplash.com/photo-1590502593745-bd89e5bbf8c7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Legal & Documentation Support",
    description: `We ensure all ownership and property documents are authentic 
    and legally binding. From title transfers to land registration, we’ve got you 
    covered.`,
    points: [
      "Ownership verification",
      "Title transfers & land registration",
      "Contracts & legal paperwork",
    ],
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Marketing & Advertising",
    description: `We promote your properties using modern digital and offline 
    channels to maximize exposure and attract buyers/tenants.`,
    points: [
      "Websites & social media campaigns",
      "Signage & property listings",
      "Open houses & property expos",
    ],
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
  },
];

const Realestate = () => {
  return (
    <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto font-sans text-gray-800">
      {/* Page Heading */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-600 mb-4">
          Real Estate Services
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          At Rwempango Real Estate, we provide end-to-end solutions for all your
          property needs—from buying and selling land to property management,
          investments, and financing.
        </p>
      </section>

      {/* Service Sections */}
      <div className="space-y-20">
        {services.map((service, index) => (
          <section
            key={index}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Text Left / Image Right (alternate per section) */}
            <div className={`${index % 2 === 0 ? "order-1" : "order-2"}`}>
              <h2 className="text-2xl font-bold mb-4 text-yellow-600">
                {service.title}
              </h2>
              <p className="mb-4">{service.description}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            <div
              className={`${
                index % 2 === 0 ? "order-2" : "order-1"
              } flex justify-center`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="rounded-lg shadow-lg max-h-80 object-cover"
              />
            </div>
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <section className="mt-24 bg-yellow-50 p-10 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Secure Your Next Property?
        </h2>
        <p className="mb-6 text-gray-700">
          Get in touch with our expert team for personalized real estate
          solutions across Uganda.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-full transition"
        >
          Contact Us Today
        </a>
      </section>
    </div>
  );
};

export default Realestate;
