"use client";
import useActive from "@/hook/use-active";
import { motion } from "framer-motion";
import { FaFigma, FaMobile, FaDesktop, FaLightbulb, FaUsers } from "react-icons/fa";
import { SiAdobexd } from "react-icons/si";
import { BiPalette, BiCodeAlt } from "react-icons/bi";
import TitleStroke from "./ui/title-stroke";
import Image from "next/image";

const AboutMe = () => {
  const { ref } = useActive("About");
  
  const skills = [
    { icon: FaFigma, name: "Figma", color: "text-purple-600" },
    { icon: SiAdobexd, name: "Adobe XD", color: "text-pink-600" },
    { icon: BiPalette, name: "Graphics Design", color: "text-blue-600" },
    { icon: FaUsers, name: "User Research", color: "text-green-600" },
    { icon: BiCodeAlt, name: "Prototyping", color: "text-orange-600" },
    { icon: FaMobile, name: "Responsive Design", color: "text-indigo-600" },
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-20 bg-transparent"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-0">
            About Me
          </h2>
          <TitleStroke />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Introduction */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-700">
                I am <span className="font-semibold text-gray-900">Nardos Teshome</span>, a passionate{" "}
                <span className="font-semibold text-blue-600">UI/UX Developer</span> dedicated to crafting 
                exceptional digital experiences that bridge the gap between creativity and functionality.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700">
                My approach centers around <span className="italic text-gray-600">user-centered design principles</span>, 
                ensuring that every interface I create is not only visually appealing but also intuitive and accessible 
                to all users.
              </p>
            </div>

            {/* Highlighted Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border-l-4 border-blue-500"
            >
              <FaLightbulb className="absolute -top-3 -left-3 text-2xl text-yellow-500 bg-white rounded-full p-1" />
              <p className="text-gray-700 font-medium italic">
                &ldquo;Design is not just what it looks like and feels like. Design is how it works.&rdquo;
              </p>
              <p className="text-sm text-gray-500 mt-2">- Steve Jobs</p>
            </motion.div>

            {/* Skills Grid */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">My Expertise</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors duration-300"
                  >
                    <skill.icon className={`text-xl ${skill.color}`} />
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative group">
              {/* Background decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              
              {/* Image container */}
              <div className="relative bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <Image
                  src="/photo_2024-07-29_00-13-12.jpg"
                  alt="Nardos Teshome"
                  width={400}
                  height={384}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center"
              >
                <FaDesktop className="text-white text-lg" />
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center"
              >
                <FaMobile className="text-white text-sm" />
              </motion.div>
            </div>

            {/* Stats or highlights */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-white rounded-xl border border-gray-200"
              >
                <div className="text-2xl font-semibold text-blue-600">12+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-white rounded-xl border border-gray-200"
              >
                <div className="text-2xl font-semibold text-purple-600">3+</div>
                <div className="text-sm text-gray-600">Years</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-white rounded-xl border border-gray-200"
              >
                <div className="text-2xl font-semibold text-green-600">100%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
