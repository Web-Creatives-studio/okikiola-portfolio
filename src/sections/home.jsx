import Profile from "./images/WaKHntvt_200x200.jpg";
export default function Hero() {
  return (
    <section id="Home" className="min-h-screen flex items-center">
      <div className="bg-slate-300 rounded-xl shadow-lg w-full flex flex-col lg:flex-row overflow-hidden">
        {/* LEFT CONTENT */}
        <div className="flex-1 px-8 md:px-14 py-16">
          <p className="text-sm text-gray-500 mb-4">HI THERE!</p>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            I’M <span className="text-slate-900">Okikiola</span>
          </h1>

          <p className="text-gray-500 uppercase text-sm tracking-wide mb-6">
            Website Developer / Chatbot Developer / Automation Specialist
          </p>

          <p className="text-gray-600 max-w-lg leading-relaxed mb-10">
            I Build Smart Digital Solutions Websites, AI chatbots, and
            automation systems designed to save time, improve engagement, and
            scale businesses.
          </p>

          <a href="#About">
            <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-300 hover:text-black hover:border-slate-900 border-2 transition">
              More About Me
            </button>
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1">
          <img
            src={Profile}
            alt="hero"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
