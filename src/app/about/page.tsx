"use client";

import Image from "next/image";
import { Leaf, Truck, ShieldCheck, Heart, ChefHat } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT – IMAGES */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-56 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/about1.jpg"
                alt="Preparing traditional Indian sweets"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-56 rounded-2xl overflow-hidden shadow-lg mt-10">
              <Image
                src="/images/about2.jpg"
                alt="Fresh Indian mithai"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Experience Badge */}
          <div className="absolute -bottom-6 left-6 bg-white px-6 py-4 rounded-xl shadow-xl border">
            <p className="text-xl font-bold text-red-700">10+ Years</p>
            <p className="text-sm text-gray-600">of Sweet Making Tradition</p>
          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            About <span className="text-red-700">Radhe Sweet House</span>
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            At <strong>Radhe Sweet House</strong>, sweets are more than desserts —
            they are a celebration of culture, family, and togetherness.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Using pure desi ghee, premium ingredients, and traditional recipes,
            we prepare every sweet fresh after you place your order.
            No preservatives. No shortcuts. Just honest taste.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            From festivals to everyday moments, we ensure hygienic preparation,
            safe packaging, and fast home delivery — so every bite reaches you
            fresh and full of flavour.
          </p>

          {/* FEATURES */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Feature icon={<ChefHat />} title="Traditional Recipes" />
            <Feature icon={<Leaf />} title="Pure Ingredients" />
            <Feature icon={<ShieldCheck />} title="Hygienic Preparation" />
            <Feature icon={<Truck />} title="Fast Home Delivery" />
          </div>

          <div className="mt-8 flex items-center gap-2 text-red-700 font-semibold">
            <Heart className="w-5 h-5" />
            Trusted by 1,000+ Happy Customers
          </div>
        </div>
      </div>
    </section>
  );
}

/* Feature Item */
function Feature({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-4 bg-amber-50 p-4 rounded-xl">
      <div className="p-2 bg-white rounded-lg shadow-sm text-red-600">
        {icon}
      </div>
      <p className="font-semibold text-gray-800">{title}</p>
    </div>
  );
}
