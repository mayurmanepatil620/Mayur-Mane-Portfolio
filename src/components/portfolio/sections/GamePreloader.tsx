// "use client";

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function GamePreloader({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [loading, setLoading] = useState(true);
//   const [progress, setProgress] = useState(0);
//   const [typedText, setTypedText] = useState("");
//   const [startFade, setStartFade] = useState(false);

//   const fullText = `
// > Initializing system...
// > Loading modules...
// > Connecting database...
// > Starting portfolio engine...
// > Access Granted.
// `;

//   /* ================= SCROLL LOCK FIX ================= */
//   useEffect(() => {
//     if (loading) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [loading]);

//   /* ================= TYPING EFFECT ================= */
//   useEffect(() => {
//     let index = 0;
//     const typing = setInterval(() => {
//       setTypedText(fullText.slice(0, index));
//       index++;
//       if (index > fullText.length) clearInterval(typing);
//     }, 20);

//     return () => clearInterval(typing);
//   }, []);

//   /* ================= PROGRESS LOGIC ================= */
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);

//           setStartFade(true);

//           setTimeout(() => {
//             setLoading(false);
//           }, 1000);

//           return 100;
//         }
//         return prev + 3;
//       });
//     }, 60);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       {/* WEBSITE FADE IN */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: startFade ? 1 : 0 }}
//         transition={{ duration: 1 }}
//         className="w-full overflow-x-hidden"
//       >
//         {children}
//       </motion.div>

//       {/* LOADER FADE OUT */}
//       <AnimatePresence>
//         {loading && (
//           <motion.div
//             key="loader"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: startFade ? 0 : 0.95 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0 }}
//             className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center text-green-400 overflow-hidden"
//           >
//             {/* Terminal */}
//             <div className="w-full max-w-2xl bg-black border border-green-500/30 p-6 rounded-xl shadow-xl font-mono text-sm sm:text-base whitespace-pre-line">
//               {typedText}
//               <span className="animate-pulse text-green-300">█</span>
//             </div>

//             {/* Progress */}
//             <div className="w-[85%] max-w-[450px] h-2 bg-white/10 rounded-full overflow-hidden mt-8">
//               <motion.div
//                 style={{ width: `${progress}%` }}
//                 className="h-full bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.7)]"
//               />
//             </div>

//             <p className="mt-4 text-sm tracking-widest">
//               {progress}% SYSTEM LOADING
//             </p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GamePreloader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [startFade, setStartFade] = useState(false);

  const fullText = `
> Initializing system...
> Loading modules...
> Connecting database...
> Starting portfolio engine...
> Access Granted.
`;

  /* ================= SCROLL LOCK & FORCE TOP ================= */
  useEffect(() => {
    if (loading) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";

      const handleScroll = () => {
        if (loading) window.scrollTo(0, 0);
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        document.body.style.overflow = "auto";
        document.body.style.height = "auto";
      };
    }
  }, [loading]);

  /* ================= TYPING EFFECT ================= */
  useEffect(() => {
    let index = 0;
    const typing = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(typing);
    }, 25);
    return () => clearInterval(typing);
  }, []);

  /* ================= PROGRESS LOGIC ================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Small delay after 100% before starting fade
          setTimeout(() => setStartFade(true), 500);
          // Delay before unmounting the loader component
          setTimeout(() => setLoading(false), 1200);
          return 100;
        }
        return prev + 2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* 🌐 MAIN WEBSITE CONTENT */}
      {!loading || startFade ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: startFade ? 1 : 0, y: startFade ? 0 : 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          {children}
        </motion.div>
      ) : null}

      {/* ⚡ PREMIUM LOADER */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="fixed inset-0 z-[9999] bg-[#000000] flex flex-col items-center justify-center text-[#7e3bed] overflow-hidden"
          >
            {/* Terminal Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: startFade ? 0 : 1, 
                y: startFade ? -20 : 0,
                scale: startFade ? 0.95 : 1 
              }}
              transition={{ duration: 0.5 }}
              className="w-[90%] max-w-2xl bg-[#0a0a0a] border border-[#7e3bed]/20 p-6 rounded-3xl shadow-[0_0_50px_rgba(126,59,237,0.1)] font-mono text-sm sm:text-base relative"
            >
              <div className="absolute top-4 left-6 flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/30" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/30" />
                <div className="w-2 h-2 rounded-full bg-green-500/30" />
              </div>
              <div className="mt-6 min-h-[140px] whitespace-pre-line leading-relaxed">
                {typedText}
                {!startFade && <span className="animate-pulse text-[#7e3bed] ml-1">█</span>}
              </div>
            </motion.div>

            {/* Progress Bar Container */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: startFade ? 0 : 1, y: startFade ? 20 : 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center w-full"
            >
              <div className="w-[70%] max-w-[350px] h-[3px] bg-white/5 rounded-full overflow-hidden mt-12 relative border border-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-[#7e3bed] shadow-[0_0_15px_#7e3bed]"
                />
              </div>

              <motion.p 
                className="mt-6 text-[10px] font-bold uppercase tracking-[0.5em] text-gray-500"
              >
                {progress === 100 ? "System Ready" : `Loading: ${progress}%`}
              </motion.p>
            </motion.div>

            {/* Subtle Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#7e3bed]/5 blur-[120px] rounded-full pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}