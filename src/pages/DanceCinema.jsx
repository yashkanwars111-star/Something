import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import danceBg from "../assets/dance-bg.jpg";
import cinemaBg from "../assets/cinema-bg.jpg";

import d1 from "../assets/dance1.jpg";
import d2 from "../assets/dance2.jpg";
import d3 from "../assets/dance3.jpg";

import c1 from "../assets/cinema1.jpg";
import c2 from "../assets/cinema2.jpg";
import c3 from "../assets/cinema3.jpeg";
import c4 from "../assets/cinema4.jpg";

export default function DanceCinema() {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  const float = {
    animate: {
      y: ["0%", "-3%", "0%"],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-black">

      {/* DANCE SIDE */}
      <motion.div
        onMouseEnter={() => setHovered("dance")}
        onMouseLeave={() => setHovered(null)}
        animate={{ filter: hovered === "cinema" ? "brightness(0.45)" : "brightness(1)" }}
        className="absolute inset-0"
        style={{ clipPath: "polygon(0 0, 60% 0, 45% 100%, 0 100%)" }}
      >
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${danceBg})` }} />
        <div className="absolute inset-0 bg-black/55" />

        {[...Array(40)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/70 rounded-full"
            animate={{ y: [0, -120, 0], opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 4 + Math.random()*2, repeat: Infinity }}
            style={{ left: `${Math.random()*100}%`, top: `${Math.random()*100}%` }}
          />
        ))}

        {/* dance photos */}
        <div className="absolute inset-0">
          {[d1,d2,d3].map((img,i)=>(
            <motion.img
              key={i}
              src={img}
              variants={float}
              animate="animate"
              whileHover={{ scale: 1.08, rotate: 0, zIndex: 20 }}
              className="absolute w-[17rem] border-[10px] border-white shadow-[0_30px_100px_rgba(0,0,0,0.9)]"
              style={{
                left:`${5+i*20}%`,
                top:`${15+i*22}%`,
                rotate:`${i%2?7:-9}deg`
              }}
            />
          ))}
        </div>

        {/* dance text */}
        <div className="absolute left-20 bottom-20 max-w-md backdrop-blur-lg bg-black/40 p-8 rounded-2xl border border-white/10">
          <h1 className="text-6xl text-white mb-3">Dance</h1>
          <p className="text-white/90 leading-relaxed mb-3">
            You don’t just hear music — you answer it.
            Every beat becomes motion, every motion becomes feeling.
          </p>
          <p className="text-white/60 text-sm italic">
            Some people listen to songs.  
            You step inside them.
          </p>
        </div>
      </motion.div>


      {/* CINEMA SIDE */}
      <motion.div
        onMouseEnter={() => setHovered("cinema")}
        onMouseLeave={() => setHovered(null)}
        animate={{ filter: hovered === "dance" ? "brightness(0.45)" : "brightness(1)" }}
        className="absolute inset-0"
        style={{ clipPath: "polygon(60% 0, 100% 0, 100% 100%, 45% 100%)" }}
      >
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${cinemaBg})` }} />
        <div className="absolute inset-0 bg-black/65" />

        {/* bigger cinema photos pushed right */}
        <div className="absolute inset-0">
          {[c1,c2,c3,c4].map((img,i)=>(
            <motion.img
              key={i}
              src={img}
              variants={float}
              animate="animate"
              whileHover={{ scale: 1.08, rotate: 0, zIndex: 20 }}
              className="absolute w-[20rem] border-[10px] border-white shadow-[0_30px_100px_rgba(0,0,0,0.9)]"
              style={{
                right:`${2+i*10}%`,
                top:`${12+(i%2)*28}%`,
                rotate:`${i%2?8:-6}deg`
              }}
            />
          ))}
        </div>

        {/* cinema text */}
        <div className="absolute right-20 bottom-20 text-right backdrop-blur-lg bg-black/40 p-8 rounded-2xl border border-white/10 max-w-md">
          <h1 className="text-6xl text-white mb-3">Cinema</h1>

          <p className="text-white/90 leading-relaxed mb-3">
            You don’t watch stories — you live with them for a while.
            Characters feel familiar, scenes linger longer than they should.
          </p>

          <p className="text-white/60 text-sm italic mb-6">
            Some movies end.  
            The feeling never really does.
          </p>

          <button
            onClick={() => navigate("/final")}
            className="px-16 py-5 border border-white/30 rounded-2xl text-lg hover:bg-white hover:text-black transition"
          >
            next
          </button>
        </div>
      </motion.div>

      {/* vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_60%,black_100%)]" />

    </div>
  );
}
