import { useState, useEffect } from "react";
import Profile from "./images/WaKHntvt_200x200.jpg";
import { FaTwitter, FaTiktok, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const sections = [
  { id: "Home", label: "Home" },
  { id: "About", label: "About" },
  { id: "Portfolio", label: "Portfolio" },
  { id: "Contact", label: "Contact" },
];

export default function Sidebar() {
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3; // adjust for early highlighting

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < bottom) {
            setActive(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="hidden md:flex fixed left-0 top-0 h-screen w-64 bg-slate-900 text-gray-200 flex-col z-50">
      {/* Profile Image */}
      <div className="mt-8 flex flex-col items-center">
        <img
          src={Profile}
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-white object-cover"
        />

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 text-white">
          <a
            href="https://twitter.com/OlodudeIdowu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaTwitter className="cursor-pointer text-xl" />
          </a>

          <a
            href="https://wa.me/2348075608069"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaWhatsapp className="cursor-pointer text-xl" />
          </a>

          <a
            href="https://www.tiktok.com/@chatbot_developer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaTiktok className="cursor-pointer text-xl" />
          </a>
          <a
            href="https://www.tiktok.com/@chatbot_developer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaLinkedin className="cursor-pointer text-xl" />
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col text-center gap-6 text-sm uppercase font-semibold px-10 mt-10">
        {sections.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`transition duration-300 ${
              active === item.id
                ? "text-black border-gray-600 border-2 py-2 bg-white"
                : "text-white hover:text-black hover:border-gray-600 hover:bg-white border-gray-600 border-2 py-2"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
