import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-10 bg-gradient-to-br from-green-100 via-yellow-100 to-pink-100 rounded-xl shadow-lg">
      <h1 className="text-5xl font-extrabold text-green-700 mb-4 drop-shadow-lg text-center">Welcome to Home Made Tea!</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl">Discover the taste of tradition with our hand-crafted teas, made with love and the finest natural ingredients. Sip, relax, and enjoy a cup of happiness!</p>
      <div className="flex flex-wrap gap-8 justify-center items-center">
        <img src="/globe.svg" alt="Tea World" className="w-32 h-32 bg-white rounded-full p-4 shadow-md" />
        <img src="/file.svg" alt="Tea File" className="w-32 h-32 bg-white rounded-full p-4 shadow-md" />
        <img src="/window.svg" alt="Tea Window" className="w-32 h-32 bg-white rounded-full p-4 shadow-md" />
      </div>
    </div>
  );
}
