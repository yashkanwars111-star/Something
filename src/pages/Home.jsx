import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import bg from "../assets/home-bg.jpg";

import p1 from "../assets/p1.jpeg";
import p2 from "../assets/p2.jpeg";
import p3 from "../assets/p3.jpeg";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative h-full w-full overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="absolute inset-0 bg-black/85" />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.6))]" />

      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-80 h-80 bg-pink-400/20 rounded-full blur-3xl top-1/4 left-1/5" />
        <div className="absolute w-56 h-56 bg-purple-400/20 rounded-full blur-3xl top-1/3 right-1/4" />
        <div className="absolute w-40 h-40 bg-blue-300/20 rounded-full blur-2xl bottom-1/4 left-1/3" />
        <div className="absolute w-64 h-64 bg-rose-300/15 rounded-full blur-3xl bottom-1/5 right-1/6" />
      </div>

      {/* LEFT PANEL */}
      <motion.div
        initial={{ x: -220 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute left-0 top-0 h-full w-[38%]
                   bg-gradient-to-br from-[#071426] to-[#020817]
                   border-r border-white/10 shadow-2xl"
        style={{ clipPath: "polygon(0 0, 100% 0, 70% 100%, 0% 100%)" }}
      >
        <div className="absolute right-0 top-0 h-full w-[3px] bg-cyan-300/40 blur-md" />
        <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(80,140,255,0.15)]" />

        <motion.div
          animate={{ x: ["-120%", "140%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-1/2 h-full bg-white/5 blur-2xl"
        />

        {/* Polaroids */}
        <div className="relative h-full w-full">

          <motion.div
            className="absolute bg-white p-3 shadow-2xl rotate-[-8deg]"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{ top: "18%", left: "18%" }}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-pink-200/80 rotate-2" />
            <img src={p1} className="w-44 h-56 object-cover" />
          </motion.div>

          <motion.div
            className="absolute bg-white p-3 shadow-2xl rotate-[6deg]"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            style={{ top: "44%", left: "38%" }}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-yellow-200/80 -rotate-3" />
            <img src={p2} className="w-48 h-60 object-cover" />
          </motion.div>

          <motion.div
            className="absolute bg-white p-3 shadow-2xl rotate-[-5deg]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
            style={{ bottom: "12%", left: "24%" }}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-4 bg-blue-200/80 rotate-1" />
            <img src={p3} className="w-40 h-52 object-cover" />
          </motion.div>

        </div>
      </motion.div>

      {/* RIGHT CONTENT */}
      <div className="absolute right-0 top-0 h-full w-[62%] flex items-center justify-center">

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="max-w-xl text-left backdrop-blur-sm p-6 rounded-xl"
        >
          {/* Accent line */}
          <div className="w-16 h-[2px] bg-pink-300 mb-6 opacity-60" />

          <h1 className="text-6xl mb-6 font-[Playfair Display] tracking-wide drop-shadow-lg">
            A Place Made For You
          </h1>

          <p className="text-lg leading-relaxed opacity-85 font-light">
            Welcome to your world, seen through my eyes.<br /><br />
            I wanted to create a place where all the little things that make you you live together — your interests, your vibe, your smile, your chaos, your calm.<br /><br />
            Go on, explore… this is all about you.
          </p>

          <motion.button
            whileHover={{
              scale: 1.04,
              backgroundColor: "rgba(255,182,193,0.2)",
              boxShadow: "0 0 40px rgba(255,182,193,0.25)",
            }}
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate("/art")}
            className="mt-10 px-12 py-5 rounded-2xl border border-white/40 backdrop-blur-md bg-white/10"
          >
            explore
          </motion.button>
        </motion.div>

      </div>

    </div>
  );
}
