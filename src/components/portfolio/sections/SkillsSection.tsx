"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Terminal, Database, Cloud, Brain, Layers, Cpu, X, Layout, Cog } from "lucide-react";

// IMPORTING OFFICIAL BRAND LOGOS FROM REACT-ICONS
import { 
  SiHtml5, SiCss3, SiJavascript, SiPython, SiCplusplus, 
  SiNumpy, SiPandas, SiTensorflow, SiScikitlearn, 
  SiReact, SiNextdotjs, SiTailwindcss, SiFramer, SiGreensock, 
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, 
  SiGit, SiGithub, SiDocker, SiAmazonwebservices, SiJupyter, SiLinux 
} from "react-icons/si";
import { FaJava, FaDatabase, FaProjectDiagram, FaChartBar } from "react-icons/fa";

// DICTIONARY: Descriptions, types, official Logos, AND OFFICIAL BRAND COLORS!
const skillDetails: Record<string, { desc: string, type: string, icon: React.ReactNode, color: string }> = {
  "HTML": { desc: "The standard markup language for documents designed to be displayed in a web browser.", type: "Language", icon: <SiHtml5 />, color: "#E34F26" },
  "CSS": { desc: "Style sheet language used for describing the presentation of a document written in HTML.", type: "Language", icon: <SiCss3 />, color: "#1572B6" },
  "JavaScript": { desc: "The core programming language of the Web, enabling dynamic and interactive user experiences.", type: "Language", icon: <SiJavascript />, color: "#F7DF1E" },
  "Python": { desc: "A high-level, general-purpose programming language heavily used in Data Science and ML.", type: "Language", icon: <SiPython />, color: "#3776AB" },
  "Java": { desc: "A popular object-oriented programming language used for enterprise backend systems.", type: "Language", icon: <FaJava />, color: "#007396" },
  "SQL": { desc: "Domain-specific language used in programming and designed for managing data held in an RDBMS.", type: "Language", icon: <FaDatabase />, color: "#4479A1" },
  "C++": { desc: "A high-performance programming language used for system/software development and game engines.", type: "Language", icon: <SiCplusplus />, color: "#00599C" },
  "NumPy": { desc: "A fundamental package for scientific computing with Python, offering powerful N-dimensional arrays.", type: "Data Science", icon: <SiNumpy />, color: "#013243" },
  "Pandas": { desc: "A fast, powerful, flexible, and easy-to-use open-source data analysis and manipulation tool.", type: "Data Science", icon: <SiPandas />, color: "#150458" },
  "TensorFlow": { desc: "An end-to-end open-source platform for machine learning developed by Google.", type: "Data Science", icon: <SiTensorflow />, color: "#FF6F00" },
  "Scikit-Learn": { desc: "Simple and efficient tools for predictive data analysis and machine learning in Python.", type: "Data Science", icon: <SiScikitlearn />, color: "#F7931E" },
  "Power BI": { desc: "An interactive data visualization software product developed by Microsoft for business intelligence.", type: "Data Science", icon: <FaChartBar />, color: "#F2C811" },
  "React.js": { desc: "A free and open-source front-end JavaScript library for building user interfaces based on components.", type: "Frontend", icon: <SiReact />, color: "#61DAFB" },
  "Next.js": { desc: "A React framework that enables several extra features, including server-side rendering and generating static websites.", type: "Frontend", icon: <SiNextdotjs />, color: "#FFFFFF" },
  "Tailwind CSS": { desc: "A utility-first CSS framework packed with classes that can be composed to build any design.", type: "Frontend", icon: <SiTailwindcss />, color: "#06B6D4" },
  "Framer Motion": { desc: "A production-ready motion library for React that makes creating animations incredibly easy.", type: "Frontend", icon: <SiFramer />, color: "#0055FF" },
  "GSAP": { desc: "A robust JavaScript toolset that turns developers into animation superheroes.", type: "Frontend", icon: <SiGreensock />, color: "#88CE02" },
  "Node.js": { desc: "A cross-platform, open-source server environment that can run JavaScript on the backend.", type: "Backend", icon: <SiNodedotjs />, color: "#339933" },
  "Express": { desc: "A fast, unopinionated, minimalist web framework for Node.js.", type: "Backend", icon: <SiExpress />, color: "#FFFFFF" },
  "MongoDB": { desc: "A source-available cross-platform document-oriented database program (NoSQL).", type: "Backend", icon: <SiMongodb />, color: "#47A248" },
  "MySQL": { desc: "An open-source relational database management system.", type: "Backend", icon: <SiMysql />, color: "#4479A1" },
  "REST APIs": { desc: "An architectural style for an API that uses HTTP requests to access and use data.", type: "Backend", icon: <Cloud />, color: "#00E676" },
  "JDBC": { desc: "Java Database Connectivity is an API for the Java programming language that defines how a client accesses a database.", type: "Backend", icon: <FaJava />, color: "#007396" },
  "Git": { desc: "A distributed version control system that tracks changes in any set of computer files.", type: "Tools", icon: <SiGit />, color: "#F05032" },
  "GitHub": { desc: "A developer platform that allows developers to create, store, manage, and share their code.", type: "Tools", icon: <SiGithub />, color: "#FFFFFF" },
  "Docker": { desc: "A set of platform as a service products that use OS-level virtualization to deliver software in containers.", type: "Tools", icon: <SiDocker />, color: "#2496ED" },
  "AWS": { desc: "Amazon Web Services provides on-demand cloud computing platforms and APIs to individuals and companies.", type: "Tools", icon: <SiAmazonwebservices />, color: "#FF9900" },
  "Jupyter": { desc: "Project Jupyter is a non-profit organization created to develop open-source software and open standards.", type: "Tools", icon: <SiJupyter />, color: "#F37626" },
  "Linux": { desc: "A family of open-source Unix-like operating systems based on the Linux kernel.", type: "Tools", icon: <SiLinux />, color: "#FCC624" },
  "OOP": { desc: "Object-oriented programming is a programming paradigm based on the concept of 'objects'.", type: "Professional", icon: <Code2 />, color: "#9C27B0" },
  "Agile": { desc: "A set of frameworks and practices based on the values and principles expressed in the Agile Manifesto.", type: "Professional", icon: <FaProjectDiagram />, color: "#00BCD4" },
  "SDLC": { desc: "Software Development Life Cycle is a process used by the software industry to design, develop and test software.", type: "Professional", icon: <Cog />, color: "#8BC34A" },
  "Problem Solving": { desc: "The process of achieving a goal by overcoming obstacles, a frequent part of most activities.", type: "Professional", icon: <Brain />, color: "#FF9800" },
  "UI/UX Design": { desc: "User Interface and User Experience design, focusing on the aesthetics and usability of software.", type: "Professional", icon: <Layout />, color: "#E91E63" },
};

