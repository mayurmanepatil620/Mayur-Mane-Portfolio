// "use client";

// import { motion } from "framer-motion";
// import { GraduationCap, School, BookOpen, Award } from "lucide-react";

// export function EducationSection() {
//   const education = [
//     {
//       degree: "B.Tech – Computer Science Engineering (Data Science)",
//       institution: "D. Y. Patil College of Engineering and Technology, Kolhapur",
//       duration: "2022 – 2026",
//       metricLabel: "CGPA",
//       metricValue: "7.3 / 10",
//       status: "Pursuing",
//       icon: <GraduationCap size={24} />,
//     },
//     {
//       degree: "Higher Secondary (12th)",
//       institution: "Willingdon College, Sangli",
//       duration: "2021 – 2022",
//       metricLabel: "Percentage",
//       metricValue: "51.17%",
//       icon: <School size={24} />,
//     },
//     {
//       degree: "Secondary (10th)",
//       institution: "Shivaji High School, Bavachi",
//       duration: "2019 – 2020",
//       metricLabel: "Percentage",
//       metricValue: "85.20%",
//       icon: <BookOpen size={24} />,
//     },
//   ];

//   return (
//     <section className="relative bg-[#000000] text-white py-24 md:py-32 overflow-hidden">
      
//       {/* 🌌 Atmospheric Violet Accents */}
//       <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#7e3bed]/5 blur-[120px] rounded-full pointer-events-none" />
//       <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-[#7e3bed]/5 blur-[120px] rounded-full pointer-events-none" />

//       <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
//         {/* ================= HEADER ================= */}
//         <div className="text-center mb-20 md:mb-24">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.5 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7e3bed]/10 border border-[#7e3bed]/30 text-[#7e3bed] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4"
//           >
//              Academic Background
//           </motion.div>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-6xl font-black italic tracking-tighter"
//           >
//             EDU<span className="text-[#7e3bed]">CATION</span>
//             <div className="h-1 w-20 bg-[#7e3bed] mx-auto mt-6 rounded-full shadow-[0_0_15px_#7e3bed]" />
//           </motion.h2>
//         </div>

//         {/* ================= EDUCATION TIMELINE ================= */}
//         <div className="space-y-10 md:space-y-12">
//           {education.map((edu, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ delay: idx * 0.1 }}
//               viewport={{ once: true }}
//               className="group relative"
//             >
//               {/* Vertical Connector Line */}
//               {idx !== education.length - 1 && (
//                 <div className="absolute left-7 md:left-8 top-16 md:top-20 bottom-[-2.5rem] md:bottom-[-3rem] w-px bg-gradient-to-b from-[#7e3bed] to-transparent hidden sm:block " />
//               )}

//               <div className="flex flex-col sm:flex-row items-start gap-6 md:gap-10">
                
//                 {/* 💎 Icon Node */}
//                 <div className="relative flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl md:rounded-[1.5rem] bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#7e3bed] group-hover:bg-[#7e3bed] group-hover:text-white transition-all duration-500 shadow-xl z-20">
//                   {edu.icon}
//                 </div>

//                 {/* 📝 Info Card */}
//                 <div className="flex-grow p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl hover:border-[#7e3bed]/30 transition-all duration-500 shadow-2xl relative overflow-hidden italic ">
                  
//                   {/* Glass Card Header */}
//                   <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-6">
//                     <h3 className="text-lg md:text-2xl font-bold tracking-tight text-white group-hover:text-[#7e3bed] transition-colors leading-tight max-w-lg">
//                       {edu.degree}
//                     </h3>
//                     <span className="text-[10px] md:text-xs font-mono text-[#7e3bed] bg-[#7e3bed]/10 px-4 py-1.5 rounded-full w-fit whitespace-nowrap border border-[#7e3bed]/20">
//                       {edu.duration}
//                     </span>
//                   </div>

//                   <p className="text-gray-400 text-sm md:text-base font-medium mb-6 flex items-start md:items-center gap-2 leading-relaxed">
//                     <span className="w-4 h-[1px] bg-gray-600 mt-2.5 md:mt-0 flex-shrink-0" /> {edu.institution}
//                   </p>

//                   {/* Metric Pill */}
//                   <div className="inline-flex items-center gap-3 md:gap-4 px-4 md:px-5 py-2 md:py-2.5 rounded-xl md:rounded-2xl bg-[#000000] border border-white/10 group-hover:border-[#7e3bed]/40 transition-all">
//                     <Award size={14} className="text-[#7e3bed] md:w-4 md:h-4" />
//                     <span className="text-xs md:text-sm font-bold text-gray-300">
//                       {edu.metricLabel}: <span className="text-white text-base md:text-lg ml-1">{edu.metricValue}</span>
//                     </span>
//                     {edu.status && (
//                       <span className="text-[9px] md:text-[10px] uppercase font-black tracking-tighter text-gray-500 ml-1 md:ml-2">
//                         ({edu.status})
//                       </span>
//                     )}
//                   </div>

//                   {/* Subtle Background Number (Responsive Size) */}
//                   <div className="absolute -bottom-2 md:-bottom-4 -right-2 text-6xl md:text-8xl font-black text-white/[0.02] pointer-events-none select-none italic group-hover:text-[#7e3bed]/5 transition-all">
//                     0{idx + 1}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }











"use client";

import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen, Award } from "lucide-react";

