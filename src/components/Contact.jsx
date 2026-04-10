import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [formKey, setFormKey] = useState(0); // used to reset form

  const handleSubmit = (e) => {
    e.preventDefault();

    // show success message
    setSuccess(true);

    // reset form by changing key
    setFormKey((prev) => prev + 1);

    // hide message after 3 seconds
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-[#0A0A0A] text-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Contact <span className="text-[#39FF14]">Me</span>
          </h2>
          <p className="text-[#A1A1AA]">
            Have a project in mind? Let’s build something amazing together.
          </p>
        </div>

        {/* FORM */}
        <motion.form
          key={formKey}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 bg-[#111111] border border-[#1F1F1F] rounded-lg focus:outline-none focus:border-[#39FF14] transition"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="p-4 bg-[#111111] border border-[#1F1F1F] rounded-lg focus:outline-none focus:border-[#39FF14] transition"
            />

            <input
              type="text"
              placeholder="Project Timeline"
              className="p-4 bg-[#111111] border border-[#1F1F1F] rounded-lg focus:outline-none focus:border-[#39FF14] transition"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-6">
            <input
              type="email"
              placeholder="Email Address"
              className="p-4 bg-[#111111] border border-[#1F1F1F] rounded-lg focus:outline-none focus:border-[#39FF14] transition"
            />

            <select
              className="p-4 bg-[#111111] border border-[#1F1F1F] rounded-lg text-[#A1A1AA] focus:outline-none focus:border-[#39FF14] transition"
              defaultValue=""
            >
              <option value="" disabled>
                Service of Interest
              </option>
              <option>Website Development</option>
              <option>UI/UX Design</option>
              <option>Full Stack Development</option>
              <option>Branding</option>
            </select>

            <textarea
              rows="5"
              placeholder="Project Details"
              className="p-4 bg-[#111111] border border-[#1F1F1F] rounded-lg focus:outline-none focus:border-[#39FF14] transition resize-none"
            ></textarea>
          </div>

          {/* BUTTON (FULL WIDTH) */}
          <div className="md:col-span-2 text-right mt-4">
            <button
              type="submit"
              className="px-8 py-3 rounded-lg bg-[#39FF14] text-black font-semibold hover:shadow-[0_0_20px_#39FF14] transition"
            >
              Send Message
            </button>
          </div>
        </motion.form>

        {/* SUCCESS MESSAGE */}
        {success && (
          <p className="text-[#39FF14] text-center mt-6">
            Message submitted successfully!
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
