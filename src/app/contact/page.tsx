export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-10 bg-gradient-to-br from-pink-100 via-green-100 to-yellow-100 rounded-xl shadow-lg">
      <h1 className="text-4xl font-extrabold text-green-700 mb-4 drop-shadow-lg text-center">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl">For more information about our exclusive range of handmade Ceylon teas, please reach out using the contact details below. We specialize in artisanal teas crafted with care, and we're here to assist with any inquiries related to our products or export services.</p>
      <form className="flex flex-col gap-4 bg-white rounded-xl shadow-md p-8 w-full max-w-md">
        <input type="text" placeholder="Your Name" className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300" />
        <input type="email" placeholder="Your Email" className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300" />
        <textarea placeholder="Your Message" className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300" rows={4}></textarea>
        <button type="submit" className="bg-gradient-to-r from-green-400 to-pink-400 text-white font-bold py-2 rounded shadow hover:from-pink-400 hover:to-green-400 transition-all">Send Message</button>
      </form>
      <div className="flex flex-col items-center bg-gradient-to-r from-pink-200 via-green-200 to-yellow-200 rounded-xl shadow-md p-6 mt-8 w-full max-w-md">
        <h2 className="text-xl font-bold text-green-700 mb-2">Or reach us directly:</h2>
        <div className="flex flex-col gap-2 text-gray-700 text-lg">
          <span><strong>Mobile:</strong>+94 70 111 1102</span>
          <span><strong>Email:</strong> infor.zesnyceylon@gmail.com</span>
          <span>
                <a target="_blank" href="https://www.google.com/maps/place/Zesny+Agri+Products+Ceylon/@7.0427289,80.5748761,176m/data=!3m1!1e3!4m12!1m5!8m4!1e2!2s108104185126123123468!3m1!1e1!3m5!1s0x3ae377000fc6756d:0x62f2e39eaa29ea28!8m2!3d7.0426956!4d80.5760375!16s%2Fg%2F11xky4ckws!10m1!2e10?hl=en&entry=ttu&g_ep=EgoyMDI1MDkxNi4wIKXMDSoASAFQAw%3D%3D">Location</a>
          </span>
        </div>
      </div>
      <img src="/vercel.svg" alt="Contact Tea" className="w-24 h-24 mt-8 bg-white rounded-full p-4 shadow-md" />
    </div>
  );
} 