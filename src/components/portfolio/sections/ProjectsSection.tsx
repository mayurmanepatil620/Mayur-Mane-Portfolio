// /* eslint-disable @typescript-eslint/no-explicit-any */

// "use client";

// import { motion } from "framer-motion";
// import { projects } from "@/components/portfolio/portfolioData";
// import { Github, ArrowRight } from "lucide-react";

// export function ProjectsSection() {
//   return (
//     <section id="projects"
//       className="relative min-h-screen bg-[#000000] text-white py-16 md:py-24 overflow-hidden"
//     >
//       {/* 🔮 PERSISTENT BACKGROUND GLOWS */}
//       <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
//         <div className="absolute top-[10%] left-[-10%] w-[70%] h-[30%] bg-[#7e3bed]/10 blur-[80px] rounded-full animate-pulse" />
//         <div className="absolute bottom-[20%] right-[-10%] w-[60%] h-[40%] bg-[#7e3bed]/5 blur-[100px] rounded-full" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(126,59,237,0.03)_0%,transparent_70%)]" />
//       </div>

//       <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
//         {/* ================= HEADER ================= */}
//         <div className="relative mb-12 md:mb-24 flex flex-col items-center">
          
//           {/* Centered Heading */}
//           <motion.h2
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             className="text-4xl md:text-6xl font-black tracking-tight italic leading-none text-center font-['Montserrat']"
//           >
//             PRO<span className="text-[#7e3bed]">JECTS</span>
//             <div className="h-1 w-20 bg-[#7e3bed] mx-auto mt-6 rounded-full shadow-[0_0_15px_#7e3bed]" />
//           </motion.h2>

//           {/* Right-Aligned Button (Using <a> tag for Vite compatibility) */}
//           {/* <motion.div 
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             className="md:absolute md:right-0 md:bottom-0 mt-8 md:mt-0"
//           >
//             <a 
//               href="/projects" // Change this to your actual projects page URL
//               className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#7e3bed]/30 bg-[#7e3bed]/5 text-[#7e3bed] font-bold text-[10px] uppercase tracking-widest hover:bg-[#7e3bed] hover:text-white transition-all duration-300 group italic font-['Montserrat']"
//             >
//               View All Projects
//               <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
//             </a>
//           </motion.div> */}
          
//         </div>

//         {/* ================= PROJECT LIST ================= */}
//         <div className="flex flex-col gap-14 md:gap-32">
//           {projects.map((project, index) => {
//             const isEven = index % 2 === 0;
            
//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 className="group relative grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 items-center"
//               >
                
//                 {/* 🖼️ IMAGE */}
//                 <div className={`lg:col-span-7 order-1 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
//                   <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/5 bg-[#0a0a0a] shadow-xl group-hover:border-[#7e3bed]/30 transition-all duration-500">
//                     <img
//                       src={project.image}
//                       alt={project.title}
//                       className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 opacity-90 group-hover:opacity-100"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
//                   </div>
//                 </div>

//                 {/* 📝 TEXT CONTENT */}
//                 <div className={`lg:col-span-5 flex flex-col order-2 ${isEven ? "lg:order-2 lg:items-start lg:text-left" : "lg:order-1 lg:items-end lg:text-right"}`}>
//                   <div className={`flex items-center gap-2 mb-2 ${isEven ? "justify-start" : "justify-end"}`}>
//                      <span className="text-[#7e3bed] font-mono text-xs font-bold tracking-tighter">0{index + 1}</span>
//                      <div className="h-px w-6 bg-[#7e3bed]/40" />
//                   </div>

//                   <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-3 group-hover:text-[#7e3bed] transition-colors duration-300 italic font-['Montserrat']">
//                     {project.title}
//                   </h3>

//                   <div className="relative">
//                     <p className="text-gray-300 text-sm md:text-base leading-relaxed bg-white/[0.03] backdrop-blur-md p-5 rounded-2xl border border-white/5 shadow-xl relative z-20 group-hover:border-[#7e3bed]/10 transition-all italic font-['Open_Sans']">
//                       {project.description}
//                     </p>
//                   </div>

//                   <div className={`mt-4 flex flex-wrap gap-1.5 ${isEven ? "justify-start" : "lg:justify-end"}`}>
//                     {project.tech.map((t, i) => (
//                       <span key={i} className="px-2.5 py-1 rounded-md bg-[#7e3bed]/5 border border-[#7e3bed]/10 text-[9px] font-bold uppercase tracking-widest text-[#7e3bed]/80 italic">
//                         {t}
//                       </span>
//                     ))}
//                   </div>

//                   <div className={`mt-6 flex items-center gap-3 ${isEven ? "justify-start" : "lg:justify-end"}`}>
//                     <a href={project.href} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black font-bold text-[10px] uppercase tracking-tighter hover:bg-[#7e3bed] hover:text-white transition-all shadow-lg italic font-['Montserrat']">
//                       Source <Github size={12} />
//                     </a>
//                   </div>
//                 </div>

//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }






