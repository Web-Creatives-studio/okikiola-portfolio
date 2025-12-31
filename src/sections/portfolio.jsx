import { useState } from "react";

// Import local videos
import video1 from "./videos/video1.mp4";
import video2 from "./videos/video2.mp4";
import video3 from "./videos/video3.mp4";
import video4 from "./videos/video4.mp4";

export default function Portfolio() {
  const categories = ["All", "Restaurant", "Ecommerce", "Booking"];

  const projects = [
    {
      id: 1,
      title: "Restaurant WhatsApp Chatbot",
      category: "Restaurant",
      type: "Chatbot",
      video: video1,
    },
    {
      id: 2,
      title: "Onboarding Booking",
      category: "Booking",
      type: "Chatbot",
      video: video3,
    },
    {
      id: 3,
      title: "Ecommerce Chatbot",
      category: "Ecommerce",
      type: "Chatbot",
      video: video2,
    },
    {
      id: 4,
      title: "Appointment Booking",
      category: "Booking",
      type: "Chatbot",
      video: video4,
    },
    // Add more projects as needed
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [modalVideo, setModalVideo] = useState(null);

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section
      id="Portfolio"
      className="mt-10 mb-10 bg-slate-300 rounded-xl shadow-lg w-full py-10 px-4 sm:px-8 lg:px-14"
    >
      {/* Section Title */}
      <div className="relative flex justify-center border-gray-400 border-2 py-5 mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Portfolio</h1>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition
              ${
                activeCategory === cat
                  ? "bg-black text-white"
                  : "bg-white hover:bg-gray-200"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition cursor-pointer"
            onClick={() => setModalVideo(project.video)}
          >
            <h3 className="text-lg font-bold mb-3">{project.title}</h3>

            {/* Muted video preview */}
            <video
              src={project.video}
              muted
              autoPlay
              loop
              playsInline
              className="w-full h-80 sm:h-60 md:h-64 lg:h-80 object-cover rounded-lg mb-3"
            />

            <div className="flex gap-2 text-xs">
              <span className="px-3 py-1 border-gray-300 rounded-full">
                {project.category}
              </span>
              <span className="px-3 py-1 bg-yellow-200 rounded-full">
                {project.type}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No projects found.</p>
      )}

      {/* Modal with Video */}
      {modalVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={() => setModalVideo(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-black rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold z-50"
              onClick={() => setModalVideo(null)}
            >
              ×
            </button>

            <video
              src={modalVideo}
              controls
              autoPlay
              className="w-full h-80 rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
