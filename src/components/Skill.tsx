"use client";
import { motion } from "framer-motion";
import useActive from "@/hook/use-active";
import TitleStroke from "./ui/title-stroke";
import { 
  FaFigma, 
  FaUsers, 
  FaMobile, 
  FaDesktop, 
  FaPalette, 
  FaCode,
  FaEye,
  FaCogs,
  FaShieldAlt,
  FaLayerGroup
} from "react-icons/fa";

// Categorized skills with proficiency levels
const skillsCategories = [
  {
    category: "Design & Research",
    icon: FaPalette,
    skills: [
      { name: "User Research & Analysis", proficiency: 95 },
      { name: "UI/UX Design", proficiency: 90 },
      { name: "Information Architecture", proficiency: 85 },
      { name: "Design Systems", proficiency: 88 }
    ]
  },
  {
    category: "Tools & Prototyping",
    icon: FaFigma,
    skills: [
      { name: "Figma", proficiency: 95 },
      { name: "Adobe XD", proficiency: 85 },
      { name: "Sketch", proficiency: 80 },
      { name: "Prototyping", proficiency: 92 }
    ]
  },
  
];

const Skill = () => {
  const { ref } = useActive("Skills");
  
  return (
    <section
      ref={ref}
      id="skills"
      className="relative py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
                     <h2 className="text-4xl sm:text-5xl font-medium text-gray-900 mb-0">
             Skills & Expertise
           </h2>
          <TitleStroke />
          <p className="text-lg text-gray-600 mt-8 max-w-2xl mx-auto">
            Comprehensive skill set across design, development, and user experience
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillsCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl">
                  <category.icon className="text-blue-600 text-xl" />
                </div>
                                 <h3 className="text-xl font-medium text-gray-900">{category.category}</h3>
              </div>

                             {/* Skills List */}
               <div className="flex flex-wrap gap-2">
                 {category.skills.map((skill, skillIndex) => (
                   <motion.div
                     key={skillIndex}
                     initial={{ opacity: 0, scale: 0.8 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                     viewport={{ once: true }}
                     className="border border-gray-300 rounded-full px-3 py-1 inline-flex items-center justify-center bg-white font-medium text-gray-700 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 text-sm"
                   >
                     {skill.name}
                   </motion.div>
                 ))}
               </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
                     <h3 className="text-2xl font-medium text-gray-900 text-center mb-8">Additional Skills</h3>
          <div className="flex gap-3 flex-wrap items-center justify-center">
            {[
              "Wireframing", "Prototyping", "User Testing", "Design Thinking", 
              "Agile Methodology", "Version Control", "Performance Optimization",
              "Cross-browser Compatibility", "SEO Principles", "Analytics"
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="border border-gray-300 rounded-full px-4 py-2 inline-flex items-center justify-center bg-white font-medium text-gray-700 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;
