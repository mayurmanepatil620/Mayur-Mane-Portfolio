

// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { projects } from "@/components/portfolio/portfolioData";
// import { Github, ArrowLeft } from "lucide-react";

// export default function ProjectsPage() {
//   const navigate = useNavigate();

//   // 🔥 Go back to previous page
//   const handleBack = () => {
//     navigate(-1);
//   };

//   return (
//     <main className="min-h-screen bg-[#000000] text-white py-20 font-['Open_Sans']">
//       {/* Background Decor */}
//       <div className="fixed inset-0 pointer-events-none -z-10">
//         <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#7e3bed]/10 blur-[120px] rounded-full" />
//         <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#7e3bed]/5 blur-[120px] rounded-full" />
//       </div>

//       <div className="container mx-auto px-6 max-w-6xl">
        
//         {/* Navigation / Header */}
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-20 border-b border-white/10 pb-10">
//           <div>

//             {/* ✅ Back Button */}
//             <button
//               onClick={handleBack}
//               className="inline-flex items-center gap-2 text-gray-400 hover:text-[#7e3bed] transition-colors mb-4 text-sm font-bold uppercase tracking-widest font-['Montserrat']"
//             >
//               <ArrowLeft size={16} /> Back
//             </button>

//             <h1 className="text-5xl md:text-7xl font-black tracking-tighter italic font-['Montserrat']">
//               ALL <span className="text-[#7e3bed]">WORKS</span>
//             </h1>
//           </div>

//           <p className="text-gray-400 max-w-sm text-sm italic">
//             A complete collection of my development journey, from web applications to data science models.
//           </p>
//         </div>

//         {/* Full Project Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="group bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden hover:border-[#7e3bed]/40 transition-all duration-500 shadow-2xl"
//             >
//               {/* Project Image */}
//               <div className="relative aspect-video overflow-hidden">
//                 <img 
//                   src={project.image} 
//                   alt={project.title}
//                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
//               </div>

//               {/* Project Details */}
//               <div className="p-8">
//                 <div className="flex justify-between items-start mb-4">
//                   <h3 className="text-2xl font-black italic font-['Montserrat'] group-hover:text-[#7e3bed] transition-colors">
//                     {project.title}
//                   </h3>
//                   <span className="text-[#7e3bed]/40 font-mono text-xs font-bold">
//                     / 0{index + 1}
//                   </span>
//                 </div>

//                 <p className="text-gray-400 text-sm leading-relaxed mb-6 italic">
//                   {project.description}
//                 </p>

//                 {/* Tech Stack */}
//                 <div className="flex flex-wrap gap-2 mb-8">
//                   {project.tech.map((t, i) => (
//                     <span
//                       key={i}
//                       className="px-3 py-1 rounded-md bg-[#111] border border-white/10 text-[9px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-[#7e3bed]/80"
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Source Code Link */}
//                 <a 
//                   href={project.href} 
//                   target="_blank" 
//                   rel="noreferrer"
//                   className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-black text-[10px] uppercase tracking-tighter hover:bg-[#7e3bed] hover:text-white transition-all shadow-lg italic font-['Montserrat']"
//                 >
//                   Source Code <Github size={14} />
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </main>
//   );
// }








// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { projects } from "@/components/portfolio/portfolioData";
// import { Github, ArrowLeft } from "lucide-react";

// export default function ProjectsPage() {
//   return (
//     <main className="min-h-screen bg-[#000000] text-white py-20 font-['Open_Sans']">
//       <div className="container mx-auto px-6 max-w-6xl">
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-20 border-b border-white/10 pb-10">
//           <div>
//             {/* ✅ FIXED LINK: Points to Home Page + Projects ID */}
//             <Link
//               to="/#projects"
//               className="inline-flex items-center gap-2 text-gray-400 hover:text-[#7e3bed] transition-colors mb-4 text-sm font-bold uppercase tracking-widest font-['Montserrat']"
//             >
//               <ArrowLeft size={16} /> Back to Projects
//             </Link>

//             <h1 className="text-5xl md:text-7xl font-black tracking-tighter italic font-['Montserrat']">
//               ALL <span className="text-[#7e3bed]">WORKS</span>
//             </h1>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <motion.div key={index} className="group bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden p-8">
//               <div className="relative aspect-video overflow-hidden rounded-xl mb-6">
//                 <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
//               </div>
//               <h3 className="text-2xl font-black italic font-['Montserrat'] group-hover:text-[#7e3bed] transition-colors">{project.title}</h3>
//               <p className="text-gray-400 text-sm leading-relaxed mb-6 italic">{project.description}</p>
//               <a href={project.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-black text-[10px] uppercase italic font-['Montserrat']">
//                 Source Code <Github size={14} />
//               </a>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }






