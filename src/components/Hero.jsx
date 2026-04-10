import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaDribbble, FaBehance } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-16 bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          <p className="text-[#A1A1AA] mb-2">Hi I am</p>

          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Virginia Mwongeli
          </h2>

          <h1 className="text-4xl md:text-6xl font-bold text-[#39FF14] mb-6 leading-tight">
            A Web Developer
          </h1>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mb-6 text-xl">
            {[FaInstagram, FaLinkedin, FaDribbble, FaBehance].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-3 border border-[#1F1F1F] rounded-full text-[#A1A1AA] hover:text-[#39FF14] hover:border-[#39FF14] transition"
                >
                  <Icon />
                </a>
              ),
            )}
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 mb-10">
            <button className="px-6 py-3 rounded-lg bg-[#39FF14] text-black font-semibold hover:shadow-[0_0_20px_#39FF14] transition">
              <a href="#contact">Hire Me</a>
            </button>

            <button className="px-6 py-3 rounded-lg border border-[#1F1F1F] text-[#A1A1AA] hover:border-[#39FF14] hover:text-[#39FF14] transition">
              <a href="/cv.pdf" download>
                Download CV
              </a>
            </button>
          </div>

          {/* STATS (NOW INSIDE LEFT) */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 bg-[#111111] border border-[#1F1F1F] rounded-xl p-4 sm:p-6 text-center">
            {[
              { value: "5+", label: "Experiences" },
              { value: "20+", label: "Projects Done" },
              { value: "80+", label: "Happy Clients" },
            ].map((item, index) => (
              <div key={index}>
                <h3 className="text-lg sm:text-2xl font-bold text-[#39FF14]">
                  {item.value}
                </h3>
                <p className="text-xs sm:text-sm text-[#A1A1AA]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="absolute w-70 h-70 md:w-100 md:h-100 bg-[#39FF14]/10 rounded-full blur-3xl"></div>

          <img
            src="/virginia.png"
            alt="hero"
            className="relative w-65 md:w-87.5 object-cover rounded-full border border-[#1F1F1F]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
