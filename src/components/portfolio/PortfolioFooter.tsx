// "use client";

// import { Github, Linkedin, Mail, Instagram, ArrowUp } from "lucide-react";
// import { motion } from "framer-motion";

// export function PortfolioFooter() {
  
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer className="relative bg-[#000000] text-white overflow-hidden border-t border-white/5">
      
//       {/* 🌌 Atmospheric Violet Glow (Positioned tighter) */}
//       <motion.div
//         animate={{ 
//           opacity: [0.2, 0.4, 0.2] 
//         }}
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute left-1/2 bottom-[-100px] -translate-x-1/2
//                    w-[400px] h-[300px]
//                    bg-[#7e3bed]/15 blur-[120px]
//                    rounded-full -z-10"
//       />

//       {/* ✨ Top Neon Line (Subtle) */}
//       <div className="absolute top-0 left-0 w-full h-[1px]
//                       bg-gradient-to-r from-transparent
//                       via-[#7e3bed]/30
//                       to-transparent" />

//       <div className="container mx-auto px-6 py-10 flex flex-col items-center">
        
//         {/* ================= Back to Top (Reduced Margin) ================= */}
//         <motion.div 
//           whileHover={{ y: -2 }}
//           onClick={scrollToTop}
//           className="mb-6 cursor-pointer flex flex-col items-center group"
//         >
//           <div className="h-10 w-10 rounded-full border border-[#7e3bed]/20 flex items-center justify-center mb-2 group-hover:bg-[#7e3bed]/10 transition-colors">
//             <ArrowUp size={16} className="text-[#7e3bed] group-hover:-translate-y-0.5 transition-transform" />
//           </div>
//           <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 group-hover:text-[#7e3bed] transition-colors">
//             Top
//           </span>
//         </motion.div>

//         {/* ================= Social Icons (Reduced Size/Margin) ================= */}
//         {/* <div className="flex justify-center gap-4 mb-8">
//           {socialLinks.map((item, index) => {
//             const Icon = item.icon;
//             return (
//               <motion.a
//                 key={index}
//                 href={item.href}
//                 target="_blank"
//                 rel="noreferrer"
//                 whileHover={{ y: -4 }}
//                 className="h-11 w-11 flex items-center justify-center
//                            rounded-xl
//                            bg-white/[0.03]
//                            border border-white/10
//                            text-gray-400
//                            hover:text-[#7e3bed]
//                            hover:border-[#7e3bed]/40
//                            transition-all duration-300"
//               >
//                 <Icon size={18} />
//               </motion.a>
//             );
//           })}
//         </div> */}

//         {/* ================= Compact Divider ================= */}
//         <div className="w-24 h-px bg-white/10 mb-6" />

//         {/* ================= Info & Copyright (Tightened) ================= */}
//         <div className="text-center space-y-1">
//           <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500">
//             © {new Date().getFullYear()} — <span className="text-white">Mayur Patil</span>
//           </p>
          
//           <p className="text-[9px] text-gray-600 font-medium uppercase tracking-widest">
//             Built with <span className="text-[#7e3bed] inline-block mx-0.5 animate-pulse">◆</span> Next.js
//           </p>
//         </div>

//       </div>
//     </footer>
//   );
// }


"use client";

import { Github, Linkedin, Mail, Instagram, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export function PortfolioFooter() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#000000] text-white overflow-hidden border-t border-white/5">
      
      {/* 🌌 Atmospheric Violet Glow (Positioned tighter) */}
      <motion.div
        animate={{ 
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 bottom-[-100px] -translate-x-1/2
                   w-[400px] h-[300px]
                   bg-[#7e3bed]/15 blur-[120px]
                   rounded-full -z-10"
      />

      {/* ✨ Top Neon Line (Subtle) */}
      <div className="absolute top-0 left-0 w-full h-[1px]
                      bg-gradient-to-r from-transparent
                      via-[#7e3bed]/30
                      to-transparent" />

      <div className="container mx-auto px-2 py-4 flex flex-col items-center">
        
        {/* ================= Back to Top (Reduced Margin) ================= */}
        {/* <motion.div 
          whileHover={{ y: -2 }}
          onClick={scrollToTop}
          className="mb-6 cursor-pointer flex flex-col items-center group"
        >
          <div className="h-10 w-10 rounded-full border border-[#7e3bed]/20 flex items-center justify-center mb-2 group-hover:bg-[#7e3bed]/10 transition-colors">
            <ArrowUp size={16} className="text-[#7e3bed] group-hover:-translate-y-0.5 transition-transform" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 group-hover:text-[#7e3bed] transition-colors">
            Top
          </span>
        </motion.div> */}

        {/* ================= Social Icons (Reduced Size/Margin) ================= */}
        {/* <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4 }}
                className="h-11 w-11 flex items-center justify-center
                           rounded-xl
                           bg-white/[0.03]
                           border border-white/10
                           text-gray-400
                           hover:text-[#7e3bed]
                           hover:border-[#7e3bed]/40
                           transition-all duration-300"
              >
                <Icon size={18} />
              </motion.a>
            );
          })}
        </div> */}

        {/* ================= Compact Divider ================= */}
        <div className="w-24 h-px bg-white/10 mb-6" />

        {/* ================= Info & Copyright (Tightened) ================= */}
        <div className=" space-y-1">
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 self-end">
  © {new Date().getFullYear()} — <span className="text-white">Mayur Patil</span>
</p>
          
          <p className="text-[9px] text-gray-600 font-medium uppercase tracking-widest">
            Built with <span className="text-[#7e3bed] inline-block mx-0.5 animate-pulse">◆</span> Next.js
          </p>
        </div>

      </div>
    </footer>
  );
}