import Sidebar from "./sections/sidebar";
import MobileHeader from "./sections/mobileHeader";
import Hero from "./sections/home";
import Portfolio from "./sections/portfolio";
import Contact from "./sections/contact";
import Skills from "./sections/skills";

import About from "./sections/about/about";

export default function App() {
  return (
    <div className="bg-gray-100">
      <Sidebar />
      <MobileHeader />

      {/* CONTENT OFFSET FOR SIDEBAR */}
      <main className="md:ml-64 px-4 md:px-10 pt-20 md:pt-10">
        <Hero />
        <About />
        <Skills/>
        <Portfolio/>
        <Contact/>
      </main>
    </div>
  );
}
