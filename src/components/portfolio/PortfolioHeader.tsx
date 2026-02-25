"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const navItems = [
  { to: "#home", label: "Home" },
  { to: "#about", label: "About" },
  { to: "#experience", label: "Experience" },
  { to: "#skills", label: "Skills" },
  { to: "#projects", label: "Projects" },
  { to: "#certifications", label: "Certifications" },
  { to: "#contact", label: "Contact" },
];

export function PortfolioHeader() {
  const [active, setActive] = useState("#home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < 200) {
        setActive("#home");
        return;
      }

      navItems.forEach((item) => {
        const section = document.querySelector(item.to);
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(item.to);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-50
                   bg-[#000000]/80 backdrop-blur-xl
                   border-b border-[#7e3bed]/30
                   shadow-[0_8px_30px_rgba(0,0,0,0.8)]"
      >
        {/* Purple Glow Line */}
        <div
          className="absolute bottom-0 left-0 w-full h-[1px]
                      bg-gradient-to-r from-transparent
                      via-[#7e3bed]
                      to-transparent opacity-80"
        />

        <div className="container mx-auto flex h-16 items-center justify-between px-6 relative">

          {/* LOGO */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="text-lg font-bold text-[#7e3bed] whitespace-nowrap"
          >
            Mayur Mane Patil
          </motion.a>

          {/* CENTER NAV (Hidden on Mobile) */}
          <nav
            className="hidden lg:flex absolute left-1/2 -translate-x-1/2
                       items-center gap-2
                       bg-[#000000]/60 backdrop-blur-xl
                       px-6 py-2 rounded-full
                       border border-[#7e3bed]/20"
          >
            {navItems.map((item) => {
              const isActive = active === item.to;

              return (
                <a
                  key={item.to}
                  href={item.to}
                  className="relative px-4 py-2 text-sm font-medium"
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-full
                                 bg-[#7e3bed]/20
                                 border border-[#7e3bed]/40"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  <span
                    className={`relative z-10 transition ${
                      isActive
                        ? "text-[#7e3bed]"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* RIGHT SIDE ACTIONS (Resume and Mobile Toggle) */}
          <div className="flex items-center gap-4">
            {/* RESUME BUTTON - Visible on ALL screens now */}
            <motion.a
              href="https://drive.google.com/file/d/1MYdsa03JtnJAA4RBkePluVsMkTYwX4i0/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2
                         px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-semibold
                         bg-[#7e3bed]
                         text-white
                         shadow-[0_0_15px_rgba(126,59,237,0.5)]
                         transition"
            >
              Resume
            </motion.a>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white text-2xl p-1"
            >
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#000000]
                         border-t border-[#7e3bed]/30
                         shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col gap-4 p-6">
                {navItems.map((item) => (
                  <a
                    key={item.to}
                    href={item.to}
                    onClick={() => setMobileOpen(false)}
                    className={`text-sm transition ${
                      active === item.to ? "text-[#7e3bed]" : "text-gray-300 hover:text-[#7e3bed]"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer for fixed navbar */}
      <div className="pt-16" />
    </>
  );
}