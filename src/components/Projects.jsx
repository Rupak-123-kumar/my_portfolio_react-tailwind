import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Real Estate App",
      desc: "A full-stack web application built using MongoDB, Express, React, and Node.js (MERN). Users can register, log in, and manage their accounts securely with authentication. Property owners can add, update, and delete property listings from their dashboard.",
      link: "https://real-estate-app-clean.onrender.com",
    },
    {
      title: "Chat Application",
      desc: "A real-time chat application built using Socket.IO for instant messaging. Supports typing indicators to show when someone is composing a message. Users can join multiple chat rooms, enabling organized group conversations.",
      link: "https://github.com/Rupak-123-kumar/Web-Chat-App",
    },
    {
      title: "E-Commerce Website",
      desc: "A modern and responsive E-commerce website built using React and Tailwind CSS. Provides a clean, fast UI for browsing products with smooth navigation. Includes features like product listing, detailed views, and category filtering.",
      link: "https://github.com/Rupak-123-kumar/react-tailwind-website",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50 w-full">

      {/* Title */}
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-gray-900"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((p, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 
                       hover:shadow-2xl transition-all cursor-pointer 
                       flex flex-col justify-between h-auto min-h-[350px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, type: 'spring' }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {p.title}
              </h3>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {p.desc}
              </p>
            </div>

            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-blue-600 text-white font-semibold 
                         rounded-lg shadow hover:bg-blue-700"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
