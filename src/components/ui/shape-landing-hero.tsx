"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-orange-500/20",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border border-white/10",
            "shadow-[0_8px_32px_0_rgba(249,115,22,0.25)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

function HeroGeometric({
  badge = "Mayur Portfolio",
  title1 = "Elevate Your",
  title2 = "Digital Vision",
}: {
  badge?: string;
  title1?: string;
  title2?: string;
}) {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.4 + i * 0.2,
      },
    }),
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0B1120]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-yellow-400/10 blur-3xl" />

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-orange-500/20"
          className="left-[-10%] top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-yellow-400/20"
          className="right-[-5%] top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-pink-500/20"
          className="left-[10%] bottom-[10%]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full 
                       bg-white/5 border border-white/10 mb-8"
          >
            <Circle className="h-2 w-2 fill-orange-500 text-orange-500" />
            <span className="text-sm text-white/70 tracking-wide">
              {badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                {title1}
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500">
                {title2}
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-base sm:text-lg text-white/60 mb-8 max-w-xl mx-auto"
          >
            Crafting exceptional digital experiences with premium animations,
            modern UI, and cutting-edge technology.
          </motion.p>

          {/* Buttons */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-orange-500 
                         hover:bg-orange-600 transition font-semibold text-black shadow-lg"
            >
              Get In Touch
            </a>

            <a
              href="#projects"
              className="px-6 py-3 rounded-full border border-orange-500 
                         text-orange-500 hover:bg-orange-500/20 transition font-semibold"
            >
              View My Work
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-[#0B1120]/80 pointer-events-none" />
    </section>
  );
}

export { HeroGeometric };
