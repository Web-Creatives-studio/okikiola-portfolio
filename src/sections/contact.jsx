import { FaTwitter, FaTiktok, FaWhatsapp, FaLinkedin } from "react-icons/fa";
export default function Contact() {
  return (
    <section
      id="Contact"
      className="mt-10 mb-10 bg-slate-300 rounded-xl shadow-lg w-full py-10 px-4 sm:px-8 lg:px-14"
    >
      {/* Section Title */}
      <div className="relative flex justify-center border-gray-400 border-2 py-5 mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Contact
        </h1>
      </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Twitter */}
          <a
            href="https://twitter.com/OlodudeIdowu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center h-40 border border-gray-700 rounded-xl hover:bg-gray-900 hover:text-white transition"
          >
            <FaTwitter className="text-5xl mb-3" />
            <span className="text-sm">Twitter</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/2348075608069"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center h-40 border border-gray-700 rounded-xl hover:bg-gray-900 hover:text-white transition"
          >
            <FaWhatsapp className="text-5xl mb-3" />
            <span className="text-sm">WhatsApp</span>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@chatbot_developer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center h-40 border border-gray-700 rounded-xl hover:bg-gray-900 hover:text-white transition"
          >
            <FaTiktok className="text-5xl mb-3" />
            <span className="text-sm">TikTok</span>
          </a>

          {/* Email */}
          <a
            href="mailto:youremail@example.com"
            className="flex flex-col items-center justify-center h-40 border border-gray-700 rounded-xl hover:bg-gray-900  hover:text-white transition"
          >
            <FaLinkedin className="text-5xl mb-3" />
            <span className="text-sm">Linkedln</span>
          </a>
        </div>
    </section>
  );
}
