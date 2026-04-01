import { useState } from "react";
import { motion } from "framer-motion";

const filters = [
  "All",
  "Website Design",
  "App Design",
  "App Desktop",
  "Branding",
];

const projectsData = [
  {
    title: "Business Website",
    category: "Website Design",
    image: "/business.png",
  },
  {
    title: "Mobile App UI",
    category: "App Design",
    image: "/app.png",
  },
  {
    title: "Dashboard System",
    category: "App Desktop",
    image: "/dashboard.png",
  },
  {
    title: "Brand Identity",
    category: "Branding",
    image: "/brand.png",
  },
  {
    title: "E-commerce Site",
    category: "Website Design",
    image: "/shopping.png",
  },
  {
    title: "SaaS Dashboard",
    category: "App Desktop",
    image: "/saas.png",
  },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section id="portfolio" className="py-20 bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-[#39FF14]">Portfolio</span>
          </h2>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full border transition ${
                activeFilter === filter
                  ? "bg-[#39FF14] text-black border-[#39FF14]"
                  : "border-[#1F1F1F] text-[#A1A1AA] hover:border-[#39FF14] hover:text-[#39FF14]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* PROJECTS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {filteredProjects.map((project, index) => (
    <motion.div
      key={index}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="group"
    >
      {/* CARD */}
      <div className="relative overflow-hidden rounded-xl border border-[#1F1F1F]">

        {/* IMAGE */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[240px] object-cover group-hover:scale-110 transition duration-500"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

        {/* TEXT INSIDE CARD */}
        <div className="absolute bottom-0 left-0 w-full p-4 flex justify-between items-center">
          <h3 className="font-semibold text-white">
            {project.title}
          </h3>

          <span className="text-xs text-[#39FF14] bg-black/40 px-3 py-1 rounded-full border border-[#39FF14]/30">
            {project.category}
          </span>
        </div>

      </div>
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Portfolio;