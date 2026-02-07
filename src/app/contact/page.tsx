"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-gradient-to-b from-amber-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Contact <span className="text-red-700">Us</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Have a question or want to place an order?
            We’re just a call or message away.
          </p>
        </div>

        {/* Content */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT – CONTACT INFO */}
          <div className="space-y-6">

            <InfoCard
              icon={<Phone />}
              title="Call Us"
              value="+918009165622"
              href="tel:+918009165622"
            />

            <InfoCard
              icon={<MessageCircle />}
              title="WhatsApp Orders"
              value="+91 98765 43210"
              href="https://wa.me/918009165622"
            />

            <InfoCard
              icon={<Mail />}
              title="Email"
              value="radhesweethouse@gmail.com"
              href="mailto:radhesweethouse@gmail.com"
            />

            <InfoCard
              icon={<MapPin />}
              title="Our Location"
              value="Kalwari, Robertsganj, Uttar Pradesh & Rajgarh, Mirzapur, Uttar Pradesh "
              
              href="https://www.google.com/maps/search/?api=1&query=Main+Market+Road+Your+City"
            />

            <InfoCard
              icon={<Clock />}
              title="Opening Hours"
              value="Mon – Sun: 8:00 AM – 10:00 PM"
            />

            {/* Trust line */}
            <p className="text-gray-700 pt-4">
              🚚 <strong>Same-day delivery</strong> available for most orders
              <br />
              🎉 Bulk & festival orders accepted
            </p>
          </div>

          {/* RIGHT – QUICK ACTION CTA */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Order Sweets Instantly
            </h2>

            <p className="text-gray-700 mb-6">
              For faster service, call or WhatsApp us directly.
              Our team will help you with menu, pricing, and delivery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="tel:+918009165622"
                className="text-center px-6 py-4 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-bold shadow hover:scale-105 transition"
              >
                📞 Call Now
              </Link>

              <Link
                href="https://wa.me/918009165622"
                target="_blank"
                className="text-center px-6 py-4 rounded-full bg-green-800 text-white font-bold shadow hover:scale-105 transition"
              >
                💬 WhatsApp Order
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ================= INFO CARD ================= */

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}

function InfoCard({ icon, title, value, href }: InfoCardProps) {
  const content = (
    <>
      <div className="p-3 bg-amber-100 rounded-lg text-red-700">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-gray-900">{title}</p>
        <p className="text-gray-600">{value}</p>
      </div>
    </>
  );

  // ✅ If link exists → render Link
  if (href) {
    return (
      <Link
        href={href}
        className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm border
                   hover:shadow-md hover:border-amber-300 transition"
      >
        {content}
      </Link>
    );
  }

  // ✅ Otherwise → render normal div
  return (
    <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm border">
      {content}
    </div>
  );
}

