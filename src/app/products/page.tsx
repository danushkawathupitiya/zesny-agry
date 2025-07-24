export default function Products() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-10 bg-gradient-to-br from-green-100 via-pink-100 to-yellow-100 rounded-xl shadow-lg">
      <h1 className="text-4xl font-extrabold text-yellow-700 mb-4 drop-shadow-lg text-center">Our Products</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl">Explore our range of homemade teas, crafted with care and bursting with flavor. Perfect for every tea lover!</p>
      <div className="flex flex-wrap gap-8 justify-center items-center">
        <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 w-60">
          <img src="/dust-num-01.jpeg" alt="Black OP Dut 01" className="w-20 h-20 mb-4" />
          <span className="font-bold text-lg text-yellow-600">Black OP Dut 01</span>
          <span className="text-gray-500">Single-Origin: Grown at 3,500 ft in the misty highlands of Kothmale, Sri Lanka
            Handcrafted: Expertly handpicked and traditionally rolled for full flavor
            Pure & Natural: No additives, no blending—100% authentic black tea
            Flavor Notes: Smooth, malty taste with subtle hints of honey and spice
            Fresh & Uplifting: Crisp mountain-grown tea, rich in aroma and heritage
                True Sri Lankan Tradition: A serene cup rooted in generations of tea-making craftsmanship


          </span>
        </div>
        <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 w-60">
          <img src="/file.svg" alt="Herbal Green Tea" className="w-20 h-20 mb-4" />
          <span className="font-bold text-lg text-yellow-600">Herbal Green Tea</span>
          <span className="text-gray-500">Fresh, soothing, and healthy</span>
        </div>
        <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 w-60">
          <img src="/window.svg" alt="Spiced Chai" className="w-20 h-20 mb-4" />
          <span className="font-bold text-lg text-yellow-600">Spiced Chai</span>
          <span className="text-gray-500">Aromatic, spicy, and warming</span>
        </div>
      </div>
    </div>
  );
} 