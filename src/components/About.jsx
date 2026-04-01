import { motion } from "framer-motion";

const skills = [
  { name: "Figma", level: 95 },
  { name: "Frontend", level: 90 },
  { name: "Backend", level: 80 },
  { name: "UI/UX", level: 85 },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP SECTION (IMAGE + TEXT) */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center relative"
          >
            {/* glow */}
            <div className="absolute w-[280px] h-[280px] md:w-[350px] md:h-[350px] bg-[#39FF14]/10 blur-3xl rounded-full"></div>

            <img
              src="/virginia.png"
              alt="about"
              className="relative w-[260px] md:w-[320px] rounded-xl border border-[#1F1F1F]"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-[#39FF14]">Me</span>
            </h2>

            <p className="text-[#A1A1AA] mb-6 leading-relaxed">
              I’m a passionate web developer focused on building modern, fast, and
              user-friendly digital experiences. I combine clean code with great
              design to create websites that not only look good but also perform
              exceptionally well.
            </p>

            <p className="text-[#A1A1AA] mb-6 leading-relaxed">
              From frontend interfaces to backend systems, I help businesses bring
              their ideas to life and scale their online presence effectively.
            </p>

            <button className="px-6 py-3 rounded-lg bg-[#39FF14] text-black font-semibold hover:shadow-[0_0_20px_#39FF14] transition">
              Download CV
            </button>
          </motion.div>
        </div>

        {/* SKILLS SECTION (NOW AT BOTTOM ) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-10">
            My <span className="text-[#39FF14]">Skills</span>
          </h3>

          <div className="flex flex-wrap justify-center gap-15">
            {skills.map((skill, index) => (
              <SkillCircle key={index} skill={skill} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;



/*  Skill Circle Component */
const SkillCircle = ({ skill }) => {
  const radius = 45;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference - (skill.level / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg height={radius * 2} width={radius * 2}>
          {/* background */}
          <circle
            stroke="#1F1F1F"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />

          {/* progress */}
          <motion.circle
            stroke="#39FF14"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            transition={{ duration: 1.2 }}
          />
        </svg>

        {/* percentage inside circle */}
        <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
          {skill.level}%
        </span>
      </div>

      {/* label */}
      <p className="mt-3 text-[#A1A1AA]">{skill.name}</p>
    </div>
  );
};