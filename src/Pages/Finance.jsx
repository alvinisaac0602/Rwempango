import React from "react";

const services = [
  {
    title: "Loans & Credit",
    description: `We provide tailored loan and credit solutions to meet both 
    personal and business needs, including mortgages and overdrafts.`,
    points: [
      "Personal & business loans",
      "Mortgage financing",
      "Overdraft facilities",
    ],
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Wealth Management & Portfolio Advisory",
    description: `Our wealth management experts help clients grow and safeguard 
    their investments through professional portfolio strategies.`,
    points: [
      "Investment portfolio management",
      "Retirement planning",
      "Personalized advisory services",
    ],
    image:
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Property & Casualty Insurance",
    description: `Protect your assets with our reliable insurance services for 
    homes, vehicles, and businesses.`,
    points: [
      "Car insurance",
      "Home & property insurance",
      "Business risk coverage",
    ],
    image:
      "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Risk Management Solutions",
    description: `We identify, assess, and provide strategies to minimize 
    financial risks for individuals and businesses.`,
    points: [
      "Enterprise risk assessment",
      "Mitigation strategies",
      "Compliance risk advisory",
    ],
    image:
      "https://images.unsplash.com/photo-1581093588401-22f6361f0940?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Business Loans",
    description: `We empower businesses with the capital they need to grow, 
    expand, and trade effectively.`,
    points: [
      "SME financing",
      "Trade finance",
      "Expansion & working capital loans",
    ],
    image:
      "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Consumer Credit",
    description: `Our consumer credit products make life more affordable and 
    convenient.`,
    points: [
      "Credit cards",
      "Hire purchase agreements",
      "Flexible repayment terms",
    ],
    image:
      "https://images.unsplash.com/photo-1620051984091-1e67f94a515a?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Asset Financing",
    description: `We finance vehicles, machinery, and other equipment so clients 
    can acquire assets without upfront strain.`,
    points: [
      "Vehicle financing",
      "Agricultural & industrial machinery",
      "Affordable asset loan plans",
    ],
    image:
      "https://images.unsplash.com/photo-1598352604219-98d3ff4d448d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Leasing Services",
    description: `We provide flexible leasing options for vehicles, equipment, 
    and business assets.`,
    points: [
      "Operational leasing",
      "Financial leasing",
      "Corporate leasing solutions",
    ],
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Financial Planning & Budgeting",
    description: `Our advisory team helps individuals and businesses manage 
    finances wisely with sustainable plans.`,
    points: [
      "Personal & business budgeting",
      "Debt management",
      "Savings strategies",
    ],
    image:
      "https://images.unsplash.com/photo-1556742526-795a8eac09d0?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Tax Planning & Compliance",
    description: `We ensure businesses and individuals comply with tax laws 
    while optimizing savings.`,
    points: [
      "Corporate tax advisory",
      "Filing & compliance services",
      "Tax-efficient planning",
    ],
    image:
      "https://images.unsplash.com/photo-1581091012184-5c7b6c7a8123?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mergers & Acquisitions Advisory",
    description: `Our experts guide companies through mergers, acquisitions, 
    and strategic partnerships.`,
    points: [
      "Due diligence & valuations",
      "Negotiation support",
      "Integration planning",
    ],
    image:
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Corporate Restructuring",
    description: `We support organizations in restructuring to improve 
    efficiency, profitability, and sustainability.`,
    points: [
      "Debt restructuring",
      "Organizational re-engineering",
      "Turnaround strategies",
    ],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
];

const Finance = () => {
  return (
    <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto font-sans text-gray-800">
      {/* Page Heading */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-600 mb-4">
          Financial Services
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Rwempango Finance provides a full range of financial solutions—from
          loans and credit facilities to wealth management, tax planning, and
          corporate advisory.
        </p>
      </section>

      {/* Service Sections */}
      <div className="space-y-20">
        {services.map((service, index) => (
          <section
            key={index}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Alternate text/image layout */}
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
          Secure Your Financial Future
        </h2>
        <p className="mb-6 text-gray-700">
          Whether you need a loan, investment advisory, or corporate
          restructuring, Rwempango Finance is here to guide you.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-full transition"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
};

export default Finance;
