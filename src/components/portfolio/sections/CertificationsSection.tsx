"use client";

import { motion } from "framer-motion";
import { certifications } from "@/components/portfolio/portfolioData";
import { Award, CheckCircle2, ShieldCheck, ExternalLink } from "lucide-react";

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="relative min-h-screen bg-[#000000] text-white py-32 overflow-hidden"
    >
      {/* 🌌 Background Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#7e3bed]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#7e3bed]/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* ================= HEADER ================= */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-[#7e3bed] font-mono text-xs tracking-[0.4em] uppercase mb-4"
          >
            <ShieldCheck size={14} /> Verified Achievements
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black tracking-tighter italic"
          >
            CERTIFI<span className="text-[#7e3bed]">CATIONS</span>
          </motion.h2>
          <div className="h-1 w-20 bg-[#7e3bed] mx-auto mt-6 rounded-full shadow-[0_0_15px_#7e3bed]" />
        </div>

        {/* ================= CERTIFICATIONS GRID ================= */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 italic">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl hover:border-[#7e3bed]/40 transition-all duration-500 flex flex-col justify-between shadow-2xl cursor-pointer"
            >
              {/* Top Section */}
              <div>
                <div className="mb-6 inline-flex p-3 rounded-2xl bg-[#7e3bed]/10 text-[#7e3bed] group-hover:bg-[#7e3bed] group-hover:text-white transition-all duration-500 shadow-lg">
                  <Award size={20} />
                </div>
                
                <h3 className="text-lg font-bold leading-tight text-white group-hover:text-[#7e3bed] transition-colors line-clamp-2">
                  {cert.title}
                </h3>
                
                <p className="mt-3 text-xs text-gray-400 font-medium uppercase tracking-wider flex items-center gap-2">
                   <CheckCircle2 size={12} className="text-[#7e3bed]" /> {cert.issuer}
                </p>
              </div>

              {/* Bottom Section */}
              <div className="mt-8 flex items-center justify-between">
                <span className="text-[10px] font-mono text-gray-500 tracking-tighter uppercase">
                  Issued: {cert.year}
                </span>
                
                <div className="flex items-center gap-2 text-[#7e3bed] text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                  View  <ExternalLink size={12} />
                </div>
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-1.5 h-1.5 bg-[#7e3bed] rounded-full blur-[2px] animate-pulse" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}