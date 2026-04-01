import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaMobileAlt, FaServer, FaSearch, FaRocket } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Frontend Development",
    desc: "Modern, responsive websites built with React, Tailwind CSS, and best UI/UX practices.",
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    desc: "Secure and scalable backend systems with APIs, authentication, and databases.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    desc: "Mobile-first designs that work perfectly across all devices and screen sizes.",
  },
  {
    icon: <FaCode />,
    title: "Full Stack Development",
    desc: "Complete web solutions from frontend to backend with seamless integration.",
  },
  {
    icon: <FaSearch />,
    title: "SEO Optimization",
    desc: "Optimized websites that rank better on search engines and attract traffic.",
  },
  {
    icon: <FaRocket />,
    title: "Website Performance",
    desc: "Fast-loading, optimized websites to improve user experience and conversions.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            My <span className="text-[#39FF14]">Services</span>
          </h2>
          <p className="text-[#A1A1AA] max-w-2xl mx-auto">
            I provide high-quality web development services to help businesses
            grow, scale, and stand out online.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111111] border border-[#1F1F1F] rounded-xl p-6 hover:border-[#39FF14] hover:shadow-[0_0_20px_rgba(57,255,20,0.2)] transition duration-300 group flex flex-col items-center text-center"
            >
              {/* ICON */}
              <div className="text-3xl text-[#39FF14]  mb-4 group-hover:scale-110 transition">
                {service.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#39FF14] transition">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;