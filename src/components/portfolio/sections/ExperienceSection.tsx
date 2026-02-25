"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function ExperienceSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  // Opacity transformation for the line to fade out at the very end
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  const experiences = [
    {
      date: "Jan 2026 – Present",
      role: "Web Developer",
      company: "Musing Quills",
      location: "Remote",
      description:
        "Developing responsive web applications using React and Tailwind CSS with a focus on high-performance UI components.",
      tags: ["React", "Tailwind", "Framer Motion", "TypeScript"],
    },
    {
      date: "06/2025 – 10/2025",
      role: "Data Analyst Intern",
      company: "IIT Bombay",
      location: "Mumbai, India",
      description:
        "Engineered preprocessing pipelines and implemented machine learning models for classification tasks using large datasets.",
      tags: ["Python", "Pandas", "Scikit-Learn", "Matplotlib"],
    },
    {
      date: "06/2025 – 07/2025",
      role: "Python ML & AI Intern",
      company: "Softron Technology",
      location: "Kolhapur, India",
      description:
        "Developed predictive systems using neural networks and deep learning frameworks to solve real-world automation problems.",
      tags: ["TensorFlow", "Keras", "Deep Learning", "NumPy"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative min-h-screen bg-[#000000] text-white py-20 md:py-32 overflow-hidden w-full font-['Open_Sans']"
    >
      {/* 🔮 Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-[#7e3bed]/10 blur-[100px] md:blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-[#7e3bed]/5 blur-[100px] md:blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter italic font-['Montserrat'] uppercase">
            EXPER<span className="text-[#7e3bed]">IENCE</span>
          </h2>
          
          <div className="h-1 md:h-1.5 w-16 md:w-24 bg-[#7e3bed] mx-auto mt-4 rounded-full shadow-[0_0_15px_#7e3bed]" />

            <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-4 text-gray-500 font-mono tracking-widest text-sm uppercase"
          >
            Engineering impact at scale.
          </motion.p>
        </motion.div>

        {/* ================= TIMELINE CONTAINER ================= */}
        <div className="relative">
          
          {/* Static Background Line (Hidden on Mobile) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          {/* ⚡ Dynamic Neon Laser Line (Hidden on Mobile) */}
          <motion.div
            style={{ scaleY, opacity }}
            className="hidden md:block absolute left-1/2 top-0 w-[2px] h-full 
                       origin-top -translate-x-1/2 
                       bg-gradient-to-b from-transparent via-[#7e3bed] to-transparent
                       shadow-[0_0_15px_#7e3bed]"
          />

          <div className="space-y-16 md:space-y-32">
            {experiences.map((exp, index) => {
              const isRight = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row items-center justify-center w-full"
                >
                  {/* 💎 Animated Center Dot (Hidden on Mobile) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20 items-center justify-center">
                    <motion.div 
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute h-8 w-8 rounded-full bg-[#7e3bed]/20 blur-md"
                    />
                    <div className="h-4 w-4 rounded-full bg-[#7e3bed] border-2 border-black shadow-[0_0_10px_#7e3bed]" />
                  </div>

                  {/* ================= CONTENT BOX ================= */}
                  <motion.div
                    initial={{ opacity: 0, y: 20, x: 0 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-50px" }}
                    // md: styles handle the alternating left/right positioning for desktop
                    className={`w-full md:w-[45%] ${isRight ? "md:ml-auto md:pl-16" : "md:mr-auto md:pr-16"}`}
                  >
                    <div className="group relative p-6 md:p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-[#7e3bed]/50 transition-all duration-500 shadow-2xl overflow-hidden">
                      
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-[#7e3bed]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      <div className="relative z-10">
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-5 md:mb-6">
                            <span className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-[#7e3bed]/10 border border-[#7e3bed]/30 text-[#7e3bed] text-[10px] font-bold uppercase tracking-widest italic font-['Montserrat']">
                                <Calendar size={12} /> {exp.date}
                            </span>
                            <span className="flex items-center gap-1.5 text-gray-400 text-[10px] uppercase font-bold tracking-wider italic font-['Montserrat']">
                                <MapPin size={12} className="text-[#7e3bed]" /> {exp.location}
                            </span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-[#7e3bed] transition-colors italic font-['Montserrat'] uppercase">
                          {exp.role}
                        </h3>

                        <div className="flex items-center gap-2 mt-2 text-gray-300 font-bold uppercase text-[10px] tracking-widest italic font-['Montserrat']">
                          <Briefcase size={12} className="text-[#7e3bed]" />
                          {exp.company}
                        </div>

                        <p className="mt-5 text-gray-400 leading-relaxed text-sm md:text-base italic">
                          {exp.description}
                        </p>

                        <div className="mt-6 md:mt-8 flex flex-wrap gap-2">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1.5 text-[9px] md:text-[10px] font-bold uppercase tracking-widest rounded-lg 
                                         bg-white/5 text-gray-300 italic font-['Montserrat']
                                         border border-white/10 group-hover:border-[#7e3bed]/30 group-hover:text-[#7e3bed] transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* ================= HUGE NUMBER LABEL (Hidden on Mobile) ================= */}
                  <div className={`hidden md:block w-[45%] text-white font-black text-8xl opacity-[0.03] select-none font-['Montserrat'] italic tracking-tighter ${isRight ? "text-right pr-16" : "text-left pl-16"}`}>
                    0{index + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}





