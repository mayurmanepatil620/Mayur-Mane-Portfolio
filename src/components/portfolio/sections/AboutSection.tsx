
// "use client";

// import { motion } from "framer-motion";
// import { User, Code2, GraduationCap, Laptop, Rocket, Zap } from "lucide-react";

// export function AboutSection() {
//   // Smooth scroll function for the "Let's Talk" button
//   const scrollToContact = () => {
//     const contactSection = document.getElementById("projects"); // Changed back to contact so it scrolls to the form!
//     if (contactSection) {
//       contactSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section
//       id="about"
//       className="relative min-h-screen bg-[#000000] text-white py-16 md:py-20 overflow-hidden font-['Open_Sans'] flex items-center"
//     >
//       {/* 🌌 Atmospheric Violet Glows */}
//       <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-[#7e3bed]/10 blur-[120px] rounded-full pointer-events-none" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7e3bed]/5 blur-[150px] rounded-full pointer-events-none" />

//       <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
//         {/* ================= HEADER ================= */}
//         <div className="text-center mb-10 md:mb-12">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.5 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7e3bed]/10 border border-[#7e3bed]/30 text-[#7e3bed] text-[10px] font-black uppercase tracking-widest mb-3 font-['Montserrat']"
//           >
//             <User size={14} /> Who I Am
//           </motion.div>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-black tracking-tighter italic font-['Montserrat'] uppercase"
//           >
//             ABOUT <span className="text-[#7e3bed]">ME</span>
//             <div className="h-1 md:h-1.5 w-16 md:w-20 bg-[#7e3bed] mx-auto mt-3 rounded-full shadow-[0_0_15px_#7e3bed]" />
//           </motion.h2>
//         </div>

//         {/* ================= BENTO GRID ================= */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          
//           {/* Main Biography Card (Spans 2 columns) */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="lg:col-span-2 p-6 md:p-10 rounded-[2rem] bg-[#0a0a0a] border border-white/10 shadow-2xl flex flex-col justify-between relative overflow-hidden group hover:border-[#7e3bed]/30 transition-colors duration-500"
//           >
//             {/* Subtle Hover Glow inside card */}
//             <div className="absolute inset-0 bg-[#7e3bed]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

//             <div className="relative z-10">
              
              
//               {/* Perfectly Aligned Text USING HERO SECTION STYLES */}
//               <div className="space-y-4 text-gray-400 leading-relaxed text-sm md:text-base italic">
//                 <p>
//                   I'm a <span className="text-white font-semibold">Computer Science (Data Science)</span> undergraduate with a passion for building complete, production-ready applications. I specialize in blending full-stack web development with data-driven analytics.
//                 </p>
//                 <p>
//                   From scalable web applications built with React to ML-powered predictive systems and Power BI dashboards, I focus on clean code, modern frameworks, and user-centric design to deliver impactful solutions.
//                 </p>
//               </div>
//               {/* FIX: Moved outside the grid so it spans the full bottom properly! */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mt-6 md:mt-8 flex flex-col md:flex-row items-center justify-between p-6 md:p-8 rounded-[2rem] bg-[#0a0a0a] border border-[#7e3bed]/30 shadow-[0_10px_40px_rgba(126,59,237,0.1)] relative overflow-hidden group"
//         >
//           {/* Animated Gradient Background for Action Bar */}
//           <div className="absolute inset-0 bg-gradient-to-r from-[#7e3bed]/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

//           <div className="text-center md:text-left mb-4 md:mb-0 relative z-10">
//             <h4 className="text-xl md:text-2xl font-black font-['Montserrat'] italic uppercase tracking-wide mb-1">Ready to start a project?</h4>
//             <p className="text-gray-400 italic text-sm md:text-base">Let's build something extraordinary together.</p>
//           </div>
          
//           {/* USING HERO SECTION BUTTON STYLES */}
//           <button 
//             onClick={scrollToContact}
//             className="relative z-10 px-8 py-4 rounded-full bg-[#7e3bed] hover:bg-[#6a2bce] transition-all font-bold text-white shadow-lg hover:shadow-[#7e3bed]/40 active:scale-95 uppercase tracking-widest text-[10px]"
//           >
//             Let's Talk
//           </button>
//         </motion.div>
              
//             </div>
//           </motion.div>

//           {/* Quick Stats Column */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-5">
//             <StatCard icon={<GraduationCap />} title="Internship" value="3" />
//             <StatCard icon={<Laptop />} title="Projects" value="8+" />
//             <StatCard icon={<Rocket />} title="CGPA" value="7.45" />
//             <StatCard icon={<Rocket />} title="Graduation" value="2026" />
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

// function StatCard({ icon, title, value }: { icon: React.ReactNode, title: string, value: string }) {
//   return (
//     <motion.div
//       whileHover={{ y: -5 }}
//       initial={{ opacity: 0, scale: 0.95 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       viewport={{ once: true }}
//       className="p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] bg-[#0a0a0a] border border-white/10 hover:border-[#7e3bed]/50 flex items-center justify-between group transition-all duration-500 shadow-xl"
//     >
//       <div className="flex items-center gap-4">
//         <div className="p-3 rounded-2xl bg-[#7e3bed]/10 text-[#7e3bed] border border-[#7e3bed]/20 group-hover:bg-[#7e3bed] group-hover:text-white transition-all duration-500 shadow-lg">
//           {icon}
//         </div>
//         <div>
//           <p className="text-[8px] md:text-[9px] text-gray-500 font-bold uppercase tracking-widest mb-0.5 font-['Montserrat']">
//             {title}
//           </p>
//           <h4 className="text-xl md:text-2xl font-black text-white font-['Montserrat'] italic tracking-tighter group-hover:text-[#7e3bed] transition-colors">
//             {value}
//           </h4>
//         </div>
//       </div>
      
