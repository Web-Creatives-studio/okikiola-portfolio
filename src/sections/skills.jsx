import { useState } from "react";
import Html from "./images/html.png";
import Css from "./images/css.png";
import Javascript from "./images/javascript.png";
import ReactImg from "./images/react.png";
import Tailwind from "./images/tailwind.png";
import Zapier from "./images/zapier.png";
import Make from "./images/make.png";
import N8n from "./images/n8n.png";
import Botpress from "./images/botpress.png";

const skills = [
  { name: "HTML", value: "90%", image: Html, category: "Web Development" },
  { name: "CSS", value: "85%", image: Css, category: "Web Development" },
  { name: "JavaScript", value: "75%", image: Javascript, category: "Web Development" },
  { name: "React", value: "70%", image: ReactImg, category: "Web Development" },
  { name: "Tailwind CSS", value: "85%", image: Tailwind, category: "Web Development" },

  { name: "Zapier", value: "70%", image: Zapier, category: "Automation" },
  { name: "Make", value: "65%", image: Make, category: "Automation" },
  { name: "n8n", value: "60%", image: N8n, category: "Chatbot" },

  { name: "Botpress", value: "65%", image: Botpress, category: "Chatbot" },
];

const filters = ["All", "Web Development", "Automation", "Chatbot"];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredSkills =
    activeFilter === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeFilter);

  return (
    <section id="Skills" className="w-full bg-slate-300 rounded-xl shadow-lg py-14 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-12 border-gray-400 border-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Skills & Expertise
          </h1>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            Technologies I use for web development, automation, and chatbot solutions
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                activeFilter === filter
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-700 hover:bg-slate-100"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map((skill) => (
            <div
              key={`${skill.name}-${skill.category}`}
              className="bg-slate-900 rounded-xl p-6 text-white
                border border-slate-800
                hover:border-yellow-400
                hover:shadow-lg hover:shadow-yellow-400/10
                transition"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-slate-800 flex items-center justify-center overflow-hidden">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex-1">
                  <p className="font-semibold">{skill.name}</p>
                  <p className="text-sm text-slate-400">
                    Proficiency: {skill.value}
                  </p>

                  <div className="mt-2 h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 rounded-full"
                      style={{ width: skill.value }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
