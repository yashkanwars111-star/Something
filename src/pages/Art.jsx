import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import artBg from "../assets/art-bg.jpg";
import art1 from "../assets/art1.jpeg";
import art2 from "../assets/art2.jpeg";
import art3 from "../assets/art3.jpeg";
import art4 from "../assets/art4.jpeg";
import art5 from "../assets/art5.jpeg";
import art6 from "../assets/art6.jpeg";

export default function Art() {
  const navigate = useNavigate();
  const images = [art1, art2, art3, art4, art5, art6];

  return (
    <div className="relative h-full w-full overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${artBg})` }}
      />
      <div className="absolute inset-0 bg-black/75" />

      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-72 h-72 bg-purple-500/15 rounded-full blur-3xl top-1/4 left-1/6" />
        <div className="absolute w-40 h-40 bg-blue-400/15 rounded-full blur-2xl top-1/2 right-1/4" />
        <div className="absolute w-56 h-56 bg-rose-400/10 rounded-full blur-3xl bottom-1/4 left-1/3" />
        <div className="absolute w-32 h-32 bg-indigo-300/15 rounded-full blur-2xl bottom-1/5 right-1/5" />
      </div>

      {/* Main Layout Grid */}
      <div className="relative z-10 h-full grid grid-cols-[120px_1fr_420px] items-center px-16">

        {/* LEFT TITLE */}
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl text-white tracking-[0.3em]"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            fontFamily: "'Cormorant Garamond', serif"
          }}
        >
          ART
        </motion.h1>

        {/* CENTER IMAGES */}
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-16">

            {images.map((img, index) => (
              <motion.div
                key={index}
                className="relative bg-white p-3 shadow-[0_40px_120px_rgba(0,0,0,0.7)]"
                animate={{
                  rotate: index % 2 === 0 ? [-3, -5, -3] : [3, 5, 3],
                }}
                transition={{
                  duration: 6 + index,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[2px] h-10 bg-white/30" />
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-8 h-8 bg-gray-500 rounded-full shadow-inner" />

                <img
                  src={img}
                  className="w-60 h-80 object-cover"
                />
              </motion.div>
            ))}

          </div>
        </div>

        {/* RIGHT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="text-right"
        >
          <h2
            className="text-4xl text-white mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            You create in silence.
          </h2>

          <p className="text-white/70 leading-relaxed text-lg font-light">
            Not for applause. Not for attention.
            But because something inside you needs color —
            and the world feels better once you’ve touched it.
          </p>

          <motion.button
            whileHover={{
              scale: 1.04,
              backgroundColor: "rgba(255,182,193,0.2)",
              boxShadow: "0 0 40px rgba(255,182,193,0.25)",
            }}
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate("/dance")}
            className="mt-10 px-12 py-5 rounded-2xl border border-white/40
                       backdrop-blur-md bg-white/10 text-white transition"
          >
            next
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
}