export function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const skillGroups = [
    { title: "Languages", icon: <Terminal size={24} />, skills: ["HTML", "CSS", "JavaScript", "Python", "Java", "SQL", "C++"] },
    { title: "Data Science", icon: <Brain size={24} />, skills: ["NumPy", "Pandas", "TensorFlow", "Scikit-Learn", "Power BI"] },
    { title: "Frontend", icon: <Code2 size={24} />, skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "GSAP"] },
    { title: "Backend", icon: <Database size={24} />, skills: ["Node.js", "Express", "MongoDB", "MySQL", "REST APIs", "JDBC"] },
    { title: "Tools & Cloud", icon: <Cloud size={24} />, skills: ["Git", "GitHub", "Docker", "AWS", "Jupyter", "Linux"] },
    { title: "Professional", icon: <Layers size={24} />, skills: ["OOP", "Agile", "SDLC", "Problem Solving", "UI/UX Design"] },
  ];

  const col1 = skillGroups.filter((_, i) => i % 2 === 0);
  const col2 = skillGroups.filter((_, i) => i % 2 !== 0);
  
  const allSkillKeys = Object.keys(skillDetails);

  return (
    <section id="skills" className="relative min-h-screen bg-[#000000] text-white py-20 md:py-32 overflow-hidden font-['Open_Sans']">
      
      {/* 🌌 Atmospheric Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-1/4 right-[-5%] w-72 md:w-[500px] h-72 md:h-[500px] bg-[#7e3bed]/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 left-[-5%] w-72 md:w-[500px] h-72 md:h-[500px] bg-[#7e3bed]/5 blur-[150px] rounded-full" />
      </div>

      {/* 🌌 GLOBAL RANDOM FLOATING LOGOS BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.05] -z-10 select-none">
        {allSkillKeys.map((skill, idx) => {
          const startLeft = (idx * 17.5) % 100;
          const startTop = (idx * 23.3) % 100;
          const duration = 25 + (idx % 15);
          const dirX = idx % 2 === 0 ? 150 : -150;
          const dirY = idx % 3 === 0 ? 150 : -150;

          return (
            <motion.div
              key={`global-${idx}`}
              className="absolute text-[40px] md:text-[90px]"
              style={{ left: `${startLeft}%`, top: `${startTop}%`, color: skillDetails[skill].color }}
              animate={{
                x: [0, dirX, -dirX / 2, dirX / 2, 0],
                y: [0, dirY, dirY / 2, -dirY / 2, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ repeat: Infinity, duration: duration, ease: "linear" }}
            >
              {skillDetails[skill].icon}
            </motion.div>
          );
        })}
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* ================= HEADER ================= */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center justify-center gap-4 md:gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7e3bed]/10 border border-[#7e3bed]/30 text-[#7e3bed] text-[10px] font-black uppercase tracking-widest mb-4 font-['Montserrat'] backdrop-blur-md">
              <Cpu size={14} /> Arsenal
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter italic font-['Montserrat'] uppercase drop-shadow-xl">
              TECH <span className="text-[#7e3bed]">STACK</span>
            </h2>
            <div className="h-1.5 w-20 bg-[#7e3bed] mt-4 rounded-full shadow-[0_0_15px_#7e3bed]" />
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-gray-400 font-bold tracking-widest text-[10px] md:text-xs uppercase italic max-w-md mx-auto text-center mt-2 backdrop-blur-sm p-2 rounded-xl">
            The tools, languages, and frameworks I use to engineer data-driven solutions.
          </motion.p>
        </div>

        {/* ================= STAGGERED DATA NODES ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div className="space-y-6 md:space-y-10">
            {col1.map((group, idx) => (
              <SkillNode key={idx} group={group} index={idx} onSkillClick={setSelectedSkill} />
            ))}
          </div>
          <div className="space-y-6 md:space-y-10 md:mt-24">
            {col2.map((group, idx) => (
              <SkillNode key={idx} group={group} index={idx} onSkillClick={setSelectedSkill} />
            ))}
          </div>
        </div>
      </div>

      {/* ================= POPUP MODAL ================= */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedSkill(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()} 
              className="relative w-full max-w-[90%] md:max-w-md bg-[#0a0a0a] border border-[#7e3bed]/40 rounded-[2rem] p-6 md:p-8 shadow-[0_0_50px_rgba(126,59,237,0.2)] overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7e3bed]/20 blur-[50px] rounded-full pointer-events-none" />

              <button onClick={() => setSelectedSkill(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors">
                <X size={20} />
              </button>

              <div className="flex flex-col items-center text-center mt-2 md:mt-4">
                <div 
                  className="w-20 h-20 md:w-24 md:h-24 mb-5 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center shadow-2xl"
                  style={{ color: skillDetails[selectedSkill]?.color, boxShadow: `0 0 30px ${skillDetails[selectedSkill]?.color}40` }}
                >
                   <span className="text-5xl md:text-6xl">
                     {skillDetails[selectedSkill]?.icon || <Code2 size={48} />}
                   </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider font-['Montserrat'] italic mb-2">
                  {selectedSkill}
                </h3>
                <span className="px-3 py-1 mb-5 rounded-lg bg-white/5 border border-white/10 text-[9px] md:text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                  {skillDetails[selectedSkill]?.type || "Technology"}
                </span>

                <p className="text-gray-300 text-xs md:text-sm leading-relaxed italic font-['Open_Sans'] px-2">
                  {skillDetails[selectedSkill]?.desc || "Advanced technology used for data-driven engineering."}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

/* ================= CUSTOM CARD COMPONENT ================= */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SkillNode({ group, index, onSkillClick }: { group: any; index: number; onSkillClick: (skill: string) => void }) {
  const floatingSkills = [...group.skills, ...group.skills, ...group.skills];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      // Responsive padding: p-6 on mobile, p-10 on desktop
      className="group relative rounded-[2rem] p-6 sm:p-8 md:p-10 bg-[#0a0a0a]/90 backdrop-blur-sm border border-white/5 hover:border-[#7e3bed]/40 transition-all duration-500 shadow-2xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#7e3bed]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* CARD INNER RANDOM FLOATING LOGOS - Slightly Brighter */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0">
        {floatingSkills.map((skill: string, i: number) => {
          const startLeft = (i * 27) % 100;
          const startTop = (i * 31) % 100;
          const duration = 15 + (i % 7);
          const dirX = i % 2 === 0 ? 40 : -40;
          const dirY = i % 3 === 0 ? 40 : -40;

          return (
            <motion.div
              key={`card-${i}`}
              className="absolute text-[30px] md:text-[50px] opacity-[0.08] group-hover:opacity-[0.25] transition-opacity duration-700"
              style={{ left: `${startLeft}%`, top: `${startTop}%`, color: skillDetails[skill]?.color }}
              animate={{
                x: [0, dirX, -dirX, 0],
                y: [0, dirY, -dirY, 0],
                rotate: [0, 90, 180, 360]
              }}
              transition={{ repeat: Infinity, duration: duration, ease: "easeInOut" }}
            >
              {skillDetails[skill].icon}
            </motion.div>
          );
        })}
      </div>

      {/* Header Area: Scaled down gracefully for mobile screens */}
      <div className="flex flex-row items-center gap-4 sm:gap-5 md:gap-6 mb-6 md:mb-8 relative z-10">
        
        {/* Responsive Logo Container: w-14 on mobile, w-72px on desktop */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-[72px] md:h-[72px] shrink-0 rounded-[1rem] md:rounded-[1.25rem] bg-[#7e3bed] text-white flex items-center justify-center shadow-[0_0_35px_rgba(126,59,237,0.7)] group-hover:shadow-[0_0_50px_rgba(126,59,237,0.9)] group-hover:scale-105 transition-all duration-500">
          <div className="scale-110 md:scale-125">{group.icon}</div>
        </div>
        
        {/* Responsive Text Sizes */}
        <div className="flex flex-col justify-center">
          <h3 className="text-[1.35rem] sm:text-2xl md:text-[28px] font-black tracking-wider text-[#7e3bed] font-['Montserrat'] uppercase italic drop-shadow-lg leading-tight">
            {group.title}
          </h3>
          <p className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold mt-1 md:mt-2">
            {group.skills.length} Technologies
          </p>
        </div>
      </div>

      {/* Responsive Grid Buttons: Smaller text and padding on mobile */}
      <div className="flex flex-wrap gap-2 md:gap-3 relative z-10">
        {group.skills.map((skill: string) => (
          <button
            key={skill}
            onClick={() => onSkillClick(skill)}
            className="px-3 py-1.5 sm:px-4 sm:py-2 text-[9px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-widest rounded-[0.6rem] md:rounded-xl bg-[#0a0a0a] border border-white/10 text-gray-300 hover:bg-white/[0.05] hover:border-[#7e3bed]/50 hover:text-white transition-all duration-300 font-mono shadow-md active:scale-95 flex items-center gap-2 md:gap-2.5 group/btn"
          >
            <span className="text-xs sm:text-sm group-hover/btn:scale-110 transition-transform" style={{ color: skillDetails[skill]?.color || '#7e3bed' }}>
              {skillDetails[skill]?.icon || <span className="font-black text-[10px]">/</span>}
            </span>
            {skill}
          </button>
        ))}
      </div>

      {/* Top right decorative dots */}
      <div className="absolute top-5 right-5 md:top-6 md:right-8 flex gap-1.5 opacity-40 group-hover:opacity-100 transition-opacity duration-500 z-10">
        <div className="w-1.5 h-1.5 rounded-full bg-[#7e3bed]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#7e3bed]/70" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#7e3bed]/30" />
      </div>
    </motion.div>
  );
}