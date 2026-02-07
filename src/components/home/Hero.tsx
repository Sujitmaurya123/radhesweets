import Image from "next/image";
import { Star, Leaf, Calendar, Truck } from "lucide-react";
import { Hand } from "lucide-react";


export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-10 left-10 text-amber-200 text-6xl">🪔</div>
        <div className="absolute top-40 right-20 text-amber-200 text-5xl">🍬</div>
        <div className="absolute bottom-20 left-1/4 text-amber-200 text-7xl">🌺</div>
        <div className="absolute bottom-40 right-10 text-amber-200 text-6xl">🫓</div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="relative">
          {/* Accent decoration */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-red-600 to-orange-500 rounded-full opacity-10 blur-xl"></div>
          
          <div className="mb-6 inline-flex items-center space-x-2 bg-gradient-to-r from-red-50 to-orange-50 px-4 py-2 rounded-full border border-red-100">
            <Hand className="text-red-600" />
            <span className="text-sm font-bold tracking-wider text-red-700 uppercase">
              Handcrafted Tradition 
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            <span className="relative">
              <span className="relative z-10">Radhe</span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-amber-200 opacity-60 z-0"></span>
            </span>
            <br />
            <span className="text-red-700 mt-2 block">Sweet House</span>
          </h1>

          <p className="mt-8 text-xl text-gray-800 max-w-xl leading-relaxed bg-gradient-to-r from-transparent via-amber-50 to-transparent p-4 rounded-lg">
            <span className="font-semibold text-red-700">Authentic Indian mithai</span> crafted with pure desi ghee, 
            traditional family recipes, and the warmth of homemade love. 
            Perfect for festivals, celebrations, and sweet cravings.
          </p>

          {/* Features grid */}
          <div className="mt-10 grid grid-cols-2 gap-4 max-w-lg">
            <div className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-sm border border-amber-100">
              <div className="p-2 bg-red-50 rounded-lg">
                <Leaf className="text-green-600 text-xl" />
              </div>
              <span className="font-medium text-gray-800">Pure Ingredients</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-sm border border-amber-100">
              <div className="p-2 bg-amber-50 rounded-lg">
                <Truck className="text-orange-600 text-xl" />
              </div>
              <span className="font-medium text-gray-800">Secret Recipes</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-sm border border-amber-100">
              <div className="p-2 bg-yellow-50 rounded-lg">
                <Calendar className="text-yellow-600 text-xl" />
              </div>
              <span className="font-medium text-gray-800">Fresh Daily</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-sm border border-amber-100">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Truck className="text-blue-600 text-xl" />
              </div>
              <span className="font-medium text-gray-800">Fast Delivery</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <button className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center">
              <span className="relative z-10">Order Sweets Now</span>
              <div className="absolute right-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                →
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="px-8 py-4 rounded-full bg-white text-red-700 font-bold text-lg border-2 border-amber-300 hover:border-amber-400 hover:bg-amber-50 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center">
              <span>Explore Our Menu</span>
            </button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <div>
                        <p className="mt-3 text-sm text-gray-600">
            🚚 Delivering happiness across the city • 🎁 Perfect for festivals & gifting
          </p>

            </div>
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-500 text-sm md:text-base" />
                ))}
              </div>
              <span className="ml-2 font-semibold text-gray-800">4.9/5</span>
            </div>
            <div className="h-4 w-px bg-gray-300"></div>
            <div className="text-gray-700">
              <span className="font-bold text-red-700">1,000+</span> Happy Customers
            </div>
            
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Main image container */}
          <div className="relative w-[320px] h-[320px] md:w-[480px] md:h-[480px] rounded-[3rem] overflow-hidden shadow-2xl shadow-amber-200/50 border-8 border-white">
            <Image
              src="/images/sweet1.jpg"
              alt="Assortment of traditional Indian sweets like ladoo, barfi, and jalebi"
              fill
              className="object-cover hover:scale-110 transition duration-700"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            
            {/* Image overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-transparent"></div>
          </div>

          

          <div className="absolute -bottom-6 left-6 md:left-0 bg-white px-6 py-4 rounded-2xl shadow-xl border border-amber-100">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-100 to-orange-100 flex items-center justify-center">
                  <span className="text-red-600 font-bold">🔥</span>
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white text-xs font-bold">24</span>
                </div>
              </div>
              <div>
                <div className="font-bold text-gray-900">Freshly Made</div>
                <div className="text-sm text-gray-600">Every 24 hours</div>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"></div>
    </section>
  );
}