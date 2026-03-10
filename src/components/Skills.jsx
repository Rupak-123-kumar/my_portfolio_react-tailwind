import React from "react";
import { motion } from "framer-motion";


// Skill list with logo URLs
const skills = [
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
{ name: "Tailwind CSS", logo: "https://img.icons8.com/color/480/tailwindcss.png" 
},
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-50">
      
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-gray-900"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-xl border border-gray-200 cursor-pointer hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.10 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className={`w-20 h-20 flex items-center justify-center mb-4 rounded-xl ${skill.name === "Express" ? "bg-black" : ""}`}>
              <img
                src={skill.logo}
                alt={skill.name}
                className={`w-14 h-14 object-contain ${skill.name === "Express" ? "invert" : ""}`}
              />
            </div>

            <p className="text-xl font-semibold text-gray-800">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}
