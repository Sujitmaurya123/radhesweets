import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#3b2f2f] text-cream-50">
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Radhe <span className="text-yellow-500">Sweet House</span>
          </h2>
          <p className="mt-4 text-sm text-gray-300 leading-relaxed">
            Bringing you the authentic taste of traditional Indian sweets,
            crafted with purity, love, and timeless recipes.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/" className="hover:text-yellow-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/sweets" className="hover:text-yellow-400 transition">
                Our Sweets
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Business Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Business Hours
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Mon – Sun: 8:00 AM – 10:00 PM</li>
            <li>Fresh sweets made daily</li>
            <li>Bulk orders accepted</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>📍 Kalwari, Robertsganj, Uttar Pradesh</li>
            <li>📍 Rajgarh, Mirzapur, Uttar Pradesh</li>
            <li>📞 +91 8009165622</li>
            <li>📧 radhe@sweethouse.com</li>
          </ul>

          <Link
            href="https://wa.me/918009165622"
                target="_blank"
            className="inline-block mt-5 px-5 py-2 rounded-full bg-red-700 text-white font-semibold hover:bg-red-800 transition"
          >
            Order on WhatsApp
          </Link>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Radhe Sweet House. All rights reserved.
      </div>
    </footer>
  );
}