/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion, Variants } from "framer-motion";
import { projects } from "@/components/portfolio/portfolioData";
import { Github, ExternalLink } from "lucide-react";

export function ProjectsSection() {
  // Animation variants for staggering the text elements
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // FIX: Changed ease to "easeOut" to prevent TypeScript array inference errors
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section 
      id="projects"
      className="relative min-h-screen bg-[#000000] text-white py-20 md:py-32 overflow-hidden font-['Open_Sans']"
    >
      {/* 🔮 PERSISTENT BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[-10%] w-[70%] h-[30%] bg-[#7e3bed]/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[20%] right-[-10%] w-[60%] h-[40%] bg-[#7e3bed]/5 blur-[150px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(126,59,237,0.03)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        
        {/* ================= HEADER ================= */}
        <div className="relative mb-16 md:mb-28 flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-black tracking-tighter italic leading-none text-center font-['Montserrat'] uppercase"
          >
            PRO<span className="text-[#7e3bed]">JECTS</span>
            <div className="h-1.5 w-16 md:w-20 bg-[#7e3bed] mx-auto mt-4 md:mt-6 rounded-full shadow-[0_0_20px_#7e3bed]" />
          </motion.h2>
        </div>

        {/* ================= PROJECT LIST ================= */}
        <div className="flex flex-col gap-20 md:gap-36">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                
                {/* 🖼️ IMAGE CONTAINER */}
                <div className={`lg:col-span-7 order-1 relative z-0 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative aspect-[4/3] sm:aspect-video rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/5 bg-[#0a0a0a] shadow-2xl group-hover:border-[#7e3bed]/40 transition-all duration-700 group-hover:shadow-[0_0_50px_rgba(126,59,237,0.15)]"
                  >
                    <div className="absolute inset-0 bg-[#7e3bed]/0 group-hover:bg-[#7e3bed]/10 transition-colors duration-700 z-10 pointer-events-none" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-90 group-hover:opacity-100"
                    />
                  </motion.div>
                </div>

                {/* 📝 TEXT CONTENT */}
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className={`lg:col-span-5 flex flex-col order-2 relative z-10 items-start text-left ${isEven ? "lg:order-2 lg:items-start lg:text-left" : "lg:order-1 lg:items-end lg:text-right"}`}
                >
                  
                  {/* Number & Line */}
                  <motion.div variants={itemVariants} className={`flex items-center gap-3 mb-2 md:mb-3 w-full ${isEven ? "justify-start" : "justify-start lg:justify-end"}`}>
                     <span className="text-[#7e3bed] font-black text-sm md:text-base font-['Montserrat'] tracking-widest italic">0{index + 1}</span>
                     <div className="h-px w-12 bg-[#7e3bed]/50" />
                  </motion.div>

                  {/* Title */}
                  <motion.h3 variants={itemVariants} className="text-1xl sm:text-2xl md:text-3xl font-black tracking-tight mb-4 group-hover:text-[#7e3bed] transition-colors duration-500 italic font-['Montserrat'] uppercase drop-shadow-lg leading-snug">
                    {project.title}
                  </motion.h3>

                  {/* Description Box */}
                  <motion.div variants={itemVariants} className="relative w-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#7e3bed]/20 to-transparent blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="relative bg-[#0a0a0a]/95 backdrop-blur-xl p-5 sm:p-7 rounded-[1.25rem] md:rounded-[1.5rem] border border-white/10 shadow-2xl group-hover:border-[#7e3bed]/30 transition-all duration-500">
                      <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed italic">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Tech Stack Tags */}
                  <motion.div variants={itemVariants} className={`mt-5 md:mt-7 flex flex-wrap gap-2 w-full ${isEven ? "justify-start" : "justify-start lg:justify-end"}`}>
                    {project.tech.map((t: string, i: number) => (
                      <span 
                        key={i} 
                        className="px-3 md:px-4 py-1.5 md:py-2 rounded-xl bg-white/[0.03] border border-white/10 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:border-[#7e3bed]/30 group-hover:text-white transition-all duration-300 font-mono shadow-md"
                      >
                        <span className="text-[#7e3bed] mr-1.5 opacity-50 group-hover:opacity-100">/</span>
                        {t}
                      </span>
                    ))}
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div variants={itemVariants} className={`mt-6 md:mt-8 flex items-center gap-4 w-full ${isEven ? "justify-start" : "justify-start lg:justify-end"}`}>
                    
                    {/* GitHub Button */}
                    <a 
                      href={project.href} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full bg-[#7e3bed] text-white font-black text-[9px] md:text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(126,59,237,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] active:scale-95 italic font-['Montserrat']"
                    >
                      Source Code <Github size={16} />
                    </a>

                    {/* External Link Demo Button */}
                    <a 
                      href={project.href} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 text-white hover:bg-white/[0.05] hover:border-[#7e3bed] hover:text-[#7e3bed] transition-all duration-300 active:scale-95 shadow-lg"
                      title="Live Demo"
                    >
                      <ExternalLink size={16} />
                    </a>

                  </motion.div>
                  
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}