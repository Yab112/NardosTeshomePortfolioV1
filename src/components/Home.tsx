"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { HiDownload } from "react-icons/hi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import useActive from "@/hook/use-active";

const Home = () => {
  const { ref } = useActive("Home");

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20"></div>
      
      {/* Subtle animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Greeting text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="text-lg sm:text-xl text-gray-600 font-medium">
            Hello, I&apos;m
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-gray-900 mb-6"
        >
          Nardos Teshome
        </motion.h1>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <div className="mb-6">
            <div className="relative z-10 inline-block bg-white rounded-lg text-2xl sm:text-3xl lg:text-4xl font-semibold shadow-md" style={{ transform: 'skew(-6deg)', padding: '0.25rem 1.5rem 0.5rem' }}>
              <span className="inline-block text-blue-600" style={{ transform: 'skew(6deg)' }}>
                UI/UX Developer
              </span>
            </div>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I craft intuitive digital experiences that blend creativity with functionality, 
            ensuring every interaction feels seamless and meaningful.
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link
            href="#contact"
            className="group bg-blue-600 text-white px-8 py-4 rounded-full text-lg hover:bg-blue-700 transition-all duration-300 flex items-center gap-2"
          >
            Let&apos;s Work Together
            <AiOutlineArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          
          <a
            href="/Nardos-Teshome cv.pdf"
            download
            className="group bg-white text-gray-900 px-8 py-4 rounded-full text-lg border-2 border-blue-300 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 flex items-center gap-2"
          >
            Download CV
            <HiDownload className="group-hover:scale-110 transition-transform duration-300" />
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="https://www.linkedin.com/in/nardos-teshome-078ba12b8/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 bg-white rounded-full border border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-1"
          >
            <FaLinkedinIn className="text-2xl text-blue-600 group-hover:scale-110 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
