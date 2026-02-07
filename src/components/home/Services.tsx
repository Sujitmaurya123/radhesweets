"use client";

import { Truck, Gift, Calendar, Leaf, ShieldCheck } from "lucide-react";

export default function Services() {
  return (
    <section className="bg-gradient-to-b from-amber-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Our <span className="text-red-700">Services</span>
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Freshly prepared sweets, traditional recipes, and reliable delivery —
            crafted to make every occasion special.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <ServiceCard
            icon={<Calendar />}
            title="Fresh Mithai on Order"
            desc="Every sweet is prepared fresh only after you place your order — ensuring unbeatable taste and quality."
          />

          <ServiceCard
            icon={<Truck />}
            title="Fast Home Delivery"
            desc="Hygienically packed and safely delivered to your doorstep within hours across the city."
          />

          <ServiceCard
            icon={<Leaf />}
            title="Pure & Premium Ingredients"
            desc="Made using pure desi ghee, premium dry fruits, and no preservatives."
          />

          <ServiceCard
            icon={<Gift />}
            title="Festival & Gift Orders"
            desc="Beautifully packed sweet boxes for festivals, weddings, and special celebrations."
          />

          <ServiceCard
            icon={<ShieldCheck />}
            title="Hygienic Preparation"
            desc="Prepared in a clean, controlled kitchen following strict hygiene standards."
          />

          <ServiceCard
            icon={<Gift />}
            title="Bulk & Catering Orders"
            desc="Perfect for events, poojas, corporate gifting, and family functions."
          />
        </div>

        {/* Trust Line */}
        <div className="mt-14 text-center">
          <p className="text-gray-700 font-medium">
            🎉 Trusted by <span className="text-red-700 font-bold">1,000+</span> happy customers for quality & taste
          </p>
        </div>
      </div>
    </section>
  );
}

/* Service Card Component */
function ServiceCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md border hover:shadow-xl transition duration-300">
      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-amber-100 text-red-700 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-3 text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}
