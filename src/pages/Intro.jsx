import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import bg from "../assets/Intro-bg.jpg"; // make sure this exists

export default function Intro() {
  const [entered, setEntered] = useState(false);
  const navigate = useNavigate();

  const handleEnter = () => {
    setEntered(true);

    // audio will start in Home later
    sessionStorage.setItem("playAudio", "true");

    setTimeout(() => {
      navigate("/home");
    }, 4200);
  };

  return (
    <div className="relative h-full w-full overflow-hidden flex items-center justify-center">

      {/* 🌑 BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="absolute inset-0 bg-black/85" />

      {/* 🎞️ SUBTLE VIGNETTE */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/40 via-transparent to-black/55" />

      {/* 🟪 RETRO PIXEL GRID */}
      <div className="absolute inset-0 retro-bg z-10 pointer-events-none opacity-15" />

      {/* ✨ GLOWING ORBS (ALL OVER PAGE) */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {[
          "top-10 left-10",
          "top-1/4 right-24",
          "top-1/2 left-1/3",
          "bottom-1/3 right-1/4",
          "bottom-12 left-20",
        ].map((pos, i) => (
          <motion.span
            key={i}
            className={`absolute ${pos}
              w-[34rem] h-[34rem]
              rounded-full blur-[180px]
              ${i % 2 === 0 ? "bg-pink-400/25" : "bg-purple-500/25"}`}
            animate={{ opacity: [0.35, 0.6, 0.35] }}
            transition={{
              duration: 14 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* 🤍 ENTER BUTTON (FINAL POLISHED VERSION) */}
      <AnimatePresence>
        {!entered && (
          <motion.button
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            onClick={handleEnter}
            whileHover={{
              scale: 1.04,
              backgroundColor: "rgba(255, 182, 193, 0.25)",
              boxShadow: "0 0 45px rgba(255,182,193,0.35)",
              borderColor: "rgba(255,182,193,0.9)",
            }}
            whileTap={{
              scale: 0.96,
              backgroundColor: "rgba(255, 182, 193, 0.35)",
              boxShadow: "0 0 22px rgba(255,182,193,0.45)",
            }}
            className="
              relative z-40
              px-16 py-6
              rounded-2xl
              border border-white/50
              bg-white/12
              text-white text-xl tracking-wide
              backdrop-blur-xl
              shadow-[0_18px_60px_rgba(255,255,255,0.10)]
              transition-colors
            "
          >
            BEGIN THE JOURNEY?
          </motion.button>
        )}
      </AnimatePresence>

      {/* 🌸 BLOOM (DIMMED, ORGANIC, LONGER) */}
      <AnimatePresence>
        {entered && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {[...Array(12)].map((_, i) => (
              <motion.span
                key={`bloom-${i}`}
                className="
                  absolute w-[22rem] h-[22rem]
                  rounded-full
                  bg-gradient-to-br
                  from-pink-300/25
                  via-purple-400/22
                  to-transparent
                  blur-3xl
                "
                initial={{ scale: 0 }}
                animate={{
                  scale: 1.6,
                  rotate: i * 30,
                  x: Math.cos((i * Math.PI) / 6) * 220,
                  y: Math.sin((i * Math.PI) / 6) * 220,
                }}
                transition={{
                  duration: 4.4,
                  ease: "easeOut",
                  delay: i * 0.08,
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🌺 CIRCULAR PETALS (DIM, VARIED, BLURRED) */}
      <AnimatePresence>
        {entered && (
          <motion.div
            className="absolute inset-0 z-50 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {[...Array(280)].map((_, i) => {
              const size =
                Math.random() < 0.65 ? 4 :
                Math.random() < 0.9 ? 7 : 10;

              return (
                <motion.span
                  key={`petal-${i}`}
                  className="absolute rounded-full blur-md"
                  style={{
                    width: size,
                    height: size,
                    backgroundColor: "rgba(244,170,200,0.45)",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  initial={{ opacity: 1 }}
                  animate={{
                    y: -70,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 3.8,
                    delay: Math.random() * 1.4,
                    ease: "easeOut",
                  }}
                />
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