export function EducationSection() {
  const education = [
    {
      degree: "B.Tech – Computer Science Engineering (Data Science)",
      institution: "D. Y. Patil College of Engineering and Technology, Kolhapur",
      duration: "2022 – 2026",
      metricLabel: "CGPA",
      metricValue: "7.3 / 10",
      status: "Pursuing",
      icon: <GraduationCap size={24} />,
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "Willingdon College, Sangli",
      duration: "2021 – 2022",
      metricLabel: "Percentage",
      metricValue: "51.17%",
      icon: <School size={24} />,
    },
    {
      degree: "Secondary (10th)",
      institution: "Shivaji High School, Bavachi",
      duration: "2019 – 2020",
      metricLabel: "Percentage",
      metricValue: "85.20%",
      icon: <BookOpen size={24} />,
    },
  ];

  return (
    <section id="education" className="relative min-h-screen bg-[#000000] text-white py-20 md:py-32 overflow-hidden font-['Open_Sans']">
      
      {/* 🌌 Atmospheric Violet Accents */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#7e3bed]/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-[#7e3bed]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-5 sm:px-6 max-w-5xl relative z-10">
        
        {/* ================= HEADER ================= */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7e3bed]/10 border border-[#7e3bed]/30 text-[#7e3bed] text-[10px] md:text-xs font-black uppercase tracking-widest mb-4 font-['Montserrat']"
          >
             Academic Background
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black italic tracking-tighter font-['Montserrat'] uppercase drop-shadow-lg"
          >
            EDU<span className="text-[#7e3bed]">CATION</span>
            <div className="h-1.5 w-16 md:w-20 bg-[#7e3bed] mx-auto mt-4 md:mt-6 rounded-full shadow-[0_0_20px_#7e3bed]" />
          </motion.h2>
        </div>

        {/* ================= EDUCATION TIMELINE ================= */}
        <div className="relative space-y-8 md:space-y-12 max-w-4xl mx-auto">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative flex items-stretch gap-4 md:gap-8"
            >
              
              {/* ================= LEFT COLUMN: TIMELINE CONNECTOR ================= */}
              {/* This column is strictly locked in width so the timeline never breaks on mobile */}
              <div className="relative flex flex-col items-center w-14 md:w-16 shrink-0">
                
                {/* 💎 Icon Node */}
                <div className="relative z-20 w-14 h-14 md:w-16 md:h-16 rounded-[1rem] md:rounded-[1.25rem] bg-[#0a0a0a] border border-[#7e3bed]/40 flex items-center justify-center text-[#7e3bed] group-hover:bg-[#7e3bed] group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(126,59,237,0.2)] group-hover:shadow-[0_0_30px_rgba(126,59,237,0.6)] group-hover:scale-110">
                  {/* Scale icon down slightly on mobile */}
                  <div className="scale-90 md:scale-100">
                    {edu.icon}
                  </div>
                </div>

                {/* 📍 Vertical Connector Line (Hidden on the last item) */}
                {idx !== education.length - 1 && (
                  <div className="absolute top-14 md:top-16 bottom-[-2rem] md:bottom-[-3rem] w-[2px] bg-gradient-to-b from-[#7e3bed]/60 via-[#7e3bed]/10 to-transparent" />
                )}
              </div>

              {/* ================= RIGHT COLUMN: INFO CARD ================= */}
              <div className="flex-1 pb-4 md:pb-0">
                <div className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl hover:border-[#7e3bed]/40 hover:bg-white/[0.04] transition-all duration-500 shadow-xl relative overflow-hidden italic">
                  
                  {/* Subtle Background Glow inside Card */}
                  <div className="absolute inset-0 bg-[#7e3bed]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Glass Card Header (Title & Year) */}
                  <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-3 mb-4 relative z-10">
                    <h3 className="text-[1.15rem] md:text-1xl font-black tracking-tight text-white group-hover:text-[#7e3bed] transition-colors leading-snug font-['Montserrat'] uppercase">
                      {edu.degree}
                    </h3>
                    
                    {/* Duration Badge (Mobile friendly wrapping) */}
                    <span className="text-[9px] md:text-[10px] font-mono font-bold text-[#7e3bed] bg-[#7e3bed]/10 px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-full w-fit whitespace-nowrap border border-[#7e3bed]/20 shadow-sm shrink-0">
                      {edu.duration}
                    </span>
                  </div>

                  {/* Institution text */}
                  <p className="text-gray-400 text-xs md:text-sm font-medium mb-6 flex items-start gap-2 leading-relaxed relative z-10">
                    <span className="w-3 md:w-4 h-[2px] bg-[#7e3bed]/50 mt-2 flex-shrink-0 rounded-full" /> 
                    {edu.institution}
                  </p>

                  {/* Metric Pill */}
                  <div className="inline-flex items-center gap-2 md:gap-3 px-4 py-2.5 md:px-5 md:py-3 rounded-xl bg-[#000000] border border-white/10 group-hover:border-[#7e3bed]/40 transition-all relative z-10 shadow-inner">
                    <Award size={14} className="text-[#7e3bed] shrink-0" />
                    <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">
                      {edu.metricLabel}: <span className="text-white text-sm md:text-base ml-1 font-black">{edu.metricValue}</span>
                    </span>
                    
                    {/* Status Text (Only shows if it exists) */}
                    {edu.status && (
                      <span className="text-[8px] md:text-[9px] uppercase font-black tracking-widest text-[#7e3bed] ml-1 md:ml-2 bg-[#7e3bed]/10 px-2 py-0.5 rounded-md">
                        {edu.status}
                      </span>
                    )}
                  </div>

                  {/* Subtle Background Number */}
                  <div className="absolute -bottom-2 md:-bottom-4 -right-2 text-6xl md:text-8xl font-black text-white/[0.02] pointer-events-none select-none italic font-['Montserrat'] group-hover:text-[#7e3bed]/5 transition-all duration-700">
                    0{idx + 1}
                  </div>

                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}