"use client";

import Image from "next/image";
import { ShoppingCart, Flame } from "lucide-react";
import Link from "next/link";
interface MenuItem {
  name: string;
  price: string;
  img: string;
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

const menuData :MenuCategory[]= [
  {
    category: "Milk Sweets",
    items: [
      { name: "Gulab Jamun", price: "₹320 / kg", img: "/images/gulab-jamun.jpg" },
      { name: "Rasgulla", price: "₹300 / kg", img: "/images/rasgulla.jpg" },
      { name: "Rasmalai", price: "₹420 / kg", img: "/images/rasmalai.jpg" },
    ],
  },
  {
    category: "Dry Sweets",
    items: [
      { name: "Kaju Katli", price: "₹900 / kg", img: "/images/kaju-katli.jpg" },
      { name: "Besan Ladoo", price: "₹480 / kg", img: "/images/besan-ladoo.jpg" },
      { name: "Mysore Pak", price: "₹520 / kg", img: "/images/mysore-pak.jpg" },
    ],
  },
  {
    category: "Bengali Sweets",
    items: [
      { name: "Sandesh", price: "₹420 / kg", img: "/images/sandesh.jpg" },
      { name: "Cham Cham", price: "₹380 / kg", img: "/images/chamcham.jpg" },
      { name: "Rajbhog", price: "₹450 / kg", img: "/images/rajbhog.jpg" },
    ],
  },
  {
    category: "Namkeen & Snacks",
    items: [
      { name: "Samosa", price: "₹20 / piece", img: "/images/samosa.jpg" },
      { name: "Kachori", price: "₹25 / piece", img: "/images/kachori.jpg" },
      { name: "Mix Namkeen", price: "₹260 / kg", img: "/images/namkeen.jpg" },
    ],
  },
];

export default function Menu() {
  return (
    <section className="bg-gradient-to-b from-amber-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Our <span className="text-red-700">Sweets</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Freshly prepared sweets using traditional recipes & pure desi ghee.
          </p>
        </div>

        {/* Menu Categories */}
        <div className="mt-16 space-y-16">
          {menuData.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <Flame className="text-red-600" />
                {section.category}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items.map((item, i) => (
                  <MenuCard key={i} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Delivery Note */}
        <div className="mt-20 text-center">
          <p className="text-gray-700 font-medium">
            🚚 Same-day delivery available • 🎁 Gift packing on request • 📞 Bulk orders accepted
          </p>
        </div>
      </div>
    </section>
  );
}

/* Menu Card */
function MenuCard({ item }: { item:MenuItem}) {
  return (
    <div className="bg-white rounded-2xl shadow-md border hover:shadow-xl transition overflow-hidden">
      <div className="relative h-56">
        <Image
          src={item.img}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
        <p className="mt-2 text-red-700 font-semibold">{item.price}</p>

        <button className="mt-5 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-orange-500 text-white py-3 rounded-full font-bold hover:scale-105 transition">
          <ShoppingCart className="w-5 h-5" />
       <Link href="/contact"> Order Now
       </Link>  
        </button>
      </div>
    </div>
  );
}
