"use client";
import React, { useRef } from "react";
import { projectsData } from "@/lib/constant";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

type ProjectProp = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl, href }: ProjectProp) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200"
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={imageUrl}
          alt={`${title} project`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Hover Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            className="flex gap-4"
          >
            {href && (
                             <a
                 href={href}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="bg-white/90 backdrop-blur-sm text-gray-900 p-3 rounded-full hover:bg-white transition-all duration-300"
               >
                 <FaExternalLinkAlt className="text-sm" />
               </a>
            )}
          </motion.div>
        </div>

        {/* Project Badge */}
        <div className="absolute top-4 left-4">
          <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
            Featured
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6">
        {/* Title */}
        <motion.h3 
                      className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300"
          whileHover={{ x: 5 }}
        >
          {title}
        </motion.h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 hover:text-blue-700 transition-all duration-300"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Live Project</span>
          </div>
          
          <motion.div
            className="flex gap-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
                         {href && (
               <a
                 href={href}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 group/btn"
               >
                 View Project
                 <FaExternalLinkAlt className="text-xs group-hover/btn:translate-x-1 transition-transform duration-300" />
               </a>
             )}
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
    </motion.div>
  );
};

export default Project;
