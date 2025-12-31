import { useState } from "react";

const links = ["Home", "About", "Portfolio", "Contact"];

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  const handleClick = (id) => {
    setOpen(false);

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="md:hidden fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="flex items-center justify-between px-4 py-3">
        <h1 className="font-bold text-lg">Portfolio</h1>
        <button
          onClick={() => setOpen(!open)}
          className="text-xl"
        >
          ☰
        </button>
      </div>

      {open && (
        <nav className="flex flex-col px-4 pb-4  gap-3 bg-white">
          {links.map((id) => (
            <button
              key={id}
              onClick={() => handleClick(id)}
              className="capitalize text-left"
            >
              {id}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
