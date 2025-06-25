export default function Products() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-10 bg-gradient-to-br from-green-100 via-pink-100 to-yellow-100 rounded-xl shadow-lg">
      <h1 className="text-4xl font-extrabold text-yellow-700 mb-4 drop-shadow-lg text-center">Our Products</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl">Explore our range of homemade teas, crafted with care and bursting with flavor. Perfect for every tea lover!</p>
      <div className="flex flex-wrap gap-8 justify-center items-center">
        <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 w-60">
          <img src="/globe.svg" alt="Classic Black Tea" className="w-20 h-20 mb-4" />
          <span className="font-bold text-lg text-yellow-600">Classic Black Tea</span>
          <span className="text-gray-500">Rich, bold, and energizing</span>
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