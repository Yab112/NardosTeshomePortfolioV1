"use client";

import React from "react";
import { motion } from "framer-motion";
import { service } from "@/lib/constant";
import useActive from "@/hook/use-active";
import TitleStroke from "./ui/title-stroke";
import { 
  FaCode, 
  FaDatabase, 
  FaUsers, 
  FaMobile,
  FaPalette,
  FaRocket,
  FaLightbulb,
  FaShieldAlt
} from "react-icons/fa";

type ServiceProp = (typeof service)[number];

const serviceIcons = [
  FaCode,
  FaDatabase,
  FaUsers,
  FaMobile
];

export default function Service() {
    const { ref } = useActive("Services");
    
    return (
        <section
            ref={ref}
            id="services"
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
                    <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-0">
                        Services
                    </h2>
                    <TitleStroke />
                    <p className="text-lg text-gray-600 mt-8 max-w-2xl mx-auto">
                        Comprehensive solutions to bring your digital vision to life
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {service?.map((serviceItem: ServiceProp, index: number) => {
                        const IconComponent = serviceIcons[index] || FaCode;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                <ServiceCard 
                                    service={serviceItem} 
                                    icon={IconComponent}
                                    index={index}
                                />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Additional Features Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                >
                    <FeatureCard 
                        icon={FaPalette}
                        title="Creative Design"
                        description="Unique and innovative design solutions"
                    />
                    <FeatureCard 
                        icon={FaRocket}
                        title="Fast Delivery"
                        description="Quick turnaround times without compromising quality"
                    />
                    <FeatureCard 
                        icon={FaLightbulb}
                        title="Innovation"
                        description="Cutting-edge approaches and modern technologies"
                    />
                    <FeatureCard 
                        icon={FaShieldAlt}
                        title="Quality Assurance"
                        description="Thorough testing and quality checks"
                    />
                </motion.div>
            </div>
        </section>
    );
}

const ServiceCard = ({ service, icon: IconComponent, index }: { 
    service: ServiceProp, 
    icon: React.ComponentType<{ className?: string }>,
    index: number 
}) => {
    const [isExpanded, setIsExpanded] = React.useState(false);
    
    // Background images for each service
    const backgroundImages = [
        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    ];
    
    return (
        <motion.div
            className="relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-300 group cursor-pointer"
            whileHover={{ y: -5 }}
            onClick={() => setIsExpanded(!isExpanded)}
        >
            {/* Background Image/Pattern */}
            <div 
                className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                style={{ background: backgroundImages[index] }}
            />
            
            {/* Content */}
            <div className="relative p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <IconComponent className="text-3xl text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                        <div>
                            <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium mb-2">
                                {service.tag}
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                {service.title}
                            </h3>
                        </div>
                    </div>
                    
                    {/* Expand/Collapse Icon */}
                    <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-400 group-hover:text-gray-600 transition-colors duration-300"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </motion.div>
                </div>

                {/* Basic Description (Always Visible) */}
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
                    {service.description}
                </p>

                {/* Expandable Content */}
                <motion.div
                    initial={false}
                    animate={{ 
                        height: isExpanded ? "auto" : 0,
                        opacity: isExpanded ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                >
                    <div className="pt-4 border-t border-gray-100">
                        {/* Full Description */}
                        <p className="text-gray-600 leading-relaxed mb-4">
                            {service.description}
                        </p>
                        
                        {/* Header Text */}
                        <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-blue-500">
                            <p className="text-sm text-gray-700 font-medium">
                                {service.headerText}
                            </p>
                        </div>
                        
                        {/* Service Features */}
                        <div className="mt-4 grid grid-cols-2 gap-2">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span>Modern Design</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                <span>Responsive</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span>Fast Performance</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                <span>SEO Optimized</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

const FeatureCard = ({ icon: IconComponent, title, description }: {
    icon: React.ComponentType<{ className?: string }>,
    title: string,
    description: string
}) => {
    return (
        <motion.div
            className="text-center group"
            whileHover={{ y: -2 }}
        >
            <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl mb-4 mx-auto group-hover:bg-blue-100 transition-colors duration-300">
                <IconComponent className="text-gray-600 text-xl group-hover:text-blue-600 transition-colors duration-300" />
            </div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">{title}</h4>
            <p className="text-xs text-gray-600">{description}</p>
        </motion.div>
    );
};

