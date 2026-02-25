// "use client";

// import { motion } from "framer-motion";
// import { certifications } from "@/components/portfolio/portfolioData";
// import { Award, CheckCircle2, ShieldCheck, ExternalLink } from "lucide-react";

// export function CertificationsSection() {
//   return (
//     <section
//       id="certifications"
//       className="relative min-h-screen bg-[#000000] text-white py-32 overflow-hidden"
//     >
//       {/* 🌌 Background Depth */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
//         <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#7e3bed]/5 blur-[120px] rounded-full" />
//         <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#7e3bed]/5 blur-[120px] rounded-full" />
//       </div>

//       <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
//         {/* ================= HEADER ================= */}
//         <div className="text-center mb-24">
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="flex items-center justify-center gap-2 text-[#7e3bed] font-mono text-xs tracking-[0.4em] uppercase mb-4"
//           >
//             <ShieldCheck size={14} /> Verified Achievements
//           </motion.div>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="text-5xl md:text-6xl font-black tracking-tighter italic"
//           >
//             CERTIFI<span className="text-[#7e3bed]">CATIONS</span>
//           </motion.h2>
//           <div className="h-1 w-20 bg-[#7e3bed] mx-auto mt-6 rounded-full shadow-[0_0_15px_#7e3bed]" />
//         </div>

//         {/* ================= CERTIFICATIONS GRID ================= */}
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 italic">
//           {certifications.map((cert, index) => (
//             <motion.a
//               key={index}
//               href={cert.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ delay: index * 0.05 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -8 }}
//               className="group relative p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl hover:border-[#7e3bed]/40 transition-all duration-500 flex flex-col justify-between shadow-2xl cursor-pointer"
//             >
//               {/* Top Section */}
//               <div>
//                 <div className="mb-6 inline-flex p-3 rounded-2xl bg-[#7e3bed]/10 text-[#7e3bed] group-hover:bg-[#7e3bed] group-hover:text-white transition-all duration-500 shadow-lg">
//                   <Award size={20} />
//                 </div>
                
//                 <h3 className="text-lg font-bold leading-tight text-white group-hover:text-[#7e3bed] transition-colors line-clamp-2">
//                   {cert.title}
//                 </h3>
                
//                 <p className="mt-3 text-xs text-gray-400 font-medium uppercase tracking-wider flex items-center gap-2">
//                    <CheckCircle2 size={12} className="text-[#7e3bed]" /> {cert.issuer}
//                 </p>
//               </div>

//               {/* Bottom Section */}
//               <div className="mt-8 flex items-center justify-between">
//                 <span className="text-[10px] font-mono text-gray-500 tracking-tighter uppercase">
//                   Issued: {cert.year}
//                 </span>
                
//                 <div className="flex items-center gap-2 text-[#7e3bed] text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
//                   View  <ExternalLink size={12} />
//                 </div>
//               </div>

//               {/* Decorative Corner Glow */}
//               <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
//                 <div className="w-1.5 h-1.5 bg-[#7e3bed] rounded-full blur-[2px] animate-pulse" />
//               </div>
//             </motion.a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }








"use client";

import { motion, Variants } from "framer-motion";
import { certifications } from "@/components/portfolio/portfolioData";
import { Award, CheckCircle2, ShieldCheck, ExternalLink } from "lucide-react";

export function CertificationsSection() {
  // 🎭 Premium Staggered Animation Container
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // 🎭 3D Spring Animation for Each Card
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, rotateX: -15, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        mass: 1
      } 
    },
  };

  return (
    <section
      id="certifications"
      className="relative min-h-screen bg-[#000000] text-white py-20 md:py-32 overflow-hidden font-['Open_Sans']"
    >
      {/* 🌌 Animated Background Depth */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <motion.div 
          animate={{ x: [0, 30, -30, 0], y: [0, -30, 30, 0] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
          className="absolute top-[10%] right-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#7e3bed]/10 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ x: [0, -30, 30, 0], y: [0, 30, -30, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          className="absolute bottom-[10%] left-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#7e3bed]/5 blur-[120px] rounded-full" 
        />
      </div>

      <div className="container mx-auto px-5 sm:px-6 max-w-7xl relative z-10">
        
        {/* ================= HEADER ================= */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#7e3bed]/10 border border-[#7e3bed]/30 text-[#7e3bed] font-black text-[10px] md:text-xs tracking-widest uppercase mb-4 font-['Montserrat']"
          >
            <ShieldCheck size={14} /> Verified Achievements
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tighter italic font-['Montserrat'] uppercase drop-shadow-lg"
          >
            CERTIFI<span className="text-[#7e3bed]">CATIONS</span>
          </motion.h2>
          <div className="h-1.5 w-16 md:w-20 bg-[#7e3bed] mx-auto mt-4 md:mt-6 rounded-full shadow-[0_0_20px_#7e3bed]" />
        </div>

        {/* ================= CERTIFICATIONS GRID ================= */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 perspective-[1000px]"
        >
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-6 md:p-8 rounded-[2rem] bg-[#0a0a0a]/80 border border-white/5 backdrop-blur-xl hover:border-[#7e3bed]/40 transition-all duration-500 flex flex-col justify-between shadow-2xl cursor-pointer overflow-hidden"
            >
              {/* Inner Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#7e3bed]/0 via-transparent to-[#7e3bed]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Top Section */}
              <div className="relative z-10">
                <div className="mb-6 inline-flex p-3 md:p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-[#7e3bed] group-hover:bg-[#7e3bed] group-hover:text-white group-hover:border-[#7e3bed] transition-all duration-500 shadow-lg">
                  <Award size={24} className="group-hover:scale-110 transition-transform duration-500" />
                </div>
                
                <h3 className="text-lg md:text-xl font-black leading-snug text-white group-hover:text-[#7e3bed] transition-colors line-clamp-2 italic font-['Montserrat'] uppercase">
                  {cert.title}
                </h3>
                
                <p className="mt-3 text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest flex items-center gap-2">
                   <CheckCircle2 size={12} className="text-[#7e3bed]" /> {cert.issuer}
                </p>
              </div>

              {/* Bottom Section */}
              <div className="mt-8 flex items-center justify-between relative z-10">
                <span className="text-[10px] font-mono font-bold text-gray-500 tracking-widest uppercase bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                  Issued: {cert.year}
                </span>
                
                <div className="flex items-center gap-2 text-[#7e3bed] text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 bg-[#7e3bed]/10 px-3 py-1.5 rounded-lg border border-[#7e3bed]/20">
                  View <ExternalLink size={12} />
                </div>
              </div>

              {/* Decorative Corner Pulse Glow */}
              <div className="absolute top-0 right-0 p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-2 h-2 bg-[#7e3bed] rounded-full blur-[2px] animate-pulse shadow-[0_0_10px_#7e3bed]" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}