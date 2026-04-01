import { FaInstagram, FaLinkedin, FaDribbble, FaBehance } from "react-icons/fa";

const Footer = () => {
  const navLinks = ["Home", "Services", "About", "Portfolio", "Contact"];

  return (
    <footer className="bg-[#0A0A0A] text-white py-12 border-t border-[#1F1F1F]">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* NAME */}
        <h2 className="text-2xl font-bold mb-6">
          <span className="text-[#39FF14]">V</span>irginia
        </h2>

        {/* NAV LINKS */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase()}`}
              className="text-[#A1A1AA] hover:text-[#39FF14] transition"
            >
              {link}
            </a>
          ))}
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-5 mb-6 text-lg">
          {[FaInstagram, FaLinkedin, FaDribbble, FaBehance].map(
            (Icon, index) => (
              <a
                key={index}
                href="#"
                className="p-3 border border-[#1F1F1F] rounded-full text-[#A1A1AA] hover:text-[#39FF14] hover:border-[#39FF14] transition"
              >
                <Icon />
              </a>
            )
          )}
        </div>

        {/* CONTACT INFO */}
        <p className="text-[#A1A1AA] mb-6">
          virginia@gmail.com &nbsp;     &nbsp; +254 725 558 589
        </p>

        {/* DIVIDER */}
        <div className="w-full h-[1px] bg-[#1F1F1F] mb-6"></div>

        {/* COPYRIGHT */}
        <p className="text-sm text-[#A1A1AA]">
          © {new Date().getFullYear()} Virginia. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;