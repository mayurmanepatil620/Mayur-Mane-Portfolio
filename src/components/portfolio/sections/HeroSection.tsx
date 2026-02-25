/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useTypewriter } from "@/components/portfolio/useTypewriter";
import { typingWords } from "@/components/portfolio/portfolioData";
import avatar from "@/assets/mayur-profile.jpg";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";

export function HeroSection() {
  const typed = useTypewriter(typingWords);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /* ================= PARTICLE BACKGROUND ================= */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      // FIX: Use offsetWidth instead of window.innerWidth to prevent horizontal scrollbars
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const particles: any[] = [];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(126,59,237,0.4)";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => window.removeEventListener("resize", setCanvasSize);
  }, []);

  /* ================= SMOOTH SCROLL FUNCTION ================= */
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // FIX: Added 'w-full' and ensured 'overflow-hidden' traps everything inside
    <section id="home" className="relative w-full min-h-screen bg-[#000000] flex items-center overflow-hidden text-white pt-20 md:pt-0">
      
      {/* 🌌 PARTICLE CANVAS FIX: Added w-full h-full */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />

      <div className="container mx-auto px-6 py-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* ================= IMAGE ================= */}
        <div className="relative flex justify-center order-first md:order-last">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md"
          >
            {/* Purple Glow Background */}
            <div className="absolute -inset-2 bg-[#7e3bed] blur-2xl opacity-20 rounded-2xl" />

            {/* Rectangle Image Container */}
            <div className="relative rounded-2xl overflow-hidden border border-[#7e3bed]/40 shadow-[0_0_50px_rgba(126,59,237,0.4)]">
              <img
                src={avatar}
                alt="Mayur Mane Patil"
                className="w-full h-[320px] sm:h-[420px] md:h-[500px] object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* ================= CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left order-last md:order-first"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
            <span className="text-[#7e3bed]">
              Mayur Mane Patil
            </span>
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-gray-300 font-light">
            I'm a{" "}
            <span className="text-[#7e3bed] font-semibold">
              {typed}
            </span>
            <span className="animate-pulse text-[#7e3bed]">|</span>
          </p>

          <p className="mt-8 max-w-xl mx-auto md:mx-0 text-gray-400 leading-relaxed text-sm md:text-base italic">
            Aspiring <span className="text-white font-semibold">Data Scientist & Web Developer </span> 
            with a focus on creating data-driven digital<br className="hidden md:block" /> experiences. Proficient in Data Analysis, Machine Learning, and Power BI, combined <br className="hidden md:block" /> with core Web Development skills to build and deploy interactive platforms. 
          </p>

          {/* Social Icons */}
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            {[
              { 
                icon: Instagram, 
                href: "https://www.instagram.com/mayur__0213/",
                brandColor: "group-hover:text-[#E1306C]",
                brandBorder: "group-hover:border-[#E1306C]"
              },
              { 
                icon: Github, 
                href: "https://github.com/mayurmanepatil620",
                brandColor: "group-hover:text-white",
                brandBorder: "group-hover:border-white"
              },
              { 
                icon: Linkedin, 
                href: "https://www.linkedin.com/in/mayur-mane-patil-746940336/",
                brandColor: "group-hover:text-[#0077B5]",
                brandBorder: "group-hover:border-[#0077B5]"
              },
              { 
                icon: Mail, 
                href: "mailto:mayurmanepatil620@gmail.com",
                brandColor: "group-hover:text-[#7e3bed]",
                brandBorder: "group-hover:border-[#7e3bed]"
              }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className={`group h-12 w-12 flex items-center justify-center rounded-xl bg-[#0a0a0a] border border-[#7e3bed]/30 shadow-lg transition-all duration-300 hover:scale-110 ${social.brandBorder}`}
              >
                <social.icon className={`h-5 w-5 text-white transition-colors duration-300 ${social.brandColor}`} />
              </a>
            ))}
          </div>

          {/* Connected Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 rounded-full bg-[#7e3bed] hover:bg-[#6a2bce] transition-all font-bold text-white shadow-lg hover:shadow-[#7e3bed]/40 active:scale-95 uppercase tracking-widest text-[10px]"
            >
              View Project
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 rounded-full border border-[#7e3bed] text-[#7e3bed] hover:bg-[#7e3bed]/10 transition-all font-bold active:scale-95 uppercase tracking-widest text-[10px]"
            >
              Contact Me
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}