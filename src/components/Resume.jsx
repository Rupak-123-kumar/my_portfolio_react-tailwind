import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section
      id="resume"
      className="py-24 px-6 text-center bg-gray-50"
    >
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold mb-10 text-gray-900"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Resume
      </motion.h2>

      {/* Resume Card */}
      <motion.div
        className="max-w-xl mx-auto bg-white shadow-2xl border border-gray-200 rounded-2xl p-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Download my latest resume to explore my technical skills, 
          projects, education, and professional experience.  
        </p>

        {/* Resume Icon */}
        <motion.img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135692.png"
          alt="resume icon"
          className="w-28 mx-auto mb-6 opacity-90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Download Button */}
        <motion.a
          href="/Rupak_Kumar_Resume.pdf"   // Put your resume in public/resume.pdf
          download
          className="inline-block px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Resume 📄
        </motion.a>
      </motion.div>
    </section>
  );
}
