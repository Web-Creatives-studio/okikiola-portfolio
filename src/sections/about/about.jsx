import Stats from "./stats";

export default function About() {
  return (
    <section
      id="About"
      className="mt-10 mb-10 bg-slate-300 rounded-xl shadow-lg w-full py-10 px-4 sm:px-8 lg:px-14"
    >
      {/* Title */}
      <div className="relative flex justify-center border-gray-400 border-2 py-5 mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">ABOUT ME</h1>
      </div>

      {/* Intro */}
      <div className="max-w-3xl">
        <h2 className="text-xl sm:text-2xl py-4">
          I'm <strong>Okikiola,</strong> Chatbot Developer / Automation
          Specialist
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          I’m passionate about building websites, chatbots, and automation
          systems that solve real-world problems. From responsive web design to
          AI-powered chatbots and workflow automation, I help businesses
          simplify processes, enhance customer interactions, and scale with
          confidence.
        </p>
      </div>

      {/* Stats + What I Do */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-6 gap-6">
        {/* 80% LEFT */}
        <div className="lg:col-span-4 bg-gray-200 rounded-lg">
          <Stats />
        </div>

        {/* 20% RIGHT */}
        <div className="lg:col-span-2 bg-gray-400 p-6 rounded-lg">
          <h2 className="text-xl sm:text-2xl font-bold mb-6">What I Do</h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <span className="text-lg sm:text-xl font-bold">01</span>
              <div>
                <h3 className="font-semibold">Chatbot Development</h3>
                <p className="text-sm text-gray-700">
                  Intelligent WhatsApp and web chatbots using Botpress and AI
                  integrations.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-lg sm:text-xl font-bold">02</span>
              <div>
                <h3 className="font-semibold">Automation & Workflows</h3>
                <p className="text-sm text-gray-700">
                  Streamlining workflows using Zapier, Make, and n8n.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-lg sm:text-xl font-bold">03</span>
              <div>
                <h3 className="font-semibold">Frontend Development</h3>
                <p className="text-sm text-gray-700">
                  Responsive interfaces using React and Tailwind CSS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
