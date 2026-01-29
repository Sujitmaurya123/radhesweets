import Image from "next/image";

const sweets = [
  {
    name: "Kaju Katli",
    price: "₹650 / kg",
    image: "/images/kaju-katli.jpeg",
  },
  {
    name: "Motichoor Laddu",
    price: "₹520 / kg",
    image: "/images/motichoor-laddu.jpeg",
  },
  {
    name: "Rasgulla",
    price: "₹480 / kg",
    image: "/rasgulla.jpg",
  },
  {
    name: "Gulab Jamun",
    price: "₹450 / kg",
    image: "/gulab-jamun.jpg",
  },
  {
    name: "Milk Cake",
    price: "₹600 / kg",
    image: "/milk-cake.jpg",
  },
  {
    name: "Peda",
    price: "₹550 / kg",
    image: "/peda.jpg",
  },
];

export default function SweetsSection() {
  return (
    <section id="menu" className="bg-cream-50 py-20">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-red-700 uppercase tracking-wide">
            Our Special Sweets
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brown-900">
            Fresh • Traditional • Delicious
          </h2>
          <p className="mt-4 text-gray-600">
            Handcrafted Indian sweets prepared daily using pure desi ghee and
            premium ingredients.
          </p>
        </div>

        {/* Sweets Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {sweets.map((sweet, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <div className="relative h-60">
                <Image
                  src={sweet.image}
                  alt={sweet.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-brown-900">
                  {sweet.name}
                </h3>
                <p className="mt-2 text-red-700 font-medium">
                  {sweet.price}
                </p>

                <button className="mt-5 px-5 py-2 rounded-full bg-yellow-500 text-brown-900 font-semibold hover:bg-yellow-400 transition">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
