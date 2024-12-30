"use client";
import useActive from "@/hook/use-active";
import { motion } from "framer-motion";

const AboutMe = () => {
  const { ref } = useActive("About");
  return (
<section
  ref={ref}
  id="about"
  className="relative max-w-6xl mx-auto px-4 py-4 scroll-mt-12 sm:mt-16 mb-32"
>
  <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
    <div className="flex-1 text-center md:text-left space-y-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center ">
        About Me
      </h1>

      <div className="space-y-6 text-lg">
        <p className="text-lg leading-relaxed text-gray-800">
          I am Nardos Teshome, a passionate
          <span className="font-semibold text-indigo-600"> UI/UX Developer </span>
          focused on designing intuitive and user-friendly digital experiences.
          <span className="italic text-gray-600">
            My dedication lies in blending aesthetics with functionality to create meaningful interactions.
          </span>
          My expertise includes:
          <span className="text-cyan-500 font-semibold">
            User Research, Wireframing, Prototyping, Figma, Adobe XD, and Responsive Design.
          </span>
          I am always eager to
          <span className="underline text-indigo-500"> refine my skills </span>
          and embrace emerging design trends.
        </p>

        <p className="border border-gradient-to-br from-cyan-100 to-sky-700  p-4 -rotate-3 border-l-2 border-l-purple-600 backdrop-blur-lg shadow-2xl shadow-cyan-100">
          <span className="italic">When I am not designing,</span> I enjoy exploring new design tools, creating mobile-friendly layouts, and
          <span className="font-semibold"> experimenting with innovative design concepts</span>.
        </p>
      </div>
    </div>

    <div className="relative w-72 h-96 flex-shrink-0">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-[40px] rotate-3 transition-transform duration-300 hover:rotate-6">
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-12 gap-4">
          {Array.from({ length: 96 }).map((_, i) => (
            <div key={i} className="bg-cyan-300/20 backdrop-blur-sm" />
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default AboutMe;
