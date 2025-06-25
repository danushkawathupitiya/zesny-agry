import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-10 bg-gradient-to-br from-yellow-100 via-pink-100 to-green-100 rounded-xl shadow-lg">
      <h1 className="text-4xl font-extrabold text-pink-700 mb-4 drop-shadow-lg text-center">About Us</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl">We are passionate tea makers dedicated to bringing you the best homemade tea experience. Our team blends tradition, quality, and love in every cup.</p>
      <h2 className="text-2xl font-bold text-green-700 mb-6 mt-4">Our Team</h2>
      <div className="flex flex-wrap gap-8 justify-center items-center">
        <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 w-60">
          <img src="/globe.svg" alt="Team Member" className="w-20 h-20 mb-4" />
          <span className="font-bold text-lg text-pink-600">Chandana</span>
          <span className="text-gray-500">Founder & Tea Master</span>
        </div>
        <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 w-60">
          <img src="/file.svg" alt="Team Member" className="w-20 h-20 mb-4" />
          <span className="font-bold text-lg text-pink-600">Madusanka</span>
          <span className="text-gray-500">Blending Specialist</span>
        </div>
        <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 w-60">
          <img src="/window.svg" alt="Team Member" className="w-20 h-20 mb-4" />
          <span className="font-bold text-lg text-pink-600">Eyepax</span>
          <span className="text-gray-500">Quality Assurance</span>
        </div>
      </div>
    </div>
  );
} 