//       {/* Small glowing status dot */}
//       <div className="relative flex h-2 w-2">
//         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7e3bed] opacity-75"></span>
//         <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7e3bed]"></span>
//       </div>
//     </motion.div>
//   );
// }





"use client";

import { motion } from "framer-motion";
import { User, GraduationCap, Laptop, Rocket, Zap } from "lucide-react";

export function AboutSection() {
  // Smooth scroll function for the "Let's Talk" button
  const scrollToContact = () => {
    const contactSection = document.getElementById("projects"); // Scrolls to projects
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#000000] text-white py-16 md:py-20 overflow-hidden font-['Open_Sans'] flex items-center"
    >
      {/* 🌌 Atmospheric Violet Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-[#7e3bed]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7e3bed]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* ================= HEADER ================= */}
        <div className="text-center mb-10 md:mb-12">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tighter italic font-['Montserrat'] uppercase"
          >
            ABOUT <span className="text-[#7e3bed]">ME</span>
            
            <div className="h-1 md:h-1.5 w-16 md:w-20 bg-[#7e3bed] mx-auto mt-3 rounded-full shadow-[0_0_15px_#7e3bed]" />

              <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-4 text-gray-500 font-mono tracking-widest text-sm uppercase"
            >
              Who I Am and What Drives Me.
            </motion.p>


          </motion.h2>
        </div>

        {/* ================= BENTO GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          
          {/* ================= MAIN BIOGRAPHY CARD ================= */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 p-6 md:p-10 rounded-[2.5rem] bg-[#0a0a0a] border border-white/10 shadow-2xl flex flex-col justify-between relative overflow-hidden group hover:border-[#7e3bed]/30 transition-colors duration-500"
          >
            {/* Subtle Hover Glow inside card */}
            <div className="absolute inset-0 bg-[#7e3bed]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
              
              <div>
                <h3 className="text-xl md:text-2xl font-black mb-4 md:mb-6 flex items-center gap-3 font-['Montserrat'] italic uppercase tracking-wide">
                  <Zap className="text-[#7e3bed]" /> My Mission
                </h3>
                
                {/* Text Content */}
                <div className="space-y-4 text-gray-400 leading-relaxed text-sm md:text-base italic">
                  <p>
                    I'm a <span className="text-white font-semibold">Computer Science (Data Science)</span> undergraduate with a passion for building complete, production-ready applications. I specialize in blending full-stack web development with data-driven analytics.
                  </p>
                  <p>
                    From scalable web applications built with React to ML-powered predictive systems and Power BI dashboards, I focus on clean code, modern frameworks, and user-centric design to deliver impactful solutions.
                  </p>
                </div>
              </div>

              {/* ================= NESTED ACTION BANNER ================= */}
              {/* Added mt-auto to push it to the bottom, changed bg to white/5 for contrast against the black card */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 md:mt-auto flex flex-col md:flex-row items-center justify-between p-6 rounded-[1.5rem] bg-white/5 border border-[#7e3bed]/30 shadow-inner relative overflow-hidden"
              >
                {/* Animated Gradient Background for Action Bar */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#7e3bed]/10 via-transparent to-transparent opacity-50 pointer-events-none" />

                <div className="text-center md:text-left mb-5 md:mb-0 relative z-10">
                  <h4 className="text-lg md:text-xl font-black font-['Montserrat'] italic uppercase tracking-wide mb-1 text-white">
                    Ready to start a project?
                  </h4>
                  <p className="text-gray-400 italic text-xs md:text-sm">
                    Let's build something extraordinary together.
                  </p>
                </div>
                
                {/* Hero Section Style Button */}
                <button 
                  onClick={scrollToContact}
                  className="relative z-10 w-full md:w-auto px-8 py-3.5 rounded-full bg-[#7e3bed] hover:bg-[#6a2bce] transition-all font-bold text-white shadow-lg hover:shadow-[#7e3bed]/40 active:scale-95 uppercase tracking-widest text-[10px]"
                >
                  Let's Talk
                </button>
              </motion.div>
              
            </div>
          </motion.div>

          {/* ================= QUICK STATS COLUMN ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-5 h-full">
            <StatCard icon={<GraduationCap />} title="Internship" value="3" />
            <StatCard icon={<Laptop />} title="Projects" value="8+" />
            <StatCard icon={<Rocket />} title="CGPA" value="7.45" />
            <StatCard icon={<Rocket />} title="Graduation" value="2026" />
          </div>

        </div>
      </div>
    </section>
  );
}

function StatCard({ icon, title, value }: { icon: React.ReactNode, title: string, value: string }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] bg-[#0a0a0a] border border-white/10 hover:border-[#7e3bed]/50 flex items-center justify-between group transition-all duration-500 shadow-xl h-full"
    >
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-2xl bg-[#7e3bed]/10 text-[#7e3bed] border border-[#7e3bed]/20 group-hover:bg-[#7e3bed] group-hover:text-white transition-all duration-500 shadow-lg shrink-0">
          {icon}
        </div>
        <div>
          <p className="text-[8px] md:text-[9px] text-gray-500 font-bold uppercase tracking-widest mb-0.5 font-['Montserrat']">
            {title}
          </p>
          <h4 className="text-xl md:text-2xl font-black text-white font-['Montserrat'] italic tracking-tighter group-hover:text-[#7e3bed] transition-colors">
            {value}
          </h4>
        </div>
      </div>
      
      {/* Small glowing status dot */}
      <div className="relative flex h-2 w-2 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7e3bed] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7e3bed]"></span>
      </div>
    </motion.div>
  );
}