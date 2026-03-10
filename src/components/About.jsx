import { motion } from "framer-motion";
import myImage from "../assets/profile.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 w-full
                 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100"
    >
      {/* Title */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-12 text-center text-gray-900"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      {/* MAIN WRAPPER */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="bg-white shadow-xl rounded-2xl sm:rounded-3xl 
                     p-6 sm:p-10 md:p-14 border border-gray-200 
                     flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-14"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
        >
          {/* LEFT — IMAGE */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src={myImage}
              alt="developer"
              className="w-52 sm:w-64 md:w-80 lg:w-96 
                         drop-shadow-lg rounded-xl sm:rounded-2xl"
            />
          </motion.div>

          {/* RIGHT — TEXT */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              I am a passionate and motivated
              <span className="font-semibold"> Full Stack Developer</span> focused
              on building modern, scalable, and user-friendly web applications.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-4 sm:mt-6">
              I specialize in full-stack development using
              <span className="font-semibold"> React, Node.js, Express, MongoDB,</span>
              and <span className="font-semibold"> Tailwind CSS.</span>
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-4 sm:mt-6">
              My goal is to contribute to impactful projects while continuously
              improving my engineering skills through real-world problem solving.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="h-10"></div>
    </section>
  );
}
