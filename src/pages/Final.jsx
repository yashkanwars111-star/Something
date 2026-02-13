import { motion } from "framer-motion";
import bg from "../assets/final-bg.jpeg";

import gif1 from "../assets/gif1.gif";
import gif2 from "../assets/gif2.gif";
import gif3 from "../assets/gif3.gif";
import gif4 from "../assets/gif4.gif";

export default function Final() {

  const gifs = [
    { src: gif1, x: "4%", y: "18%", size: 320, dur: 8 },
    { src: gif2, x: "10%", y: "70%", size: 340, dur: 10 },
    { src: gif3, x: "74%", y: "22%", size: 320, dur: 9 },
    { src: gif4, x: "70%", y: "72%", size: 360, dur: 11 },
  ];

  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden text-white">

      {/* background slow drift */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
        animate={{ scale: [1.05, 1.12, 1.05], x: [-10, 10, -10] }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* GLOWING ORBS BACK */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-[160px]"
          style={{
            width: 400 + i * 120,
            height: 400 + i * 120,
            background:
              i % 2
                ? "rgba(228, 0, 106, 0.75)"
                : "rgba(140, 159, 255, 0.64)",
            left: `${(i * 17) % 90}%`,
            top: `${(i * 13) % 90}%`,
          }}
          animate={{ opacity: [0.2, 0.55, 0.2] }}
          transition={{ duration: 14 + i * 3, repeat: Infinity }}
        />
      ))}

      {/* PARTICLE DUST */}
      {[...Array(50)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-[10px] h-[10px] bg-red-500/70 rounded-full"
          style={{
            left: `${Math.random()*100}%`,
            top: `${Math.random()*100}%`
          }}
          animate={{ y: [0, -40, 0], opacity: [1, 1, 0] }}
          transition={{ duration: 6 + Math.random()*4, repeat: Infinity }}
        />
      ))}

      {/* FLOATING GIFS */}
      {gifs.map((gif, i) => (
        <motion.img
          key={i}
          src={gif.src}
          className="absolute pointer-events-none select-none rounded-xl shadow-[0_30px_80px_rgba(0,0,0,0.9)]"
          style={{
            width: gif.size,
            left: gif.x,
            top: gif.y,
          }}
          animate={{
            y: [0, -25, 0],
            rotate: [-2, 2, -2],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: gif.dur,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      

      {/* MESSAGE CARD */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="relative text-center max-w-2xl px-16 py-16 backdrop-blur-3xl bg-white/5 border border-white/15 rounded-[3rem] shadow-[0_0_200px_rgba(255,255,255,0.1)]"
      >
        <h1 className="text-6xl mb-12 tracking-wide">
          Thank you
        </h1>

        <p className="text-white/90 leading-relaxed mb-8 text-lg">
          For becoming part of my everyday life in the smallest ways.
          For the comfort that somehow ignored distance,
          and for the calm that stayed even after conversations ended.
        </p>

        <p className="text-white/70 leading-relaxed mb-8">
          I didn’t want a message that disappears in chat history —
          I wanted something that remains.
        </p>

        <p className="text-white/90 italic text-lg">
          I’m really glad I met you.
        </p>
      </motion.div>

      {/* vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_50%,black_100%)]" />

    </div>
  );
}
