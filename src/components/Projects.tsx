"use client";
import { projectsData } from "@/lib/constant";
import React, { useState } from "react";
import useActive from "@/hook/use-active";
import { motion } from "framer-motion";
import TitleStroke from "./ui/title-stroke";
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";

type ProjectProp = (typeof projectsData)[number];

const Projects = () => {
  const { ref } = useActive("Projects", 0.4);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  
  // Calculate pagination
  const totalPages = Math.ceil(projectsData.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = projectsData.slice(startIndex, endIndex);
  
  const goToPage = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of projects section
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} id="projects" className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-0">
            My Projects
          </h2>
          <TitleStroke />
          <p className="text-lg text-gray-600 mt-8 max-w-2xl mx-auto">
            Explore my latest work showcasing innovative UI/UX designs and development projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentProjects.map((project: ProjectProp, index: number) => (
            <motion.div
              key={startIndex + index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ModernProjectCard {...project} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mt-12"
          >
                         {/* Previous Button */}
             <button
               onClick={() => goToPage(currentPage - 1)}
               disabled={currentPage === 1}
               className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
             >
               <FaChevronLeft className="text-xs" />
               Previous
             </button>

                         {/* Page Numbers */}
             <div className="flex items-center gap-2">
               {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                 <button
                   key={page}
                   onClick={() => goToPage(page)}
                   className={`w-10 h-10 rounded-full text-sm transition-all duration-300 ${
                     currentPage === page
                       ? 'bg-blue-600 text-white'
                       : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                   }`}
                 >
                   {page}
                 </button>
               ))}
             </div>

                         {/* Next Button */}
             <button
               onClick={() => goToPage(currentPage + 1)}
               disabled={currentPage === totalPages}
               className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
             >
               Next
               <FaChevronRight className="text-xs" />
             </button>
          </motion.div>
        )}

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-semibold text-blue-600 mb-2">{projectsData.length}+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-semibold text-purple-600 mb-2">100%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-semibold text-green-600 mb-2">3+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-semibold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ModernProjectCard = ({ title, description, tags, imageUrl, href, index }: ProjectProp & { index: number }) => {
  return (
    <motion.div
      className="group relative bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-500"
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={imageUrl}
          alt={`${title} project`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Hover Content */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="flex gap-4">
            {href && (
              <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/90 backdrop-blur-sm text-gray-900 p-4 rounded-2xl hover:bg-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaExternalLinkAlt className="text-xl" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Project Badge */}
        <div className="absolute top-4 left-4">
          <div className="bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
            Featured
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
            {tags[0]}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.slice(0, 3).map((tag, tagIndex) => (
            <motion.span
              key={tagIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: tagIndex * 0.1 }}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 hover:text-blue-700 transition-all duration-300"
            >
              {tag}
            </motion.span>
          ))}
          {tags.length > 3 && (
            <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-xs font-medium">
              +{tags.length - 3}
            </span>
          )}
        </div>

                 {/* Action Button */}
         {href && (
           <motion.a
             href={href}
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center gap-2 bg-none text-blue-800 px-6 py-3 rounded-full text-sm font-medium hover:text-blue-600 transition-all duration-300 group/btn"
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
           >
             View Project
             <FaExternalLinkAlt className="text-xs group-hover/btn:translate-x-1 transition-transform duration-300" />
           </motion.a>
         )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
    </motion.div>
  );
};

export default Projects;
