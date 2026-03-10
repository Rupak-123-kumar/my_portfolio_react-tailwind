import { motion } from "framer-motion";
import { Link } from "react-router-dom";  // <-- IMPORTANT import
import myImage from "../assets/profile.jpg"; // Your image path

export default function Hero() {
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center items-center gap-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 relative overflow-hidden">
      
      {/* LEFT SIDE : TEXT */}
      <div className="text-center md:text-left max-w-lg">

        {/* Heading Animation */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold drop-shadow-lg"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="text-yellow-300">Rupak Kumar</span>
        </motion.h1>

        {/* 3-Line Developer Intro */}
        <motion.p
          className="text-lg md:text-xl mt-6 font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Full Stack Developer crafting seamless user experiences. <br />
          I build scalable web applications from front to backend. <br />
          Turning ideas into fast, functional, and beautiful digital products.
        </motion.p>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, -5, 0] }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
        >
          <Link
            to="/projects"
            className="inline-block mt-8 px-8 py-3 bg-white text-black font-semibold text-lg rounded-full shadow-xl hover:scale-105 transition-transform"
          >
            View Projects 🚀
          </Link>
        </motion.div>
      </div>

      {/* RIGHT SIDE : IMAGE */}
      <motion.div
        className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3 }}
        whileHover={{ scale: 1.05 }}
      >
        <img
          src={myImage}
          alt="profile"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Glowing Background Animation */}
      <motion.div
        className="absolute w-64 h-64 bg-pink-400 opacity-20 blur-3xl rounded-full -z-10"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </section>
  );
}
