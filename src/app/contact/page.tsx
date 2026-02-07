"use client";

import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

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
              value="+91 98765 43210"
            />

            <InfoCard
              icon={<MessageCircle />}
              title="WhatsApp Orders"
              value="+91 98765 43210"
            />

            <InfoCard
              icon={<Mail />}
              title="Email"
              value="radhesweethouse@gmail.com"
            />

            <InfoCard
              icon={<MapPin />}
              title="Our Location"
              value="Main Market Road, Your City, India"
            />

            <InfoCard
              icon={<Clock />}
              title="Opening Hours"
              value="Mon – Sun: 8:00 AM – 10:00 PM"
            />

            <p className="text-gray-700 pt-4">
              🚚 <strong>Same-day delivery</strong> available for most orders.  
              🎉 Bulk & festival orders accepted.
            </p>
          </div>

          {/* RIGHT – CONTACT FORM */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-1 w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Your mobile number"
                  className="mt-1 w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Your message or order details"
                  className="mt-1 w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold py-4 rounded-full shadow-lg hover:scale-105 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Info Card */
function InfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm border">
      <div className="p-3 bg-amber-100 rounded-lg text-red-700">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-gray-900">{title}</p>
        <p className="text-gray-600">{value}</p>
      </div>
    </div>
  );
}
